import "./tips-card.styles.css";

const TipsCardComponent = ({ data }) => {
  const { title, tips } = data;

  return (
    <div className="tips-card">
      <h2 className="tips-card-title">{title}</h2>
      <ul className="tips-card-list">
        {tips?.map((tip, index) => (
          <li key={index}>{tip.tips}</li>
        ))}
      </ul>
    </div>
  );
};

export default TipsCardComponent;
