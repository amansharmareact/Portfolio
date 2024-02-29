import React, { useState } from "react";
import sevenair from "../Images/sevenair.png";
import upsurge from '../Images/upsurge.png'
import dopethreads from '../Images/dopethreads.png'
import "./RecentProjects.css";

const RecentProjects = () => {
  const [activeLink, setActiveLink] = useState("All");
  return (
    <section id="projects" class="lg:h-screen section bg-light">
      <div class="container">
        <p className="text-center mb-2 wow fadeInUp mt-5">
          <span
            className=" text-white text-2xl px-2"
            style={{ backgroundColor: "#0C356A" }}
          >
            Recent Projects
          </span>
        </p>
        <h2
          class="text-4xl font-semibold mt-5 text-center mb-5 wow fadeInUp"
          data-wow-visible="true"
        >
          Some of my most recent projects
        </h2>
        {/* <ul class="portfolio-menu text-gray-600 space-x-10 flex flex-wrap justify-center mb-5 wow fadeInUp " data-wow-visible="true">
      <li className={`text-xl hover:text-black hover:text-2xl ${activeLink === 'All' ? 'border-b-2 border-custom-blue' : ''}`}>
         
          <button className={`nav-link ${activeLink === 'All' ? 'active' : ''}`} onClick={() => setActiveLink('All')}>All</button>
        </li>
        <li className={`text-xl hover:text-black hover:text-2xl ${activeLink === 'Details' ? 'border-b-2 border-custom-blue' : ''}`}>
         
          <button className={`nav-link ${activeLink === 'Details' ? 'active' : ''}`} onClick={() => setActiveLink('Details')}>Details</button>
        </li>
        <li className={`text-xl hover:text-black hover:text-2xl ${activeLink === 'Mockups' ? 'border-b-2 border-custom-blue' : ''}`}>
         
         <button className={`nav-link ${activeLink === 'Mockups' ? 'active' : ''}`} onClick={() => setActiveLink('Mockups')}>Mockups</button>
       </li>
       <li className={`text-xl hover:text-black hover:text-2xl ${activeLink === 'Youtube' ? 'border-b-2 border-custom-blue' : ''}`}>
         
         <button className={`nav-link ${activeLink === 'Youtube' ? 'active' : ''}`} onClick={() => setActiveLink('Youtube')}>Youtube Videos</button>
       </li>
       <li className={`text-xl hover:text-black hover:text-2xl ${activeLink === 'videos' ? 'border-b-2 border-custom-blue' : ''}`}>
         
         <button className={`nav-link ${activeLink === 'videos' ? 'active' : ''}`} onClick={() => setActiveLink('videos')}>Vimeo Videos</button>
       </li>
      
      </ul> */}
        <div class="portfolio wow fadeInUp" data-wow-visible="true">
          <div className="flex flex-wrap relative row -mx-4 ">
            <div class="portfolio-box col-sm-12 col-lg-4 ">
              <div class="portfolio-img">
                  <img
                    className="rounded project-image"
                    src={sevenair}
                    alt="Seven Air Aviation"
                  />
                <div> 
                <h5 class="text-5 text-center my-4 project-heading">Seven Air Aviation</h5>
                </div>
                  <div className="flex justify-content-center mt-3">
                <a href="https://sevenairaviation.com" className="project-link" target="_blank" rel="noreferrer">
                  <button class="button2">See Project</button>
                </a>
                  </div>
              </div>
            </div>
            <div class="portfolio-box col-sm-12 col-lg-4 ">
              <div class="portfolio-img">
                  <img
                    className="rounded project-image"
                    src={upsurge}
                    alt="Upsurge Media"
                  />
                <div> 
                <h5 class="text-5 text-center my-4 project-heading">Upsurge Media Pvt Ltd</h5>
                </div>
                  <div className="flex justify-content-center mt-3">
                <a href="https://upsurgemedia.in/" className="project-link" target="_blank" rel="noreferrer">
                <button class="button2">See Project</button>
                </a>
                  </div>
              </div>
            </div>
            <div class="portfolio-box col-sm-12 col-lg-4  ">
              <div class="portfolio-img">
                  <img
                    className="rounded project-image"
                    src={dopethreads}
                    alt="Upsurge Media"
                  />
                <div> 
                <h5 class="text-5 text-center my-4 project-heading">DopeThreads</h5>
                </div>
                  <div className="flex justify-content-center mt-3">
                <a href="https://dopethreads.in/" className="project-link" target="_blank" rel="noreferrer">
                <button class="button2">See Project</button>
                </a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
