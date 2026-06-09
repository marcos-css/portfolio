import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  return (
    <>
      <label htmlFor="check" className="menu-button-toggle">
        <input
          id="check"
          type="checkbox"
          checked={showMenu}
          onChange={() => setShowMenu(!showMenu)}
        />
        <span className="top"></span>
        <span className="middle"></span>
        <span className="bottom"></span>
      </label>

      <div 
        className={`menu-wrapper ${showMenu ? "show" : ""}`}
        onClick={() => setShowMenu(false)}
      >
        <div 
          className={`menu-content ${showMenu ? "show" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className={`containerLink ${location.pathname === "/portfolio" ? "containerLinkActive" : ""}`}
          >
            <Link
              to={"/portfolio"}
              onClick={() => setShowMenu(false)}
              viewTransition
            >
              Home
            </Link>
            <span className="activeDecoration"></span>
          </div>

          <div
            className={`containerLink ${location.pathname === "/portfolio/contact" ? "containerLinkActive" : ""}`}
          >
            <Link
              to={"/portfolio/contact"}
              onClick={() => setShowMenu(false)}
              viewTransition
            >
              Contact
            </Link>
            <span className="activeDecoration"></span>
          </div>

          <div
            className={`containerLink ${location.pathname === "/portfolio/projects" ? "containerLinkActive" : ""}`}
          >
            <Link
              to={"/portfolio/projects"}
              onClick={() => setShowMenu(false)}
              viewTransition
            >
              Portfolio
            </Link>
            <span className="activeDecoration"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
