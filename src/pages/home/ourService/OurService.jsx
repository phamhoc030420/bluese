import { useNavigate } from "react-router-dom";
import icnR from "../../../assets/img/icn_arw_pc.svg";
import item1 from "../../../assets/img/マスクグループ 64.png";
import item2 from "../../../assets/img/マスクグループ 65.png";
import item3 from "../../../assets/img/マスクグループ 66.png";

const OurService = () => {
  const navigate = useNavigate();
  return (
    <div className="our-service">
      <div className="our-service__bg" />
      <p className="our-service__subtitle">OUR SERVICE</p>
      <h1 className="our-service__title">
        BOOST <br /> YOUR BUSINESS
      </h1>
      <p className="our-service__p1">
        高価値のソフトウェア・サービスを提供しビジネスと世界に貢献する。
      </p>
      <p className="our-service__p2">
        弊社は、高価値のソフトウェア・サービスを提供することにより、世界に貢献することを目指しております。
      </p>
      <p className="our-service__p2">
        この使命を果たすために、組織の知性と才能を発揮し、全力を尽くして参ります。
      </p>
      <p className="our-service__p2">
        国際的に認められた真の価値を創造することで、世の中の恩恵に恩返しし、世界に貢献したいと思っております。
      </p>
      <div className="our-service__items">
        <div className="our-service__item">
          <div className="our-service__item__content">
            <div className="our-service__item__img">
              <img src={item1} alt="HIGHLY SKILLED" />
            </div>
            <div style={{ textAlign: "center" }}>
              <h1 className="our-service__item__title">HIGHLY SKILLED</h1>
              <p className="our-service__item__subtitle">確かなスキル</p>
              <p className="our-service__item__txt">
                私達は、各種DXやテクノロジー、企画・業務に加え、幅広い開発業務の経験を有する業界トップレベルのエンジニア集団です。
              </p>
            </div>
          </div>
        </div>
        <div className="our-service__item">
          <div className="our-service__item__content">
            <div className="our-service__item__img">
              <img src={item2} alt=" SPEEDY " />
            </div>
            <div style={{ textAlign: "center" }}>
              <h1 className="our-service__item__title">TOP TO BOTTOM</h1>
              <p className="our-service__item__subtitle">
                一気通貫の支援サービス
              </p>
              <p className="our-service__item__txt">
                グループ会社のコンサルタントと連携し、IT/Digital戦略・超上流から開発・保守運用に至るまで一気通貫のご支援が可能です。
              </p>
            </div>
          </div>
        </div>
        <div className="our-service__item">
          <div className="our-service__item__content">
            <div className="our-service__item__img">
              <img src={item3} alt=" GOOD DEAL " />
            </div>
            <div style={{ textAlign: "center" }}>
              <h1 className="our-service__item__title">GOOD DEAL</h1>
              <p className="our-service__item__subtitle">
                高いコストパフォーマンス
              </p>
              <p className="our-service__item__txt">
                ベトナムを含むアジア地域のネットワークを活用し、よりリーズナブルなコストでご提案することが可能です。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="btn--navigate" onClick={() => navigate(`/service`)}>
        <div className="btn--navigate__txt">Our Service</div>
        <div className="btn--navigate__img">
          <img src={icnR} alt="arrow right" />
        </div>
      </div>
    </div>
  );
};

export default OurService;
