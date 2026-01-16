import "../button.styles.css";
import "./submit-btn.styles.css";

const SubmitBtn = ({ text, className, onClick, icon }) => {
  return (
    <div
      className={`global-btn global-transition-all global-cursor-pointer justify-center flex ${className}`}
      onClick={onClick}
    >
      {icon}
      {text}
    </div>
  );
};

export default SubmitBtn;
