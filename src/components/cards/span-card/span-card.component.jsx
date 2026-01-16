import { useFaceDetectionStore } from "../../../store";
import "./span-card.styles.css";

const SpanCard = ({ spanText, imgURL, description }) => {
  const setInputURL = useFaceDetectionStore((state) => state.setInputURL);
  const clearResult = useFaceDetectionStore((state) => state.clearResult);
  
  const handleClick = () => {
    clearResult();
    setInputURL(imgURL);
  };

  return (
    <div onClick={handleClick}>
      <span className="underline global-cursor-pointer">{spanText}</span> –{" "}
      {description}
    </div>
  );
};

export default SpanCard;
