import React from "react";
import "./NavBar.css";
import logo from "../assets/images/logo.png";


/*
const NavBar = ({ nav_1, nav_2, nav_3, nav_4, nav_5 }) => {

   return (
      <nav className="nav">
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
      </nav>
   )
}
*/


const NavBar = () =>{
   const links = [{id: 1, url: '#', text: 'Home'}, {id: 2, url: '#', text: 'Courses'}, {id: 3, url: '#', text: 'About'}]
   const logLinks = [{id: 1, url: '#', text: 'Register'}, {id: 2, url: '#', text: 'Login'}]

      return (
   
         <nav className="nav">
            <img src={logo} alt="Logo" className="nav__logo"/>
            <ul className="nav__items">
               {links.map((link) => {
                  const { id, url, text } = link
                  return (
                     <li key={id} className="nav__link">
                        <a href={url}>{text}</a>
                     </li>
                  ) 
               })}    
            </ul>
            <ul className="nav__log">
               {logLinks.map((log) => {
                  const { id, url, text } = log
                  const logGrid = `${id === 1 ? 'nav__log-link-1' : 'nav__log-link-2'}`
                  return (
                     <li key={id} className={`${logGrid} nav__log-link`}>
                        <a href={url}>{text}</a>
                     </li>
                  ) 
               })}
            </ul>
         </nav>
      )
   }

export default NavBar 