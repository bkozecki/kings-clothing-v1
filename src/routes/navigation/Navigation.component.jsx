import React, { Fragment } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/navigation-logo/crown.svg";

import "./Navigation.style.scss";

const Navigation = () => {
  return (
    <Fragment>
      <nav className="navigation">
        <NavLink className="logo-container" to="/">
          <CrownLogo />
          <span className="logo-text">King's</span>
        </NavLink>
        <ul className="nav-links-container">
          <li className="nav-link">
            <NavLink className="nav-link">SHOP</NavLink>
          </li>
          <li className="nav-link">
            <NavLink className="nav-link" to="sign-in">
              SIGN IN
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink className="nav-link"></NavLink>
          </li>
          <li className="nav-link">
            <NavLink className="nav-link"></NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
