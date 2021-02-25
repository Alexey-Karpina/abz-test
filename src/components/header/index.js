import React from "react";
import logo from "../../images/logo.svg";
import iconMenu from "../../images/icon-menu.svg";
import "./header.scss";
const Header = () => {
  return (
    <header className="page__header">
      <div className="wrapper">
        <img src={logo} className="page__logo" />
        <img src={iconMenu} className="page__logo" />
      </div>
    </header>
  );
};

export default Header;
