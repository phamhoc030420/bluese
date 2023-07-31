import "./boxTitle.scss";

export const BoxTitle = ({ text }) => {
  return (
    <div className="box_container">
      <h2 className="box_content">{text}</h2>
    </div>
  );
};
