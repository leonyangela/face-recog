import { useFaceDetectionStore } from "../../store";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const AlertPopupComponent = ({ popupText }) => {
  const setIsAlert = useFaceDetectionStore((state) => state.setIsAlert);
  const setIsAlertText = useFaceDetectionStore((state) => state.setIsAlertText);

  const handleClick = () => {
    setIsAlert(false);
    setIsAlertText();
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="absolute bg-black w-full h-full opacity-60 z-10"></div>
      <div className="w-fit h-fit bg-white rounded-md z-20">
        <div onClick={handleClick} className="text-right p-1 global-cursor-pointer pointer-events-auto">
          <CloseOutlinedIcon />
        </div>
        <h1 className="pt-2 pb-6 px-4">{popupText}</h1>
      </div>
    </div>
  );
};

export default AlertPopupComponent;
