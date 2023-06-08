import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
const NavBar = () => {
  const {user}=useAuth()
  
  return (
    <div>
<nav className="navbar navbar-expand-lg bg-body-tertiary navbar bg-dark text-danger"  data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="#">Jungle Intuition</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-light" aria-current="page" to={"/"}>Home</Link>
        </li>
        {!user && <><li className="nav-item">
          <Link className="nav-link text-light" to={"sign-up"}>Sign Up</Link>
        </li><li className="nav-item">
          <Link className="nav-link text-light" to={"sign-in"}>Sign In</Link>
        </li></> }
       
        {user && <><li className="nav-item">
          <Link className="nav-link text-light" to={"log-out"}>Log Out</Link>
        </li><li className="nav-item">
          <a className="nav-link text-light" href="#">Products</a>
        </li></> }
        
        
      </ul>
      
    </div>
  </div>
</nav>












    </div>
  )
}

export default NavBar