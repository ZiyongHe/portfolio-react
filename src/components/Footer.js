import React from 'react'
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'

function Footer() {
  return (
    <div className="footer mt-5">
      <div
        className="container d-flex"
        style={{
          justifyContent: 'space-around',
          height: '200px',
          alignItems: 'flex-end',
        }}
      >
        <div className="row">
          <a href="https://github.com/ZiyongHe" className="mx-3">
            <FaGithubSquare size={45} />
          </a>
          <a href="https://www.linkedin.com/in/ziyonghe" className="mx-5">
            <FaLinkedin size={45} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
