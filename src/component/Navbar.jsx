import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./Login";


const Navbar = () => {
  const state = useSelector((state)=> state.handleCart)
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <NavLink class="navbar-brand fw-bold fs-4" to="/">COLLECTION</NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink class="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/products">Products</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/about">About</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/contact">Contact</NavLink>
        </li>
        </ul>
        <div className="button">
            <NavLink to="/login"className="btn btn-outline-dark">
                <i className="fa fa-sign-in"></i> Login
            </NavLink>
            <NavLink to="/cart"className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart"></i> Cart (
            {state.length})</NavLink>
        </div>
 
    </div>
    <Login/>
  </div>
</nav>

        </div>
    );
}

export default Navbar;