import video from "../../../assets/videos/videoHero.mp4";
import banner from "../../../assets/img/マスクグループ 97.png";
import company from "../../../assets/img/グループ 217.png";
import icnR from "../../../assets/img/icn_arw_pc.svg";
import newsData from "../../../assets/json/news.json";
import { useNavigate } from "react-router-dom";
import Title from "../../../components/title/Title";

const data = newsData.slice(0, 5);

const OurCompany = () => {
  const navigate = useNavigate();
  return (
    <div className="our-company">
      <div className="our-company__banner">
        <div className="our-company__video">
          <video className="video-hero" loop autoPlay>
            <source src={video} type=" video/mp4 " />
          </video>
        </div>
        <img src={banner} alt="" />
        <div className="overlay" />
      </div>

      <div className="our-company__main">
        <Title addClass="our-company__title--md">OUR COMPANY</Title>
        <div className="our-company__img">
          <img src={company} alt="Our company" />
        </div>
        <div className="our-company__content">
          <Title addClass="our-company__title">OUR COMPANY</Title>
          <p className="our-company__content__p1">
            私達はクライアントのビジネスを的確に理解し、
            最適な設計・開発プランを提供いたします。
          </p>
          <p className="our-company__content__p2">
            BluseTechは、クライアントの企画構想を理解したうえで
            システム開発やソリューション提供を含めた
            実行フェーズの支援を得意領域とする集団です。
          </p>
          <div className="our-company__content__btn">
            <div
              className="btn--navigate btn--navigate--company"
              onClick={() => navigate(`/profile`)}
            >
              <div className="btn--navigate__txt">Company Profile</div>
              <div className="btn--navigate__img">
                <img src={icnR} alt="arrow right" />
              </div>
            </div>
            <div
              className="btn--navigate btn--navigate--company"
              onClick={() => navigate(`/philosophy`)}
            >
              <div className="btn--navigate__txt">Philosophy</div>
              <div className="btn--navigate__img">
                <img src={icnR} alt="arrow right" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="our-company__news">
        <div className="our-company__news__content">
          <div className="section-title our-company__news__title">
            <div className="section-title__dot">
              <div className="section-title__flash" />
            </div>
            <span className="section-title__txt">NEWS</span>
          </div>
          <div className="rows">
            {data.map((item) => (
              <div key={item.id} className="rows__item">
                <div className="rows__item__left">
                  <div className="rows__item__date">
                    <p>{item.date}</p>
                  </div>
                  <div className="rows__item__status">
                    <p>{item.status}</p>
                  </div>
                  <div className="rows__item__content">
                    <p>{item.name}</p>
                  </div>
                </div>
                <div className="rows__item__right">
                  <button
                    className="rows__item__btn"
                    onClick={() => navigate(item.url)}
                  >
                    <img src={icnR} alt="Right icon" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="our-company__contact">
        <div className="our-company__contact__content">
          <div className="section-title session--title--contact">
            <div className="section-title__dot session--title--contact__dot">
              <div className="section-title__flash session--title--contact__flash" />
            </div>
            <span className="section-title__txt session--title--contact__txt">
              CONTACT
            </span>
          </div>
          <p className="our-company__contact__p">
            私達は、クライアント様のビジネスを加速させます。
            <br />
            ご相談からお見積りまでお気軽にお問い合わせください。
          </p>
        </div>
        <div className="btn--navigate" onClick={() => navigate(`/contact`)}>
          <div className="btn--navigate__txt">Contact us</div>
          <div className="btn--navigate__img">
            <img src={icnR} alt="arrow right" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCompany;
