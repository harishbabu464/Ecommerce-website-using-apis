import React from 'react'
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand" to="/">LA Collection</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">Products</NavLink>
              </li>
            </ul>
            <div className="button">
              <NavLink className="btn btn-outline-dark" to="/login">
                <i className="fa fa-sign-in me-1"></i>Login</NavLink>
              <NavLink className="btn btn-outline-dark ms-2" to="/register">
                <i className="fa fa-user-plus me-1"></i>Register</NavLink>
              <NavLink className="btn btn-outline-dark ms-2" to="/cart">
                <i className="fa fa-shopping-cart me-1"></i>Cart (0)</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
