import "../button.styles.css";
import "./submit-btn.styles.css";

const SubmitBtn = ({ text, className, onClick }) => {
  return (
    <div
      className={`global-btn global-transition-all global-cursor-pointer ${className}`}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default SubmitBtn;
