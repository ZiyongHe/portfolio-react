import React, { useContext } from 'react'
import CurrentPageContext from '../utils/CurrentPageContext'

function Nav(props) {
  const { handlePageChange } = useContext(CurrentPageContext)
  return (
    <nav
      id="navbar"
      className="navbar navbar-expand-lg navbar-light bg-light overflow-x"
    >
      <a
        className="navbar-brand"
        href="#index"
        onClick={() => handlePageChange('About')}
      >
        Ziyong He
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="nav collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              href="#index"
              onClick={() => handlePageChange('About')}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#portfolio"
              onClick={() => handlePageChange('Portfolio')}
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#contact"
              onClick={() => handlePageChange('Contact')}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
