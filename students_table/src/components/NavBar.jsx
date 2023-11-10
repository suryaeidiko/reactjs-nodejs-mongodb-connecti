import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-primary">
  <div className="container">
    <Link className="navbar-brand text-white" to="/">mySchool</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link text-white" to='/'>All Students</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  );
};

export default NavBar;
