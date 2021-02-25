import React from "react";
import "./banner.scss";
const Banner = () => {
  return (
    <section className="main__banner">
      <div className="wrapper">
        <p className="banner__title">
          Test assignment for Frontend Developer position
        </p>
        <p className="banner__subtitle-mob">
          We kindly remind you that your test assignment should be submitted as
          a link to github/bitbucket repository.{" "}
        </p>
        <p className="banner__subtitle-tab">
          We kindly remind you that your test assignment should be submitted as
          a link to github/bitbucket repository. Please be patient, we consider
          and respond to every application that meets minimum requirements. We
          look forward to your submission. Good luck! The photo has to scale in
          the banner area on the different screens
        </p>
        <p className="banner__subtitle-desk">
          We kindly remind you that your test assignment should be submitted as
          a link to github/bitbucket repository. Please be patient, we consider
          and respond to every application that meets minimum requirements. We
          look forward to your submission. Good luck! The photo has to scale in
          the banner area on the different screens
        </p>
        <button className="banner__signup">Sing up now</button>
      </div>
    </section>
  );
};

export default Banner;
