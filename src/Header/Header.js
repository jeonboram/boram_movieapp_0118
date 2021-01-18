import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import imgfile from '../logo.jpg';

function Header () {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/"><img src={imgfile} alt="logo"></img></Link>
      </div>
      <div className="searchBox"></div>
      <ul className="menu">
        <li className="menu1"><Link to="/upcoming">Upcoming</Link></li>
      </ul>
    </div>
  )
}



export default Header;