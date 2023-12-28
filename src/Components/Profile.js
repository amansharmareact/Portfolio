import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import aman from "../Images/Aman.png";
import "./Profile.css";

const Profile = () => {
    const words = [
        'DEVELOPER',
        'DESIGNER',
        'CODER',
      ];
    
      const [part, setPart] = useState('');
      const [i, setI] = useState(0);
      const [offset, setOffset] = useState(0);
      const [forwards, setForwards] = useState(true);
      const [skipCount, setSkipCount] = useState(0);
      const [skipDelay] = useState(15);
      const [speed] = useState(60);

      useEffect(() => {
        const wordFlick = setInterval(() => {
          if (forwards) {
            if (offset >= words[i].length) {
              setSkipCount((prevSkipCount) => prevSkipCount + 1);
              if (skipCount === skipDelay) {
                setForwards(false);
                setSkipCount(0);
              }
            }
          } else {
            if (offset === 0) {
              setForwards(true);
              setI((prevI) => (prevI + 1 >= words.length ? 0 : prevI + 1));
              setOffset(0);
            }
          }
    
          const newPart = words[i].substr(0, offset);
          if (skipCount === 0) {
            if (forwards) {
              setOffset((prevOffset) => prevOffset + 1);
            } else {
              setOffset((prevOffset) => prevOffset - 1);
            }
          }
          setPart(newPart);
        }, speed);
    
        return () => clearInterval(wordFlick);
      }, [forwards, i, offset, skipCount, skipDelay, speed, words]);
    
    

  return (
    <div className="lg:h-screen h-130vh " id="home" style={{ backgroundColor: "#E6B9DE" ,fontFamily: "'Poppins', sans-serif"}}>
      <div className="container my-auto py-4">
        <div className="row profile d-flex justify-content-center align-items-center justify-content-md-between mt-5">
          <div
            className="col-lg-7 text-center text-lg-start"
            style={{ visibility: "visible" }}
          >
            <h1 className="lg:mt-0 mt-5 mb-0 text-uppercase">Hi, I'm a Freelancer</h1>
            <h2 className="word mb-0 text-uppercase">{part}</h2>
            <p className="md:my-5 sm:my-2 lg:my-5  text-5 ">based in Noida, Uttar Pradesh India</p>
            <a href="#projects"> <button className="glow-on-hover me-4" type="button">
              View My Works
            </button></a>
            <a href="#contact"> <button className="glow-on-hover"  type="button">
              Contact Me
            </button></a>
           
          </div>
          <div className="col-lg-5 text-center d-flex justify-content-center">
            <div className="profile-image lg:mt-0 mt-8">
              <img src={aman} alt="Aman Sharma" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
