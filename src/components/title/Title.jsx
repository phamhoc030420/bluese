import "./title.scss";

const Title = ({ children, addClass }) => {
  return (
    <div className={`section-title ${addClass}`}>
      <div className={`section-title__dot ${addClass}__dot`}>
        <div className={`section-title__flash ${addClass}__flash`}></div>
      </div>
      <span className={`section-title__txt ${addClass}__txt`}>{children}</span>
    </div>
  );
};

export default Title;
