import React from 'react'
import { FaGithubSquare } from 'react-icons/fa'

function Project({ src, alt, id, projectName, description, href, link }) {
  return (
    <>
      <div className="col-lg-4 px-3">
        <a href={link}>
          <img
            src={src}
            className="rounded shadow m-3 project"
            style={{ width: '300px', height: '300px' }}
            alt={alt}
            id={id}
          />
        </a>
        <div className="m-5">
          <h3>{projectName}</h3>
          <h6>{description}</h6>
          <a href={href}>
            <FaGithubSquare size={25} /> View Github Repo
          </a>
        </div>
      </div>
    </>
  )
}

export default Project
