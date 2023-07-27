import logo from "../../assets/img/blusetech_白抜き_横@3x.png";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Title from "../../components/title/Title";
import "./philosophy.scss";

const Philosophy = () => {
  return (
    <>
      <Header />
      <main className="philosophy">
        <Title>PHILOSOPHY</Title>
        <div className="philosophy__banner">
          <div className="philosophy__banner__content">
            <img src={logo} alt="Logo" />
            <h1 className="philosophy__banner__title">BlueRose X Technology</h1>
            <div className="philosophy__banner__p">
              ブルーローズ（青いバラ）は実現不可能と言われていた中で改良に改良を重ね実現したものであり、
              <br />
              そこから「夢かなう」「奇跡」「可能性」という意味が持たれるようになりました。
              <br />
              私達は、Nothing is impossible の精神で、
              テクノロジーを用いて世の中の「不可能を可能にする」
              <br />
              ことを実現する会社として、 ”BlueRose” x
              “Technology”から「BluseTech」と名付けました。
            </div>
          </div>
        </div>
        <div className="philosophy__content">
          <Title addClass="philosophy--rules">Three Rules</Title>
          <div className="philosophy__items">
            <div className="philosophy__item">
              <div className="philosophy__item__header">
                <div className="philosophy__item__title">SPEED</div>
              </div>
            </div>
            <div className="philosophy__item">
              <div className="philosophy__item__header">
                <div className="philosophy__item__title">COMMITMENT</div>
              </div>
            </div>
            <div className="philosophy__item">
              <div className="philosophy__item__header">
                <div className="philosophy__item__title">INTEGRITY</div>
                {/* <div class="philosophy__item__subtitle">
                          行動指針
                      </div> */}
              </div>
              {/* <div class="philosophy__item__content">
                      不屈の精神を宿せ <br> 人の挑戦を後押しせよ<br> 迅速で忠実であれ
                  </div> */}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Philosophy;
