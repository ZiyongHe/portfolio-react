import React from 'react'

function Header({ currentPage }) {
  return (
    <>
      <h1 className="my-5 display-1">{currentPage}</h1>
    </>
  )
}

export default Header
