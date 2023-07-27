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
        BluseTechのテクノロジーで、ビジネスをより高みへ。
      </p>
      <p className="our-service__p2">
        私達は、「実行フェーズ」において確かなる価値を提供することでさらなる高みを目指すご支援に貢献していきます。
      </p>
      <p className="our-service__p2">
        ソリューションサービスからスクラッチでの開発まで確かなスキル・支援体制をもとに、
      </p>
      <p className="our-service__p2">
        世の中のビジネスの「不可能」を「可能」に変えていきたいと考えております。
      </p>
      <div className="our-service__items">
        <div className="our-service__item">
          <div className="our-service__item__content">
            <div className="our-service__item__img">
              <img src={item1} alt=" HIGH SKILL " />
            </div>
            <div style={{ textAlign: "center" }}>
              <h1 className="our-service__item__title">HIGH SKILL</h1>
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
              <h1 className="our-service__item__title">FROM TOP TO BOTTOM</h1>
              <p className="our-service__item__subtitle">
                一気通貫の支援サービス​
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
