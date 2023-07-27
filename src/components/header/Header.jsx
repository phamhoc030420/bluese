import logo from "../../assets/img/blusetech_カラー_横@3x.png";
import logoCollapse from "../../assets/img/blusetech_白抜き_横@3x.png";
import bgCollapse from "../../assets/img/マスクグループ 56.png";
import icnR from "../../assets/img/icn_arw_pc.png";
import icnB from "../../assets/img/icn_menu_bars.svg";
import icnC from "../../assets/img/icn_close.svg";
import { useState } from "react";
import "./header.scss";

const Header = () => {
  const [open, setOpen] = useState(false);

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) setOpen(false);
  });

  return (
    <header className="header">
      <div className="header__content container">
        <a href="/">
          <img src={logo} alt="Bluse Tech" className="header__logo" />
        </a>
        <div className="header__nav">
          <div>
            <a className="nav-link" href="/profile">
              会社概要
            </a>
            <a className="nav-link" href="/philosophy">
              理念
            </a>
            <a className="nav-link" href="/service">
              サービス概要
            </a>
            <a className="nav-link" href="/news">
              ニュース
            </a>
            <a className="nav-link" href="/contact">
              問い合わせ
            </a>
          </div>
        </div>

        <div
          className="header__toggler"
          id="btn--toggler"
          onClick={() => {
            console.log(open);
            setOpen(true);
          }}
        >
          <img src={icnB} alt="Bars icon" />
        </div>
      </div>

      {open ? (
        <div className="header__collapse">
          <img src={bgCollapse} alt="Background collapse" />
          <div className="header__collapse__logo container">
            <a href="/">
              <img
                src={logoCollapse}
                alt="Bluse Tech"
                className="header__logo"
              />
            </a>
            <div
              className="header__close"
              id="btn--close"
              onClick={() => setOpen(false)}
            >
              <img src={icnC} alt="Close icon" />
            </div>
          </div>
          <div className="header__collapse__nav">
            <div className="header__collapse__nav__item">
              <a className="nav-link" href="/profile">
                会社概要
                <img src={icnR} alt="Right icon" />
              </a>
            </div>
            <div className="header__collapse__nav__item">
              <a className="nav-link" href="/philosophy">
                理念
                <img src={icnR} alt="Right icon" />
              </a>
            </div>
            <div className="header__collapse__nav__item">
              <a className="nav-link" href="/service">
                サービス概要
                <img src={icnR} alt="Right icon" />
              </a>
            </div>
            <div className="header__collapse__nav__item">
              <a className="nav-link" href="/news">
                ニュース
                <img src={icnR} alt="Right icon" />
              </a>
            </div>
            <div className="header__collapse__nav__item">
              <a className="nav-link" href="/contact">
                問い合わせ
                <img src={icnR} alt="Right icon" />
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
