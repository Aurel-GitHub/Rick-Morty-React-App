import React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div>
      <div className="header">
        <nav>
          <ul>
            <NavLink
              to="/"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <li>Accueil</li>
            </NavLink>
            <NavLink to="/coup-de-coeur">
              <li>Ma liste</li>
            </NavLink>
          </ul>
        </nav>
        <h1>Rick and Morty App</h1>
      </div>
    </div>
  );
};

export default Header;
