import React from "react";
import "./NavBar.css"
import logo from "../assets/images/logo.png"

const NavBar = ({ nav_1, nav_2, nav_3, nav_4, nav_5 }) => {

   return (
      <div className="nav">
         <img src={logo} alt="Logo" className="nav__logo"/>
         <ul className="nav__items">
            <li className="nav__link">{nav_1}</li>
            <li className="nav__link">{nav_2}</li>
            <li className="nav__link">{nav_3}</li>
         </ul>
         <ul className="nav__log">
            <li className="nav__log-link nav__log-link-1">{nav_4}</li>
            <li className="nav__log-link nav__log-link-2">{nav_5}</li>
         </ul>
      </div>
   )
}


export default NavBar 