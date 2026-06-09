import React from "react";
import { useContext } from "react";
import { AppContext } from "../../context/Context";
import { DataPortfolio } from "../../data/DataPortfolio";
import { BsGithub, BsGlobe } from "react-icons/bs";
import "@splidejs/react-splide/css/sea-green";
import ScrollReveal from "scrollreveal";
import ScrollbarPortfolio from "../ScrollbarPortfolio";
import { useEffect } from "react";
import Menu from "../Menu";
import ScrollIndicator from "../ScrollIndicator";
import { GlitterFinal as GlitterEffect } from "../animated-hero-with-web-gl-glitter";

const Portfolio = () => {
  const { generateLetters, AnimateLetters } = useContext(AppContext);
  AnimateLetters();

  const handleLogoMouseEnter = (e) => {
    const container = e.currentTarget;
    container.classList.add("spread-active");
    container.dataset.hoveredAt = Date.now();
  };

  const handleLogoMouseLeave = (e) => {
    const container = e.currentTarget;
    const hoveredAt = parseInt(container.dataset.hoveredAt || "0");
    const elapsed = Date.now() - hoveredAt;
    const minDuration = 800; // 0.8s minimum animation cycle duration
    if (elapsed < minDuration) {
      // If hover was too short, wait until the cycle completes before shrinking
      setTimeout(() => {
        container.classList.remove("spread-active");
      }, minDuration - elapsed);
    } else {
      container.classList.remove("spread-active");
    }
  };

  useEffect(() => {
    var arrayLogos = document.querySelectorAll(".project-logo");
    var arrayTitles = document.querySelectorAll(".project-title");
    ScrollReveal().reveal(arrayLogos, {
      origin: "left",
      reset: true,
      distance: "100%",
      duration: 1000,
    });
    ScrollReveal().reveal(arrayTitles, {
      origin: "left",
      reset: true,
      distance: "100%",
      duration: 1000,
    });
  }, []);

  return (
    <>
      <GlitterEffect speed={0.75} intensity={5.0} />
      <ScrollbarPortfolio />
      <Menu />
      {DataPortfolio.map((obj, index) => (
        <section
          id={obj.title}
          className="flex justify-center items-center p-8 md:p-4 relative"
          key={index}
        >
          <div className="container container-projects  p-3 flex flex-col gap-3">
            <div className="flex flex-wrap">
              <div className="w-full mb-3">
                <div
                  className="project-logos-container"
                  onMouseEnter={handleLogoMouseEnter}
                  onMouseLeave={handleLogoMouseLeave}
                >
                  {obj.logos ? (
                    obj.logos.map((logo, logoIndex) => {
                      // Extract name to construct clean Alt and Title attributes (e.g. "django", "react")
                      const logoName = logo
                        .split("/")
                        .pop()
                        .split(".")[0]
                        .replace("logo-", "");
                      return (
                        <img
                          key={logoIndex}
                          src={logo}
                          className="project-logo stacked-logo"
                          alt={logoName}
                          title={logoName}
                        />
                      );
                    })
                  ) : (
                    <img
                      src={obj.logo}
                      className="project-logo"
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "contain",
                      }}
                      alt={obj.title}
                      title={obj.title}
                    />
                  )}
                </div>
              </div>
              <div className="w-full mt-2 flex justify-content-start items-center">
                <h1 className="text-white font-bold text-4xl md:text-7xl project-title ">
                  {generateLetters(obj.title, false)}
                </h1>
              </div>
              <div className="flex flex-col gap-1 mt-2 text-gray-400 text-sm md:text-base font-medium uppercase tracking-widest">
                <span>{obj.date}</span>
                <span className="text-[#08fdd8]">{obj.status}</span>
              </div>
            </div>
            <p className="text-white text-xl">{obj.description}</p>
            <div className="flex flex-wrap gap-4">
              {obj.links.web && (
                <div className="">
                  <div className="flex flex-wrap items-center gap-4 social-link">
                    <BsGlobe size={"2rem"} color="#fff" />
                    <a
                      target={"_blank"}
                      rel="noreferrer"
                      aria-label={`Visit ${obj.title} website`}
                      className="text-white text-xl"
                      href={obj.links.web}
                    >
                      View website
                    </a>
                  </div>
                </div>
              )}

              {obj.links.github && (
                <div className="w-full">
                  <div className="flex flex-wrap items-center gap-4 social-link">
                    <BsGithub size={"2rem"} color="#fff" />
                    <a
                      target={"_blank"}
                      rel="noreferrer"
                      aria-label={`View ${obj.title} on GitHub`}
                      className="text-white text-xl"
                      href={obj.links.github}
                    >
                      Github
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile scroll indicator */}
          <ScrollIndicator 
            direction={
              index === 0 ? "down" : 
              index === DataPortfolio.length - 1 ? "up" : 
              "both"
            } 
          />
        </section>
      ))}
    </>
  );
};

export default Portfolio;
