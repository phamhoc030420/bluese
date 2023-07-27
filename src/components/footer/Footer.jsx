import logo from "../../assets/img/blusetech_白抜き_横@3x.png";

import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__img">
            <img width=" 100% " src={logo} alt="logo" />
          </div>
          <nav className="footer__nav">
            <a className="nav_item_footer" href="/profile">
              会社概要
            </a>
            <a className="nav_item_footer" href="/philosophy">
              理念
            </a>
            <a className="nav_item_footer" href="/service">
              サービス概要
            </a>
            <a className="nav_item_footer" href="/news">
              ニュース
            </a>
            <a className="nav_item_footer" href="/contact">
              問い合わせ
            </a>
          </nav>
        </div>
        <div className="footer__copyright">
          <div className="footer__copyright__txt">
            CopyRight© 2023 BluseTech Co., Ltd All Rights Reserved.
          </div>
          <div className="footer__copyright__txt">プライバシーポリシー</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
