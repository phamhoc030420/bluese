import banner from "../../assets/img/グループ 368.png";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Title from "../../components/title/Title";
import "./profile.scss";

const Profile = () => {
  return (
    <>
      <Header />
      <main className="company">
        <Title>COMPANY PROFILE</Title>
        <div className="company__content">
          <div className="company__profile">
            <div className="row">
              <div className="row__heading">社名</div>
              <div className="row__profile">
                <p>株式会社BluseTech</p>
              </div>
            </div>
            <div className="row">
              <div className="row__heading">資本金</div>
              <div className="row__profile">
                <p>3,000万円</p>
              </div>
            </div>
            <div className="row">
              <div className="row__heading">設立</div>
              <div className="row__profile">
                <p>2023年6月</p>
              </div>
            </div>
            <div className="row">
              <div className="row__heading">決算期</div>
              <div className="row__profile">
                <p>5月</p>
              </div>
            </div>
            <div className="row">
              <div className="row__heading">事業内容</div>
              <div className="row__profile">
                <p>
                  実行支援フェーズのご支援
                  <br />
                  ー各種Solutionサービス開発
                  <br />
                  －システム開発
                  <br />
                  －保守運用等
                </p>
              </div>
            </div>
            <div className="row">
              <div className="row__heading">所在地</div>
              <div className="row__profile">
                <p>東京都港区赤坂九丁目7番1号ミッドタウン・タワー35階</p>
              </div>
            </div>
            <div className="row">
              <div className="row__heading">TEL</div>
              <div className="row__profile">
                <p>03-6804-1820</p>
              </div>
            </div>
            <div className="row">
              <div className="row__heading">HP</div>
              <div className="row__profile">
                <a href="https://blusetech.co.jp">https://blusetech.co.jp</a>
              </div>
            </div>
          </div>
          <div className="company__banner">
            <img src={banner} alt="Banner Profile Company" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Profile;
