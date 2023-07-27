import item1 from "../../assets/img/マスクグループ 57.png";
import item2 from "../../assets/img/マスクグループ 58.png";
import item3 from "../../assets/img/マスクグループ 59.png";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Title from "../../components/title/Title";
import "./service.scss";

const Service = () => {
  return (
    <>
      <Header />
      <main className="service">
        <Title>SERVICE</Title>

        <div className="service__banner" />
        <div className="service__content">
          <div className="service__item">
            <div className="service__item__img">
              <img src={item1} alt="System Development" />
            </div>
            <div className="service__item__content">
              <p className="service__item__title">
                SYSTEM <br />
                DEVELOPMENT
              </p>
              <p className="service__item__subtitle">システム開発</p>
              <p className="service__item__p">
                私達は、高い開発能力を持つエンジニア集団であり、品質の高いシステムを設計・構築することができます。最新の専門知識に裏付けられた高度な技術力を駆使し、クライアントのビジネスニーズに沿ったカスタムシステムを開発します。様々なビジネス業界に関連するテーマや領域をしっかり押さえ、ハイパフォーマンスなシステムを開発をします。
              </p>
            </div>
          </div>
          <div className="service__item">
            <div className="service__item__content">
              <p className="service__item__title">
                SOLUTION <br />
                DEVELOPMENT
              </p>
              <p className="service__item__subtitle">
                ソリューションサービス開発
              </p>
              <p className="service__item__p">
                私達が持つ様々なソリューションサービスの知見をクライアント企業に提供し、システムを実現します。クライアントビジネスの成果向上に結びつく環境作りを支援します。クライアントのビジネスプロセスを理解し、SAPやSalesforce、ServiceNowなどといった様々なソリューション導入経験から最適なソリューションを組み合わせて提案いたします。
              </p>
            </div>
            <div className="service__item__img">
              <img src={item2} alt="System Development" />
            </div>
          </div>
          <div className="service__item">
            <div className="service__item__img">
              <img
                src={item3}
                alt="System Development"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className="service__item__content">
              <p className="service__item__title">
                OPERATION &amp; <br />
                MAINTENANCE
              </p>
              <p className="service__item__subtitle">運用保守</p>
              <p className="service__item__p">
                システムの保守運用においても優れた能力を持っています。システムの安定性と信頼性の確保のため、最適なシステム運用計画を設計し、それを実行します。また、コスト面においても運用保守体制を分析し、情報を可視化してコストの適正化を行うことも可能です。​
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Service;
