import "./buttons.scss";

export const BtnTab = ({ children, addClass, onClick }) => {
  return (
    <button className={`btn--tab ${addClass}`} onClick={onClick}>
      {children}
    </button>
  );
};
