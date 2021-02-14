import React from 'react'
import { FaGithubSquare } from 'react-icons/fa'
import { Col } from 'react-bootstrap'

function Project({
  src,
  alt,
  id,
  projectName,
  description,
  href,
  link,
  builtWith,
}) {
  return (
    <>
      <Col className="mb-5">
        <a href={link}>
          <img
            src={src}
            className="rounded shadow m-3 project"
            style={{ width: '300px', height: '300px' }}
            alt={alt}
            id={id}
          />
        </a>
        <div className="m-3">
          <h3 style={{ height: '35px' }}>{projectName}</h3>
          <h6 style={{ height: '35px' }} className="d-flex align-items-end">
            {description}
          </h6>
          <h6 style={{ height: '35px' }} className="font-weight-light">
            {builtWith}
          </h6>
          <a href={href}>
            <FaGithubSquare size={25} /> View Github Repo
          </a>
        </div>
      </Col>
    </>
  )
}

export default Project
