import React from 'react'
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'

function Footer() {
  return (
    <div className="footer">
      <div
        className="container d-flex"
        style={{ justifyContent: 'space-around' }}
      >
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
  )
}

export default Footer
