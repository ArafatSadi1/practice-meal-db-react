import React from 'react';
import './Header.css'
const Header = () => {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <div className="container-fluid">
        <a className="navbar-brand text-light ms-3" href="#navbar">MealBD</a>
    </div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-5 mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-light"  href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-light"  href="#home">Offer</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-light"  href="#home">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-light"  href="#home">Contact</a>
        </li>
      </ul>
    </div>
</nav>    

    );
};

export default Header;