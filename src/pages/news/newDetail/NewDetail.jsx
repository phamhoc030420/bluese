import icnB from "../../../assets/img/icn_arw_back.svg";
import exam from "../../../assets/img/p-1.png";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import { Link, useParams } from "react-router-dom";

const NewDetail = () => {
  const name = useParams();
  console.log(name);
  return (
    <>
      <Header />
      <div className="new-detail">
        <div className="new-detail__container">
          <div className="section-title new-detail__section-title--config">
            <div className="section-title__dot new-detail__section-title--config__dot">
              <div className="section-title__flash new-detail__section-title--config__flash" />
            </div>
            <span className="section-title__txt new-detail__section-title--config__txt">
              NEWS
            </span>
          </div>
          <div className="new-detail__content">
            <div className="new-detail__header">
              <div className="new-detail__title">
                Dirbato、社会課題解決型スタートアップ企業の出社会課題解決型スタートアップ企業の「Alpaca.Lab」に追加出資
              </div>
              <div style={{ display: "flex" }}>
                <div className="new-detail__date">2023.06.21</div>
                <div className="new-detail__status rows__item__status">
                  info
                </div>
              </div>
            </div>
            <div className="new-detail__container">
              <p className="new-detail__txt">
                株式会社Dirbato（所在地：東京都港区、代表取締役社長：金山
                泰英、以下Dirbato）は、運転代行配車プラットフォーム「AIRCLE」を手掛ける株式会社Alpaca.Lab
                （本社：沖縄県、代表取締役：棚原生磨、以下Alpaca.Lab)に対して、既存投資家として追加での出資を実行しましたことをお知らせいたします。
              </p>
              <p className="new-detail__txt">
                引き続き、Alpaca.Labが持つ「AIRCLE」を始めとする、課題先進県である沖縄県におけるソリューション開発の知見と、Dirbatoが保有するデジタルテクノロジーを用いた多数のコンサルティング実績を掛け合わせ、全国各地での交通課題に変革を起こすことを推進してまいります。
              </p>
              <div className="new-detail__img">
                <img src={exam} alt="" />
              </div>
              <div className="new-detail__txt">
                運転代行配車プラットフォーム「AIRCLE」を始めとする、社会課題解決型スタートアップ企業です。課題先進県である沖縄県に本社を置いており、沖縄県の地域課題を解決し、全国へと展開していきます。「産学連携」をキーワードにテクノロジーで課題解決の輪を広げていきます。
              </div>
              <div className="new-detail__subtitle">◼︎Alpaca.Labとは</div>
              <div className="new-detail__txt">
                運転代行配車プラットフォーム「AIRCLE」を始めとする、社会課題解決型スタートアップ企業です。課題先進県である沖縄県に本社を置いており、沖縄県の地域課題を解決し、全国へと展開していきます。「産学連携」をキーワードにテクノロジーで課題解決の輪を広げていきます。
              </div>
              <div className="new-detail__subtitle">Alpaca.Lab　会社概要</div>
              <div className="new-detail__txt">
                社名　： 株式会社Alpaca.Lab <br />
                所在地： 沖縄県中頭郡中城村南上原1111-1 アルパカラボ
                <br />
                代表者： 棚原 生磨 事業内容： Webサービス開発事業・産学連携事業
                {"{"}" "{"}"}
                <br />
                URL 　： <a href="/">https://alpacalab.jp/</a>
              </div>
              <div className="new-detail__subtitle2">Alpaca.Lab　会社概要</div>
              <div className="new-detail__txt">
                社名　： 株式会社 Dirbato <br />
                Tel     ：03-6804-1820 <br />
                E-mail：<a href="/">contact@dirbato.co.jp</a>
              </div>
              <Link to={"/news"} className="link--back">
                <img src={icnB} alt="" /> back
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default NewDetail;
