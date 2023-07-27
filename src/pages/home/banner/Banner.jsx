import React from "react";
import bannerL from "../../../assets/img/グループ 215.png";
import bannerR from "../../../assets/img/マスクグループ 95.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner--left">
        <img src={bannerL} alt="hero banner" className="banner__img" />
      </div>
      <div className="banner--right">
        <img src={bannerR} alt="hero banner" className="banner__img" />
      </div>
    </div>
  );
};

export default Banner;
