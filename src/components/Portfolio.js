import React from 'react'
import Project from './Project'
import Header from './Header'
import { Row } from 'react-bootstrap'

function Portfolio() {
  const projects = [
    {
      src: `${process.env.PUBLIC_URL}/assets/bitgora.png`,
      alt: 'BitGora',
      id: 'BitGora',
      projectName: 'BitGora',
      description: 'A marketplace for bitcoin users',
      builtWith:
        'MERN | WebSocket | Cloudinary | Passport | React-Bootstrap | Heroku',
      href: 'https://github.com/ZiyongHe/bitGora',
      link: 'https://bitgora.herokuapp.com/',
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/oop-general-hospital.png`,
      alt: 'oop-general-hospital',
      id: 'oop-general-hospital',
      projectName: 'OOP General Hospital',
      description: 'Simulation of patient data flow in hospital',
      builtWith:
        'MySQL | Sequelize ORM | Express.js | Handlebars | Node.js | Anime.js | Heroku',
      href: 'https://github.com/ginajonas/oop-general-hospital',
      link: 'https://project-team-2.herokuapp.com/',
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/eat-local.png`,
      alt: 'eat-local',
      id: 'EatLocal',
      projectName: 'Eat Local',
      description: 'Browse local restaurants',
      builtWith: 'HTML | Pulma | JavaScript | Yelp API',
      href: 'https://github.com/ZiyongHe/EatLocal',
      link: 'https://ziyonghe.github.io/EatLocal/index.html',
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/to-read-list.png`,
      alt: 'to-read-list',
      id: 'to-read-list',
      projectName: 'To-read List',
      description: 'Search for books and save',
      builtWith: 'MERN | Google Books API | React-Bootstrap',
      href: 'https://github.com/ZiyongHe/to-read-list',
      link: 'https://to-read-list.herokuapp.com/',
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/employee-directory.png`,
      alt: 'employee-directory',
      id: 'employee-directory',
      projectName: 'Employee Directory',
      description:
        'Lookup employee information quickly with sorting and searching',
      builtWith: 'MERN | Randomuser API | Bootstrap',
      href: 'https://github.com/ZiyongHe/employee-directory',
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/weather-dashboard.png`,
      alt: 'weather-dashboard',
      id: 'weather-dashboard',
      projectName: 'Weather Dashboard',
      description: 'A weather forecast lookup application ',
      builtWith:
        'JavaScrip | HTML | Bootstrap | OpenWeather API | Local Storage',
      href: 'https://github.com/ZiyongHe/weather-dashboard',
      link: 'https://ziyonghe.github.io/weather-dashboard/',
    },
  ]
  return (
    <div className="container">
      <Header className="row"></Header>
      <Row>
        {projects.map((project) => (
          <Project {...project} />
        ))}
      </Row>
    </div>
  )
}

export default Portfolio
