import React from 'react'
import Header from './Header'
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'

function About() {
  return (
    <>
      <div className="container my-5 ">
        <Header />
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
              I am a Full Stack Web Developer using MEAN solution stack with
              background in Aerospace Enginnering and transferable skills.
              Available for job oppotunities.
            </h3>
            <a
              href={`${process.env.PUBLIC_URL}/assets/Resume_ZiyongHE.pdf`}
              className="btn my-3 border border-warning rounded"
              id="resumeBtn"
            >
              resume
            </a>
            <br />
            <div className="container p-3">
              <div className="row">
                <a href="https://github.com/ZiyongHe">
                  <FaGithubSquare size={45} />
                </a>
                <a href="https://www.linkedin.com/in/ziyonghe" className="mx-3">
                  <FaLinkedin size={45} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
