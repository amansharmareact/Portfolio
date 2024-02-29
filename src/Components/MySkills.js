import React from 'react'

const MySkills = () => {
  return (
    <section className='lg:h-screen h-150vh md:mt-80'>
         <p className="text-center mb-2 wow fadeInUp mt-5">
          <span
            className=" text-white text-2xl px-2"
            style={{ backgroundColor: "#0C356A" }}
          >
            My Skills
          </span>
        </p>
        <div className="h-screen flex flex-wrap mt-5 mx-2 md:pl-32 md:pr-32 lg:pl-48 lg:pr-48">

     
    <div className="w-full md:w-1/2 px-2  md:mb-0 wow fadeInUp" style={{ visibility: 'visible' }}>
      <p className="font-semibold text-start mb-2">Web Design <span className="float-right">80%</span></p>
      <div className="progress progress-sm ">
        <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '80%', background:"#0C356A" }}></div>
      </div>
    </div>
    <div className="w-full md:w-1/2 px-2  md:mb-0 wow fadeInUp" style={{ visibility: 'visible' }}>
      <p className="font-semibold text-start mb-2">HTML/CSS <span className="float-right">90%</span></p>
      <div className="progress progress-sm ">
        <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: '90%', background:"#0C356A" }}></div>
      </div>
    </div>
    <div className="w-full md:w-1/2 px-2  md:mb-0 wow fadeInUp" style={{ visibility: 'visible' }}>
      <p className="font-semibold text-start mb-2">JavaScript <span className="float-right">80%</span></p>
      <div className="progress progress-sm ">
        <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '80%', background:"#0C356A" }}></div>
      </div>
    </div>
    <div className="w-full md:w-1/2 px-2  md:mb-0 wow fadeInUp" style={{ visibility: 'visible' }}>
      <p className="font-semibold text-start mb-2">React JS <span className="float-right">80%</span></p>
      <div className="progress progress-sm ">
        <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '80%', background:"#0C356A" }}></div>
      </div>
    </div>
    <div className="w-full md:w-1/2 px-2  md:mb-0 wow fadeInUp" style={{ visibility: 'visible' }}>
      <p className="font-semibold text-start mb-2">Next JS <span className="float-right">70%</span></p>
      <div className="progress progress-sm ">
        <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: '70%',background:"#0C356A" }}></div>
      </div>
    </div>
    <div className="w-full md:w-1/2 px-2  md:mb-0 wow fadeInUp" style={{ visibility: 'visible' }}>
      <p className="font-semibold text-start mb-2">Bootstrap <span className="float-right">95%</span></p>
      <div className="progress progress-sm ">
        <div className="progress-bar bg-green-500" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{ width: '95%', background:"#0C356A" }}></div>
      </div>
    </div>
  </div>

    </section>
  

  )
}

export default MySkills