import React from 'react'
import "./header.scss"
import { NavLink, useLocation} from 'react-router-dom'
import {useAuth} from "../../utils/auth"


export default function Header() {

  const auth = useAuth();
  
  return (
    <>
    {console.log(auth.user)}
        
        <header class="header" id="header">
  <nav class="nav container">
    <a href="#" class="nav__logo"> FPS Shooter </a>
    <div class="nav__menu" id="nav-menu">
      <ul class="nav__list">
        <li class="nav__item">
            <NavLink className={"nav__link"} to={"/"}>Home</NavLink>
          {/* <a href="#home" class="nav__link active-link">Graveyard</a> */}
        </li>
        <li class="nav__item">
          <NavLink to="/download" className={"nav__link"}>Download</NavLink>
        </li>
        <li class="nav__item">
          <NavLink to="/contact" className={"nav__link"}>Contact</NavLink>
        </li>
        <li class="nav__item">
          {!auth.user && (
            <NavLink to="/login" className={"nav__link"}>Sign In</NavLink>
          )}
          {auth.user && (
            <NavLink className={"nav__link"} to={`/profile/${auth.user}`}>{auth.user}</NavLink>
          )}
        </li>
        <NavLink to="/support" className={"button button--ghost"}>Support</NavLink>
      </ul>
      <div class="nav__close" id="nav-close">
        <i class='bx bx-x'></i>
      </div>
      
    </div>
    <div class="nav__toggle" id="nav-toggle">
      <i class='bx bx-grid-alt'></i>
    </div>
  </nav>
</header>
    </>
  )
}
