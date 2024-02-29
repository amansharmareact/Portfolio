import React from "react";

const Resume = () => {
  return (
    <section id="resume" className="section lg:h-screen h-150vh">
      <div
        className="container"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <p className="text-center mb-2 wow fadeInUp mt-5">
          <span
            className=" text-white text-2xl px-2"
            style={{ backgroundColor: "#0C356A" }}
          >
            Resume
          </span>
        </p>
        <h2
          className="text-5xl mt-5 font-extrabold text-center mb-5 wow fadeInUp"
          style={{ visibility: "visible" }}
        >
          A summary of My Resume
        </h2>
        <div className="flex  justify-between row pt-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          {/* Left Column - Education */}
          <div className=" wow fadeInUp" style={{ visibility: "visible" }}>
            <h2 className="text-7 font-extrabold mb-4 pb-2">My Education</h2>
            <div className="border-l border-indigo-800  p-3">
              <div>
                <h3 className="text-3xl font-bold">
                  Bachelor of Computer Applications
                </h3>
                <hr />
                <p className="mb-2 text-xl font-semibold">
                  GLA University / 2019 - 2022
                </p>

                <p className="text-bold leading-8	">
                  BCA is a three-year degree program. This degree is for those
                  who want to study computer science, software engineering,
                  information technology, information security, and networking
                  technology.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Experience */}
          <div
            className=" wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ visibility: "visible", animationDelay: "0.2s" }}
          >
            <h2 className="text-7 font-extrabold mb-4 pb-2">My Experience</h2>
            <div className="border-l border-indigo-800  p-3">
              <div>
                <h3 className="text-3xl font-bold">Full Stack Developer</h3>
                <hr />

                <p className="text-xl font-semibold mb-2">
                  Codeaegis Pvt Ltd / 2023 - current
                </p>
                <p className=" text-bold leading-8	">
                  Proficient in front end technologies such as HTML, CSS, and
                  JavaScript. <br />
                  Experience with frontend frameworks React and its core
                  principles. <br />
                  Knowledge of state management libraries such as Redux. <br />
                  Knowledge of browser-based debugging and performance testing.
                  <br />
                  Experience with REST APIs and third-party libraries. <br />
                  Excellent problem-solving and troubleshooting skills. <br />
                  Excellent communication and teamwork abilities. <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
