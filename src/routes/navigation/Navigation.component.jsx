import React, { Fragment, useContext, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/navigation-logo/crown.svg";
import { UserCtx } from "../../components/context/UserContext";
import { signUserOut } from "../../utils/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import "./Navigation.style.scss";

const Navigation = () => {
  const [cartModalVisiable, setCartModalVisiable] = useState(false);
  const { currentUser } = useContext(UserCtx);

  const showCartModal = () => {
    setCartModalVisiable((prevState) => !prevState);
  };

  // console.log(currentUser);

  return (
    <Fragment>
      <nav className="navigation">
        <NavLink className="logo-container" to="/">
          <CrownLogo />
          <span className="logo-text">King's 'n Queen's</span>
        </NavLink>
        <ul className="nav-links-container">
          <li className="nav-link">
            <NavLink to="shop" className="nav-link">
              SHOP
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="" className="nav-link">
              CONTACT
            </NavLink>
          </li>
          <li className="nav-link">
            {currentUser ? (
              <span className="nav-link" onClick={signUserOut}>
                SIGN OUT
              </span>
            ) : (
              <NavLink className="nav-link" to="sign-in">
                SIGN IN
              </NavLink>
            )}
          </li>
          <CartIcon onClick={showCartModal} />
        </ul>
        {cartModalVisiable && <CartDropdown />}
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
