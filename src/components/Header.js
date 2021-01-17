import React, { useContext } from 'react'
import CurrentPageContext from '../utils/CurrentPageContext'

function Header(props) {
  const { currentPage } = useContext(CurrentPageContext)
  function renderHeader(currentPage) {
    switch (currentPage) {
      case 'About':
        return <h1 className="my-5 display-1">{currentPage}</h1>
      case 'Portfolio':
        return <h1 className="my-5 display-1">{currentPage}</h1>
      case 'Contact':
        return <h1 className="my-5 display-1">{currentPage}</h1>

      default:
        break
    }
  }
  return <>{renderHeader(currentPage)}</>
}

export default Header
