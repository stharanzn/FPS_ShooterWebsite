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
    {/* <NavLink className={"nav__logo"} to={"/FPS_ShooterWebsite"} >FPS Shooter</NavLink> */}
    <a href="/FPS_ShooterWebsite" class="nav__logo"> FPS Shooter </a>
    <div class="nav__menu" id="nav-menu">
      <ul class="nav__list">
        {/* <li class="nav__item">
            <NavLink className={"nav__link"} to={"/FPS_ShooterWebsite"}>Home</NavLink>
          <a href="#home" class="nav__link active-link">Graveyard</a>
        </li> */}
        <li class="nav__item">
          <NavLink to="/FPS_ShooterWebsite/download" className={"nav__link"}>Download</NavLink>
        </li>
        <li class="nav__item">
          <NavLink to="/FPS_ShooterWebsite/contact" className={"nav__link"}>Contact</NavLink>
        </li>
        <li class="nav__item">
          {!auth.user && (
            <NavLink to="/FPS_ShooterWebsite/login" className={"nav__link"}>Sign In</NavLink>
          )}
          {auth.user && (
            <NavLink className={"nav__link"} to={`/FPS_ShooterWebsite/profile/${auth.user}`}>{auth.user}</NavLink>
          )}
        </li>
        <NavLink to="/FPS_ShooterWebsite/support" className={"button button--ghost"}>Support</NavLink>
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
