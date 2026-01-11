import SubmitBtn from "../button/submit-btn/submit-btn.component";

const ImageLinkFormComponent = () => {
  return (
    <div className="">
      <div className="">This input will detect faces</div>
      <div className="pb-4">
        <input type="text" name="face-recog" id="face-recog" className="form-input" />
      </div>
      <SubmitBtn className={""} text={"Submit"} />
    </div>
  );
};

export default ImageLinkFormComponent;
