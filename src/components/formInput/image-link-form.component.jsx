import { useState } from "react";
import SubmitBtn from "../button/submit-btn/submit-btn.component";

const ImageLinkFormComponent = () => {
  const [inputURL, setInputURL] = useState();

  const handleChange = (event) => {
    const { value } = event.target;

    setInputURL(value);
  };

  const returnClarifaiJSONObject = (imageURL) => {
    // Your PAT (Personal Access Token) can be found in the Account's Security section
    const PAT = import.meta.env.VITE_CLARIFAI_PAT;
    // Specify the correct user_id/app_id pairings
    // Since you're making inferences outside your app's scope
    const USER_ID = import.meta.env.VITE_CLARIFAI_USER_ID;
    const APP_ID = import.meta.env.VITE_CLARIFAI_APP_ID;
    // Change these to whatever model and image URL you want to use
    const MODEL_ID = "face-detection";
    const MODEL_VERSION_ID = "45fb9a671625463fa646c3523a3087d5";
    const IMAGE_URL = imageURL;
    // const IMAGE_BYTES_STRING = imageURL;

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////

    const raw = JSON.stringify({
      user_app_id: {
        user_id: USER_ID,
        app_id: APP_ID,
      },
      inputs: [
        {
          data: {
            image: {
              url: IMAGE_URL,
              // base64: IMAGE_BYTES_STRING,
            },
          },
        },
      ],
    });

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Key " + PAT,
      },
      body: raw,
    };

    return requestOptions;
  };

  const handleSubmit = () => {
    console.log(inputURL);

    fetch(
      "https://api.clarifai.com/v2/models/" + "face-detection" + "/outputs",
      returnClarifaiJSONObject(inputURL)
    )
      .then((response) => response.json())
      .then((result) => {
        const regions = result.outputs[0].data.regions;
        console.log(result);
        

        regions.forEach((region) => {
          // Accessing and rounding the bounding box values
          const boundingBox = region.region_info.bounding_box;
          const topRow = boundingBox.top_row.toFixed(3);
          const leftCol = boundingBox.left_col.toFixed(3);
          const bottomRow = boundingBox.bottom_row.toFixed(3);
          const rightCol = boundingBox.right_col.toFixed(3);

          region.data.concepts.forEach((concept) => {
            // Accessing and rounding the concept value
            const name = concept.name;
            const value = concept.value.toFixed(4);

            console.log(
              `${name}: ${value} BBox: ${topRow}, ${leftCol}, ${bottomRow}, ${rightCol}`
            );
          });
        });
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="">
      <div className="">This input will detect faces</div>
      <div className="pb-4">
        <input
          type="text"
          name="face-recog"
          id="face-recog"
          className="form-input"
          onChange={handleChange}
        />
      </div>
      <SubmitBtn className={""} text={"Submit"} onClick={handleSubmit} />
    </div>
  );
};

export default ImageLinkFormComponent;
