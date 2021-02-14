import React from 'react'

function About({ currentPage }) {
  return (
    <>
      <div className="container mb-5 ">
        <div className="row ">
          <div className="col-lg-4 ">
            <img
              src={`${process.env.PUBLIC_URL}/assets/bioimage.png`}
              style={{ width: '300px', height: '300px' }}
              alt="bioimage"
              id="bioimage"
            />
          </div>
          <div className="col-lg-8" id="text">
            <h2 className="my-5">
              Hi, my name is <span id="name">Ziyong He</span>.
            </h2>
            <h3 className="my-5">
              I am a Web Developer using MEAN stack with background in Aerospace
              Enginnering, E-commerce and transferable skills.
            </h3>
            <h3>Available for job oppotunities.</h3>
            <a
              href={`${process.env.PUBLIC_URL}/assets/Resume_ZiyongHE.pdf`}
              className="btn my-3 border border-warning rounded"
              id="resumeBtn"
            >
              resume
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
