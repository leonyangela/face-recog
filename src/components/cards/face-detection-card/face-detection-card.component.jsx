import "./face-detection-card.styles.css";
import { useFaceDetectionStore } from "../../../store";

import SubmitBtn from "../../button/submit-btn/submit-btn.component";
import FaceDetectionInput from "../../form-input/face-detection-input.component";
import TipsCardComponent from "../tips-card/tips-card.component";
import FaceResultCard from "../face-results-card/face-result-card.component";

import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import FullscreenOutlinedIcon from "@mui/icons-material/FullscreenOutlined";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";
import { detectFace } from "../../../utils/firebase/appwrite.utils";

const tipsData = {
  title: "Tips for best results:",
  tips: [
    {
      uid: 1,
      tips: "Use high-quality images",
    },
    {
      uid: 2,
      tips: "Ensure faces are clearly visible",
    },
    {
      uid: 3,
      tips: "Good lighting improves accuracy",
    },
    {
      uid: 4,
      tips: "Use vertical orientation to avoid image being stretched",
    },
  ],
};

const FaceDetectionCard = () => {
  const inputURL = useFaceDetectionStore((state) => state.inputURL);
  const setFaceResult = useFaceDetectionStore((state) => state.setFaceResult);
  const clearResult = useFaceDetectionStore((state) => state.clearResult);
  const faceResult = useFaceDetectionStore((state) => state.faceResult);
  const setIsLoading = useFaceDetectionStore((state) => state.setIsLoading);
  const setIsAlert = useFaceDetectionStore((state) => state.setIsAlert);
  const setIsAlertText = useFaceDetectionStore((state) => state.setIsAlertText);

  // Express
  // const handleSubmit = () => {
  //   if (inputURL) {
  //     // setFaceResult(dummyData[0].data.regions);
  //     // return;

  //     setIsLoading(true);
  //     fetch(import.meta.env.VITE_LOCAL_ENDPOINT, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         input: inputURL,
  //       }),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setIsLoading(false);
  //         setFaceResult(data.outputs[0].data.regions);
  //       })
  //       .catch((err) => {
  //         setIsLoading(false);
  //         setIsAlert(true);
  //         if (err.message == "Failed to fetch") {
  //           setIsAlertText(`We couldn’t reach our servers. Please try again in a moment.`);
  //         } else {
  //           setIsAlertText(`Unexpected error occurred. Something went wrong: ${err.message}`);
  //         }
  //         console.error(err);
  //       });
  //   } else {
  //     setIsAlert(true);
  //     setIsAlertText(
  //       "Paste an image URL or choose an example image to get started.",
  //     );
  //   }
  // };

  const handleSubmit = async () => {
    if (!inputURL) {
      setIsAlert(true);
      setIsAlertText(
        "Paste an image URL or choose an example image to get started.",
      );
      return;
    }

    setIsLoading(true);

    try {
      const data = await detectFace(inputURL);

      setIsLoading(false);
      setFaceResult(data?.outputs[0]?.data?.regions || []);
    } catch (err) {
      setIsLoading(false);
      setIsAlert(true);

      if (err.message === "Failed to fetch") {
        setIsAlertText(
          `We couldn't reach our servers. Please try again in a moment.`,
        );
      } else {
        setIsAlertText(
          `Unexpected error occurred. Something went wrong: ${err.message}`,
        );
      }

      console.error(err);
    }
  };

  const handleReset = () => {
    clearResult();
  };

  return (
    <div className="face-detection-card">
      <div className="flex flex-col shadow-md p-4 rounded-md overflow-hidden">
        <div className="grow">
          <h1 className="flex items-center gap-2">
            <ImageOutlinedIcon />
            Image Input
          </h1>
          <div className="py-4">
            <FaceDetectionInput />
          </div>

          <div className="pb-4">
            <TipsCardComponent data={tipsData} />
          </div>
        </div>

        {faceResult ? (
          <>
            <SubmitBtn
              text={"Try Another Image"}
              onClick={handleReset}
              icon={<ReplayOutlinedIcon />}
            />
          </>
        ) : (
          <>
            <SubmitBtn
              text={"Detect Faces"}
              onClick={handleSubmit}
              icon={<FullscreenOutlinedIcon />}
            />
          </>
        )}
      </div>
      <FaceResultCard />
    </div>
  );
};

export default FaceDetectionCard;
