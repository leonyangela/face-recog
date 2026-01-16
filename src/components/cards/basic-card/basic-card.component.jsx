import "./basic-card.styles.css";

const BasicCard = ({ title, text }) => {
  return (
    <div className="basic-card-item">
      <div className="basic-card-step">{title}</div>
      <div className="basic-card-text">{text}</div>
    </div>
  );
};

export default BasicCard;
