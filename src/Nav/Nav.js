import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import './Nav.css';

const NavigationLink = (props) => {
  const { route, text, ...rest} = props;

  return (
    <li className="Nav__item">
      { /* NavLink supports activeStyle, Link doesn't */}
      <NavLink
        to={route}
        className="Nav__link"
        // activeStyle={{color: "#614478"}}
        {...rest}
      >{text}</NavLink>
    </li>
  );
}

const Nav = () => {
  return (
    <nav className="Nav">
      <ul className="Nav__list">
        <NavigationLink route="/" text="Home" exact/>
        <NavigationLink route="/users" text="Users" />
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  route: PropTypes.string,
  text: PropTypes.string
}

export default Nav;