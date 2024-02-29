import React from "react";
import "./HireMe.css";
import keyboard from "../Images/image2.jpg";

const HireMe = () => {
  return (
    <section
      style={{
        margin: "8rem 0rem",
      }}
    >
      <div class="hero-wrap ">
        <div class="hero-mask opacity-8 bg-dark"></div>
        <div
          class="react-parallax overflow-hidden relative"
          style={{ height: "60vh" }}
        > 
          <img
            class="react-parallax-bgimage"
            src={keyboard}
            alt="Intro"
            loading="eager"
            style={{
              position: "absolute",
              left: "50%",
              transform: "translate3d(-50%, -46.6667px, 0px)",
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
              height: "auto",
              filter: "none",
              zIndex: "1",
            }}
          />
          <div class="react-parallax-content relative">
            <div class="hero-content section">
              <div
                class="container text-center py-5 wow fadeInUp"
                data-wow-visible="true"
              >
                <h2 class="text-5xl font-extrabold text-white mb-5">
                  Interested in working with me?
                </h2>
                <a href="#contact">
                <button
                  href="/"
                  class="hire-button"
                  data-wow-delay="1s"
                  style={{ visibility: "visible", animationDelay: "1s" }}
                >
                  Hire Me!
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireMe;
