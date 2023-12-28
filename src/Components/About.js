import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about" className="lg:h-screen h-150vh" style={{ background: "#FFF0CE" , fontFamily: "'Poppins', sans-serif"}}>
      <p className="text-center mb-2 wow fadeInUp mt-5">
        <span
          className=" text-white text-2xl px-2"
          style={{ backgroundColor: "#0C356A" }}
        >
          About Me
        </span>
      </p>
      <h2
        className="text-4xl font-semibold text-center mb-5 wow fadeInUp mt-4"
        style={{ visibility: "visible" }}
      >
        Know Me More
      </h2>
      <div className="row px-5 flex justify-center items-center">
        <div className="col-lg-8 text-center  text-lg-start wow fadeInUp">
          <h2 className="text-3xl font-normal mb-3">
            Hi, I'm{" "}
            <span
              className="font-bold md:text-5xl text-3xl"
              style={{ borderBottom: "4px solid #0C356A" }}
            >
              Aman Sharma
            </span>
          </h2>
          <p className="text-[1.3125rem] leading-8 mt-5">
            I'm a designer &amp; developer with a passion for web design. I
            enjoy developing simple, clean and slick websites that provide real
            value to the end user. Thousands of clients have procured
            exceptional results while working with me. Delivering work within
            time and budget which meets client’s requirements is our moto.
          </p>
        </div>
        <div
          className="col-lg-4 mt-4 mt-lg-0 wow fadeInUp"
          data-wow-delay="0.2s"
          style={{ visibility: "visible", animationDelay: "0.2s" }}
        >
          <div className="featured-box style-4 flex items-center justify-center flex-col">
            <div className="conta">
              <div className="dabba"></div>
              <div className="no">01</div>
            </div>
            <h3
              className="text-3xl wow rubberBand text-center"
              data-wow-delay="2s"
              style={{ visibility: "visible", animationDelay: "2s" }}
            >
              Years of <span className="font-bold">Experience</span>
            </h3>
          </div>
        </div>
      </div>
      <div className="row mt-4 gy-3 lg:p-5 p-3">
        <div class="col lg:col-6 col-md-3  wow fadeInUp">
          <p class="text-muted font-semibold mb-0">Name:</p>
          <p class="text-4 text-dark font-bold mb-0">Aman Sharma</p>
        </div>

        <div class="col lg:col-6 col-md-3  wow fadeInUp">
          <p class="text-muted font-semibold mb-0">Email:</p>
          <p class="text-4 text-dark font-bold mb-0">
            amansharmareact@gmail.com
          </p>
        </div>

        <div class="col lg:col-6 col-md-3  wow fadeInUp">
          <p class="text-muted font-semibold mb-0">From:</p>
          <p class="text-4 text-dark font-bold mb-0">Noida, Uttar Pradesh</p>
        </div>

        <div class="col lg:col-6 col-md-3  wow fadeInUp">
          <p class="text-muted font-semibold mb-0">Phone:</p>
          <p class="text-4 text-dark font-bold mb-0">+91-8077124346</p>
        </div>
      </div>
    </div>
  );
};

export default About;
