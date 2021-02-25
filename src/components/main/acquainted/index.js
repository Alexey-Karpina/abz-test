import React from "react";
import { ReactSVG } from "react-svg";

import laptop from "../../../images/man-laptop.svg";

import "./acquainted.scss";

const Acquainted = () => {
  return (
    <section className="main__acquainted">
      <div className="wrapper">
        <p className="acquainted__title">Let's get acquainted</p>
        <ReactSVG src={laptop} className="acquainted__image" />
        <p className="acquainted__subtitle">I am cool frontend developer</p>
        <div className="acquainted__about">
          <p className="acquainted__main">
            We will evaluate how clean your approach to writing CSS and
            Javascript code is. You can use any CSS and Javascript 3rd party
            libraries without any restriction.
          </p>
          <p className="acquainted__additional">
            If 3rd party css/javascript libraries are added to the project via
            bower/npm/yarn you will get bonus points. If you use any task runner
            (gulp/webpack) you will get bonus points as well. Slice service
            directory page P​SD mockup​ into HTML5/CSS3.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Acquainted;
