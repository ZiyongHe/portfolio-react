import React, { useState } from 'react'
import { HashRouter, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Header from './components/Header'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Skills from './components/Skills'

import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('About')

  function handlePageChange(page) {
    setCurrentPage(page)
  }

  return (
    <HashRouter>
      <div data-spy="scroll" data-target="#navbar" data-offset="750">
        <Navigation
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
        <div className="mt-5">
          <div className="container">
            <Header currentPage={currentPage} />
          </div>
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
            path="/skills"
            component={Skills}
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
    </HashRouter>
  )
}

export default App
