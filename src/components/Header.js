import React from "react";
import { NavLink } from "react-router-dom";
import configApp from "./../config/app";

const Header = () => (
  <div className="section">
    <nav className="level">
      <p className="level-item has-text-centered">
        <NavLink to={`${configApp.base}`} className="link is-info">
          Lista
        </NavLink>
      </p>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">webapp</p>
          <p className="title">Kontato</p>
        </div>
      </div>
      <p className="level-item has-text-centered">
        <NavLink to={`${configApp.base}create`} className="link is-info">
          Cadastrar novo
        </NavLink>
      </p>
    </nav>
  </div>
);

export default Header;
