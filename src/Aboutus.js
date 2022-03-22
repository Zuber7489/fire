import React, { useState } from "react";
import howToUseApp from "./API/howToUse.js";

const Aboutus = () => {
  const [aboutData, setAboutData] = useState(howToUseApp);
  return (
    <>
      <section className="common-section our-services">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-5 text-center our-service-leftside-img">
              <img src="data:image/jpeg;base64,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" alt="aboutusIMg" />
            </div>

            {/* 1section right side data  */}
            <div className="col-12 col-lg-7 our-services-list">
              <h3 className="mini-title">
                -- AVAILABLE @ GOOGLE AND IOS APP STORE ONLY
              </h3>
              <h1 className="main-heading">How to use the App?</h1>

              {aboutData.map((curElem) => {
                const { id, title, info } = curElem;
                return (
                  <>
                    <div className="row our-services-info" key={id}>
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <br />
              <button className="btn-style btn-style-border">learn more</button>
            </div>
          </div>
        </div>
      </section>

      {/* 2nd part of bayt us section  */}

      <section className="common-section our-services our-services-rightside">
        <div className="container mb-5">
          <div className="row">
            {/* 1section right side data  */}
            <div className="col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-items-start flex-column">
              <h3 className="mini-title">-- SUPPORT IN ANY LANGUAGES</h3>
              <h1 className="main-heading">
                World class support is <br /> available 24/7
              </h1>

              {aboutData.map((curElem) => {
                const { id, title, info } = curElem;
                return (
                  <>
                    <div className="row our-services-info" key={id}>
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <br />
              <button className="btn-style btn-style-border">learn more</button>
            </div>

            {/* images section  */}
            <div className="col-12 col-lg-5  our-service-rightside-img">
              <img src="https://craftware.com/wp-content/uploads/2019/12/shutterstock_455108011-min.jpg" alt="aboutusIMg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutus;
