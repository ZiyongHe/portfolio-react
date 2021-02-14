import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function Navigation({ handlePageChange }) {
  return (
    <Navbar expand="lg" bg="light">
      <Navbar.Brand className="h5 mb-0">Ziyong He</Navbar.Brand>
      <Navbar.Toggle id="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="align-items-end">
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link h5 mb-0 link"
              onClick={() => handlePageChange('About')}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portfolio"
              className="nav-link h5 mb-0 link"
              onClick={() => handlePageChange('Portfolio')}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/skills"
              className="nav-link h5 mb-0 link"
              onClick={() => handlePageChange('Skills')}
            >
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className="nav-link h5 mb-0 link"
              onClick={() => handlePageChange('Contact')}
            >
              Contact
            </Link>
          </li>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
