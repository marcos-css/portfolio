import React from "react";
import { useRef, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { DataPortfolio } from "../data/DataPortfolio";

const ScrollbarPortfolio = () => {
  const scrollbar = useRef(null);

  useEffect(() => {
    let scrollPercent = 0;
    const handleScroll = () => {
      if (!scrollbar.current) return;
      const height = document.documentElement.scrollHeight;
      const element = document.documentElement;
      scrollPercent = Math.round(
        (element.scrollTop / (height - element.clientHeight)) * 100,
      );
      scrollbar.current.style.height = `${scrollPercent}%`;
      var buttons = document.querySelectorAll(".project-button");
      buttons.forEach((btn, idx) => {
        const threshold = (idx / (buttons.length - 1 || 1)) * 90;
        if (scrollPercent >= threshold) {
          btn.classList.add("active");
        } else {
          btn.classList.remove("active");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scrollbar-portfolio">
      <span
        ref={scrollbar}
        className="scrollbar"
      ></span>
      {DataPortfolio.map((item, index) => (
        <button
          alt={item.title}
          key={index}
          className="project-button"
        >
          <HashLink
            to={`#${item.title}`}
            alt={item.title}
          >
            <img
              src={item.logo}
              alt=""
            />
          </HashLink>
        </button>
      ))}
    </div>
  );
};

export default ScrollbarPortfolio;
