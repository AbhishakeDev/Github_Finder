import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const Navbar = ({ icon, title }) => {
  return (
    <div className="navbar bg-primary">
      <h1> <i className={icon}></i>{title}</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  )
}

//if props not sent from parent then default will be used
Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github"
};
//checking type of props being defined in the parent
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar
