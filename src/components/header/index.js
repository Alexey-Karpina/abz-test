import React from "react";
import logo from "../../images/logo.svg";
import iconMenu from "../../images/icon-menu.svg";
import { ReactSVG } from "react-svg";
import "./header.scss";
const Header = () => {
  return (
    <div className="wrapper">
      <header className="page__header">
        <img src={logo} className="page__logo" />
        <img src={iconMenu} className="page__logo" />
      </header>
    </div>
  );
};

export default Header;
