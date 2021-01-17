import React from 'react'
// default context object with properties corresponding to Provider values

const CurrentPageContext = React.createContext({
  currentPage: '',
  setCurrentPage: () => undefined,
})

export default CurrentPageContext
