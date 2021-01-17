import React from 'react'
import Project from './Project'
import Header from './Header'

function Portfolio() {
  const projects = [
    {
      src: `${process.env.PUBLIC_URL}/assets/oop-general-hospital.png`,
      alt: 'oop-general-hospital',
      id: 'oop-general-hospital',
      projectName: 'OOP General Hospital',
      description: 'A full stack database project deployed on Heruko',
      href: 'https://github.com/ginajonas/oop-general-hospital',
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/eat-local.png`,
      alt: 'eat-local',
      id: 'EatLocal',
      projectName: 'Eat Local',
      description: 'Browse local restaurants',
      href: 'https://github.com/ZiyongHe/EatLocal',
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/day-planner.png`,
      alt: 'day-planner',
      id: 'day-planner',
      projectName: 'Day Planner',
      description: 'A day schedule planner',
      href: 'https://github.com/ZiyongHe/day-planner',
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/day-planner.png`,
      alt: 'day-planner',
      id: 'day-planner',
      projectName: 'Day Planner',
      description: 'A day schedule planner',
      href: 'https://github.com/ZiyongHe/day-planner',
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/day-planner.png`,
      alt: 'day-planner',
      id: 'day-planner',
      projectName: 'Day Planner',
      description: 'A day schedule planner',
      href: 'https://github.com/ZiyongHe/day-planner',
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/day-planner.png`,
      alt: 'day-planner',
      id: 'day-planner',
      projectName: 'Day Planner',
      description: 'A day schedule planner',
      href: 'https://github.com/ZiyongHe/day-planner',
    },
  ]
  return (
    <div className="container">
      <Header></Header>
      {projects.map((project) => (
        <Project {...project} />
      ))}
    </div>
  )
}

export default Portfolio
