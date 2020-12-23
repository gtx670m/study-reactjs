/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import routes from "../../routes";
import { isEmpty } from "lodash";

const renderDropdown = (parent = "empty") => {
  const dropdownItems = routes.filter(route => route.parent === parent);
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        {dropdownItems.map(route => {
          const { path = "", name = "" } = route;
          return (
            <a className="dropdown-item" href={path}>{name}</a>
          )
        })}
      </ul>
    </div>
  )
}

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/window-width">Window width<span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Study
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              {/* <a className="dropdown-item" href="/react-hook">ReactHook</a>
              <a className="dropdown-item" href="#">Another action</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Something else here</a> */}
              {renderDropdown("Study")}
            </div>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  )
}