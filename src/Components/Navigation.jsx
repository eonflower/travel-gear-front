import React from "react";
import { NavLink} from "react-router-dom";
import Logo from "../assets/1.png"

function Navigation() {
  return (
    <div className="navigation">
      <img src={Logo} alt="" className="logo"></img>
      <div className="nav-links">
      <NavLink to= "/" className="home-link">
        Home
      </NavLink>
      <NavLink to= "/techGear" className="tech-gear-link">
        Tech
      </NavLink>
      <NavLink to= "/photography" className="photo-gear-link">
        Photography
      </NavLink>
      <NavLink to= "/wishlist" className="wishlist-link">
        Wishlist
      </NavLink>
      </div>
    </div>
  )
}
export default Navigation;