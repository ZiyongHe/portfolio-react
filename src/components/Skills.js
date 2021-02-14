import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
function Skills(props) {
  return (
    <div className="container mb-5">
      <Row className="d-flex justify-content-around my-5">
        <p className="display-4">MERN Stack</p>
      </Row>
      <Row className="d-flex justify-content-around">
        <Col lg={3} md={6} className="mb-5">
          <Row className="d-flex justify-content-center">
            <img
              src={`${process.env.PUBLIC_URL}/assets/mongodb.svg`}
              alt="MongoDB"
              width="160"
              height="160"
            />
          </Row>
          <Row className="d-flex justify-content-center my-4">
            <span>MongoDB</span>
          </Row>
        </Col>
        <Col lg={3} md={6} className="mb-5">
          <Row className="d-flex justify-content-center">
            <img
              src={`${process.env.PUBLIC_URL}/assets/expressjs.svg`}
              alt="ExpressJS"
              width="160"
              height="160"
            />
          </Row>
          <Row className="d-flex justify-content-center my-4">
            <span>Express.js</span>
          </Row>
        </Col>
        <Col lg={3} md={6} className="mb-5">
          <Row className="d-flex justify-content-center">
            <img
              src={`${process.env.PUBLIC_URL}/assets/reactjs.svg`}
              alt="ReactJS"
              width="160"
              height="160"
            />
          </Row>
          <Row className="d-flex justify-content-center my-4">
            <span>React.js</span>
          </Row>
        </Col>
        <Col lg={3} md={6} className="mb-5">
          <Row className="d-flex justify-content-center">
            <img
              src={`${process.env.PUBLIC_URL}/assets/nodejs.svg`}
              alt="NodeJS"
              width="160"
              height="160"
            />
          </Row>
          <Row className="d-flex justify-content-center my-4">
            <span>Node.js</span>
          </Row>
        </Col>
      </Row>

      <Row className="d-flex justify-content-around my-4">
        <p className="display-4 mb-3">Languages</p>
      </Row>
      <Row className="d-flex justify-content-around">
        <Col lg={3} md={6} className="mb-5">
          <Row className="d-flex justify-content-center">
            <img
              src={`${process.env.PUBLIC_URL}/assets/javascript.svg`}
              alt="javascript"
              width="160"
              height="160"
            />
          </Row>
          <Row className="d-flex justify-content-center my-4">
            <span>JavaScript</span>
          </Row>
        </Col>
        <Col lg={3} md={6} className="mb-5">
          <Row className="d-flex justify-content-center">
            <img
              src={`${process.env.PUBLIC_URL}/assets/python.svg`}
              alt="Python"
              width="160"
              height="160"
            />
          </Row>
          <Row className="d-flex justify-content-center my-4">
            <span>Python</span>
          </Row>
        </Col>
        <Col lg={3} md={6} className="mb-5">
          <Row className="d-flex justify-content-center">
            <img
              src={`${process.env.PUBLIC_URL}/assets/C++.svg`}
              alt="C++"
              width="160"
              height="160"
            />
          </Row>
          <Row className="d-flex justify-content-center my-4">
            <span>C++</span>
          </Row>
        </Col>
        <Col lg={3} md={6} className="mb-5">
          <Row className="d-flex justify-content-center">
            <img
              src={`${process.env.PUBLIC_URL}/assets/html5.svg`}
              alt="HTML5"
              width="160"
              height="160"
            />
          </Row>
          <Row className="d-flex justify-content-center my-4">
            <span>HTML5</span>
          </Row>
        </Col>
        <Col lg={3} md={6} className="mb-5">
          <Row className="d-flex justify-content-center">
            <img
              src={`${process.env.PUBLIC_URL}/assets/css.svg`}
              alt="CSS3"
              width="160"
              height="160"
            />
          </Row>
          <Row className="d-flex justify-content-center my-4">
            <span>CSS3</span>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default Skills
