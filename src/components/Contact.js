import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Header from './Header'
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

function Contact() {
  return (
    <div className="container">
      <Header />
      <Row>
        <Col md={6} className="d-flex justify-content-center">
          <div className="card-body">
            <form action="mailto:ziyonghe94@gmail.com" method="post">
              <div className="form-group">
                <label for="exampleFormControlInput1">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <label for="exampleFormControlInput2">Email</label>
                <input
                  type="email"
                  name="_replyto"
                  className="form-control"
                  id="exampleFormControlInput2"
                  placeholder="name@example.com"
                />
              </div>
              <div className="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea
                  type="submit"
                  name="Send"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="Message"
                  rows="3"
                ></textarea>
              </div>
            </form>
            <a href="contact" className="btn btn-primary mt-3">
              Submit
            </a>
          </div>
        </Col>
        <Col md={6} className="d-flex justify-content-center">
          <div className="card" style={{ width: '20rem' }}>
            <div className="card-header">Contact Info</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <FaEnvelope className="mr-3" />
                ziyonghe94@gmail.com
              </li>
              <li className="list-group-item">
                <FaPhone className="mr-3" />
                905-962-1605
              </li>
              <li className="list-group-item">
                <FaGithub className="mr-3" />
                https://github.com/ZiyongHe
              </li>
              <li className="list-group-item">
                <FaLinkedin className="mr-3" />
                www.linkedin.com/in/ziyonghe
              </li>
              <li className="list-group-item">Feel free to contact me :)</li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Contact
