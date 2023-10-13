import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({title}) => {
  return (
    <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarScroll">
        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
          <li className="nav-item">
            <Link className="nav-link active" to ="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to ="/about">About</Link>
          </li>
         </ul>
       
      </div>
    </div>
  </nav>
  )
}

export default Header