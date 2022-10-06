import { Fragment } from "react"
import { NavLink, useLocation } from "react-router-dom"
import "../Resources/css/custom.css"
import logo from "../Resources/img/logo.png"
import RouteAll from "../Routers/Route"
export const Layout=()=>{
   let loction= useLocation();
  return <Fragment>
          <nav>
         <ul className="topnav">
            <li><NavLink to="/logo" className={loction.pathname=="/logo" ? "active" :''} ><img src={logo}  height="50" /></NavLink></li>
            <div className="right">
            <li ><NavLink className={loction.pathname=="/home" ? "active" :''} to="/home">Home</NavLink></li>
            <li><NavLink to="/About">About</NavLink></li>
            <li ><NavLink to="/project">project</NavLink></li>
            <li ><NavLink to="/Contact">Contact</NavLink></li>
         </div>
         </ul>
      </nav>
      <RouteAll />
      <footer>
         <div className="copyright">
            Copyright 2022 . All Rights Reserved.
         </div>
      </footer>
  </Fragment>
}