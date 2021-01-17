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
      link: 'https://project-team-2.herokuapp.com/',
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/eat-local.png`,
      alt: 'eat-local',
      id: 'EatLocal',
      projectName: 'Eat Local',
      description: 'Browse local restaurants',
      href: 'https://github.com/ZiyongHe/EatLocal',
      link: 'https://ziyonghe.github.io/EatLocal/index.html',
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/day-planner.png`,
      alt: 'day-planner',
      id: 'day-planner',
      projectName: 'Day Planner',
      description: 'A day schedule planner',
      href: 'https://github.com/ZiyongHe/day-planner',
      link: 'https://ziyonghe.github.io/day-planner/',
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/employee-directory.png`,
      alt: 'employee-directory',
      id: 'employee-directory',
      projectName: 'Employee Directory',
      description:
        'Lookup employee information quickly with sorting and searching',
      href: 'https://github.com/ZiyongHe/employee-directory',
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/javascript-code-quiz.png`,
      alt: 'javascript-code-quiz',
      id: 'javascript-code-quiz',
      projectName: 'JavaScrip Code Quiz',
      description: 'A timed quiz app on JavaScrip code',
      href: 'https://github.com/ZiyongHe/javascript-code-quiz',
      link: 'https://ziyonghe.github.io/javascript-code-quiz/',
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/password-generator.png`,
      alt: 'password-generator',
      id: 'password-generator',
      projectName: 'Password Generator',
      description: 'A random password generator',
      href: 'https://github.com/ZiyongHe/random-password-generator',
      link: 'https://ziyonghe.github.io/random-password-generator/',
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
