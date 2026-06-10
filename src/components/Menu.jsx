import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { SocialLinks } from "../data/DataPortfolio";
import { AiFillFilePdf } from "react-icons/ai";

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

          <div className="mt-8 flex justify-center">
            <a
              href={SocialLinks.cv}
              target="_blank"
              rel="noreferrer"
              onClick={() => setShowMenu(false)}
              className="flex items-center gap-2 px-6 py-3 border border-[#08fdd8] text-[#08fdd8] rounded-full hover:bg-[#08fdd8]/10 transition-colors"
              data-umami-event="Download CV - Menu"
            >
              <AiFillFilePdf size="1.2rem" />
              <span className="font-semibold tracking-wider text-sm">
                DOWNLOAD CV
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
