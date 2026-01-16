import { useFaceDetectionStore } from "../../store";

const FaceDetectionInput = () => {
  const setInputURL = useFaceDetectionStore((state) => state.setInputURL);
  const inputURL = useFaceDetectionStore((state) => state.inputURL);
  const clearResult = useFaceDetectionStore((state) => state.clearResult);

  const handleChange = (event) => {
    const { value } = event.target;

    clearResult();
    setInputURL(value);
  };

  return (
    <div className="w-full">
      <textarea
        name="face-recog"
        id="face-recog"
        className="form-input resize-none"
        rows={5}
        onChange={handleChange}
        placeholder="Paste an image URL to detect faces."
        value={inputURL ? inputURL : ""}
      ></textarea>
    </div>
  );
};

export default FaceDetectionInput;
