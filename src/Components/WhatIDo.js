import React from "react";
import "./WhatIDo.css";
import { SiTaichigraphics } from "react-icons/si";
import { FaDesktop } from "react-icons/fa";
import { FaPencilRuler } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { IoShareSocial } from "react-icons/io5";

const WhatIDo = () => {
  return (
    <section
      id="services"
      class="section bg-light"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div class="container">
        <p className="text-center mb-2 wow fadeInUp mt-5">
          <span
            className=" text-white text-2xl px-2"
            style={{ backgroundColor: "#0C356A" }}
          >
            What I do?
          </span>
        </p>
        <h2 class="text-4xl mt-5 font-extrabold text-center mb-5 wow fadeInUp">
          How I can help your next project
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          <div class="wow fadeInUp">
            <div class="featured-box text-center px-4 py-6">
              <div class="text-primary text-2xl mb-3 flex justify-center">
              <SiTaichigraphics />
              </div>
              <h3 class="text-2xl font-extrabold mb-3">Graphic Design</h3>
              <p class="text-muted mb-0">
                Communication to convey messages, ideas, or information.
                Utilizing typography, imagery, color, and layout, graphic
                designers craft visually appealing solutions for various
                mediums, enhancing brand identity and user experience while
                maintaining a balance between aesthetics and functionality.
              </p>
            </div>
          </div>
          <div class="wow fadeInUp">
            <div class="featured-box text-center px-4 py-6">
              <div class="text-primary text-4xl mb-3 flex justify-center">
              <FaDesktop />
              </div>
              <h3 class="text-2xl font-extrabold mb-3">Web Design</h3>
              <p class="text-muted mb-0">
                Web design is the process of creating and arranging visual
                elements on websites to enhance user experience and convey
                information effectively. It involves the use of layout, color,
                typography, and graphics to create aesthetically pleasing and
                user-friendly interfaces. Web designers aim to achieve a balance
                between functionality and visual appeal.
              </p>
            </div>
          </div>
          <div class="wow fadeInUp">
            <div class="featured-box text-center px-4 py-6">
              <div class="text-primary text-4xl mb-3 flex justify-center">
              <FaPencilRuler />
              </div>
              <h3 class="text-2xl font-extrabold mb-3">UI/UX Design</h3>
              <p class="text-muted mb-0">
                UI (User Interface) design focuses on creating visually
                appealing and intuitive interfaces for digital products. It
                involves the arrangement of elements such as buttons, icons, and
                navigation to enhance user interaction. Together, UI/UX design seeks to harmonize
                aesthetics and functionality, creating user-centered designs
                that meet both user needs and business goals.
              </p>
            </div>
          </div>
          <div class="wow fadeInUp">
            <div class="featured-box text-center px-4 py-6 ">
              <div class="text-primary text-4xl mb-3 flex justify-center">
              <IoLogoGooglePlaystore />
              </div>
              <h3 class="text-2xl font-extrabold mb-3">App Design & Develop</h3>
              <p class="text-muted mb-0">
              App design and development involve creating a mobile or web application from concept to execution. Design encompasses user interface (UI) and user experience (UX) considerations, focusing on visual aesthetics and optimal user interaction. 
              </p>
            </div>
          </div>
          <div class="wow fadeInUp">
            <div class="featured-box text-center px-4 py-6">
              <div class="text-primary text-4xl mb-3 flex justify-center">
              <IoShareSocial />
              </div>
              <h3 class="text-2xl font-extrabold mb-3">SEO Marketing</h3>
              <p class="text-muted mb-0">
              SEO (Search Engine Optimization) marketing is a digital marketing strategy aimed at optimizing a website's visibility on search engines like Google. It involves various techniques, including keyword research, on-page optimization, content creation, link building, and technical SEO, to improve a website's ranking in search engine results pages. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
