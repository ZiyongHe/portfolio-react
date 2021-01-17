import React, { useEffect, useState } from 'react'
import { HashRouter, Route } from 'react-router-dom'
import Nav from './components/Nav'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'
import CurrentPageContext from './utils/CurrentPageContext'

function App() {
  // const [employees, setEmployees] = useState([])
  // const [filter, setFilter] = useState({
  //   'Front-End Developer': true,
  //   'Back-End Developer': true,
  //   'Full-Stack Developer': true,
  //   'Automated Testing': true,
  // })
  const [currentPage, setCurrentPage] = useState('About')

  function handlePageChange(page) {
    setCurrentPage(page)
  }

  return (
    <HashRouter>
      <CurrentPageContext.Provider value={{ currentPage, handlePageChange }}>
        <div data-spy="scroll" data-target="#navbar" data-offset="750">
          <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div>
            <Route
              exact
              path="/"
              component={About}
              currentPage={currentPage}
            ></Route>
            <Route
              exact
              path="/index"
              component={About}
              currentPage={currentPage}
            ></Route>
            <Route
              exact
              path="/portfolio"
              component={Portfolio}
              currentPage={currentPage}
            ></Route>
            <Route
              exact
              path="/contact"
              component={Contact}
              currentPage={currentPage}
            ></Route>
          </div>
          <Footer />
        </div>
      </CurrentPageContext.Provider>
    </HashRouter>
  )
}

export default App
