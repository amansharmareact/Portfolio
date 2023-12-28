import React, {useState} from 'react'
import image from '../Images/img1.jpg'
import './RecentProjects.css'

const RecentProjects = () => {
    const [activeLink, setActiveLink] = useState('All');
  return (
    <section id="projects" class=" h-screen section bg-light mb-24">
    <div class="container">
    <p className="text-center mb-2 wow fadeInUp mt-5">
          <span
            className=" text-white text-2xl px-2"
            style={{ backgroundColor: "#0C356A" }}
          >
            Recent Projects
          </span>
        </p>
      <h2 class="text-4xl font-semibold mt-5 text-center mb-5 wow fadeInUp" data-wow-visible="true">
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
     
            <div class="portfolio-box col-sm-6 col-lg-4 col-3 ">
              <div class="portfolio-img">
                <img class=" rounded" src={image} alt="" style={{width:"400px", height:"100%"}}/>
                <div class="portfolio-overlay">
                  <button class="popup-ajax stretched-link border-0 p-0"></button>
                  <div class="portfolio-overlay-details">
                    <p class="text-primary text-8"><i class="fas fa-file-alt"></i></p>
                    <h5 class="text-white text-5">Detailed Project 1</h5>
                    <span class="text-light">Category</span>
                  </div>
                </div>
              </div>
            </div>
           
            <div class="portfolio-box col-sm-6 col-lg-4 col-3">
              <div class="portfolio-img">
                <img class=" rounded" src={image} alt="" style={{width:"400px", height:"100%"}}/>
                <div class="portfolio-overlay">
                  <button class="popup-ajax stretched-link border-0 p-0"></button>
                  <div class="portfolio-overlay-details">
                    <p class="text-primary text-8"><i class="fas fa-file-alt"></i></p>
                    <h5 class="text-white text-5">Detailed Project 1</h5>
                    <span class="text-light">Category</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="portfolio-box col-sm-6 col-lg-4 col-3">
              <div class="portfolio-img">
                <img class=" rounded" src={image} alt="" style={{width:"400px", height:"100%"}}/>
                <div class="portfolio-overlay">
                  <button class="popup-ajax stretched-link border-0 p-0"></button>
                  <div class="portfolio-overlay-details">
                    <p class="text-primary text-8"><i class="fas fa-file-alt"></i></p>
                    <h5 class="text-white text-5">Detailed Project 1</h5>
                    <span class="text-light">Category</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="portfolio-box col-sm-6 col-lg-4 col-3">
              <div class="portfolio-img">
                <img class=" rounded" src={image} alt="" style={{width:"400px", height:"100%"}}/>
                <div class="portfolio-overlay">
                  <button class="popup-ajax stretched-link border-0 p-0"></button>
                  <div class="portfolio-overlay-details">
                    <p class="text-primary text-8"><i class="fas fa-file-alt"></i></p>
                    <h5 class="text-white text-5">Detailed Project 1</h5>
                    <span class="text-light">Category</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="portfolio-box col-sm-6 col-lg-4 col-3">
              <div class="portfolio-img">
                <img class=" rounded" src={image} alt="" style={{width:"400px", height:"100%"}}/>
                <div class="portfolio-overlay">
                  <button class="popup-ajax stretched-link border-0 p-0"></button>
                  <div class="portfolio-overlay-details">
                    <p class="text-primary text-8"><i class="fas fa-file-alt"></i></p>
                    <h5 class="text-white text-5">Detailed Project 1</h5>
                    <span class="text-light">Category</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="portfolio-box col-sm-6 col-lg-4 col-3">
              <div class="portfolio-img">
                <img class=" rounded" src={image} alt="" style={{width:"400px", height:"100%"}}/>
                <div class="portfolio-overlay">
                  <button class="popup-ajax stretched-link border-0 p-0"></button>
                  <div class="portfolio-overlay-details">
                    <p class="text-primary text-8"><i class="fas fa-file-alt"></i></p>
                    <h5 class="text-white text-5">Detailed Project 1</h5>
                    <span class="text-light">Category</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
    </div>
  </section>
  
  )
}

export default RecentProjects