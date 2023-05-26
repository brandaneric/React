import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
            <img src="./public/img/logo.png" alt="logo" />
         <p className ="menuNav">ITEM 2</p>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <p className ="menuNav">ITEM 1</p>
              </li>
              <li className="nav-item">
                <p className ="menuNav">ITEM 3</p>
              </li>
              <li className="nav-item dropdown">
                <p className ="menuNav">ITEM 4</p>
                <ul className="dropdown-menu">
                  <li><p>ITEM 1</p></li>
                  <li><p>ITEM 1</p></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><p>ITEM 1</p></li>
                </ul>
              </li>
              <li className="nav-item">
                <p className ="menuNav">ITEM 1</p>
              </li>
            </ul>
          
          </div>
        </div>
        <CartWidget/>
      </nav>
      
    )      
}

export default NavBar;