import React, { useContext } from "react";
import WorkCard from "../WorkCard";
import { HashLink as Link } from "react-router-hash-link";
import { AppContext } from "../../context/Context";
import CustomButton from "../CustomButton";
import Menu from "../Menu";
import { AiFillGithub, AiFillLinkedin, AiFillFilePdf } from "react-icons/ai";
import { SocialLinks } from "../../data/DataPortfolio";
import { GlitterFinal as GlitterEffect } from "../animated-hero-with-web-gl-glitter";

const Home = () => {
  const { generateLetters, AnimateLetters } = useContext(AppContext);
  AnimateLetters();

  return (
    <>
      <GlitterEffect speed={0.75} intensity={5.0} />
      <Menu />
      <div className="h-dvh p-8 md:p-4 flex flex-col justify-center items-center">
        <div className="flex justify-center gap-12">
          <div className="w-full md:w-[60%] ">
            <h1 className="text-white font-bold text-4xl md:text-7xl mb-4">
              <span className="inline-block" style={{ whiteSpace: "nowrap" }}>
                {generateLetters("I'm", false)}
              </span>{" "}
              <span className="inline-block" style={{ whiteSpace: "nowrap" }}>
                {generateLetters("Marcos,", false)}
              </span>
              <br />
              <span className="inline-block" style={{ whiteSpace: "nowrap" }}>
                {generateLetters("Software", false)}
              </span>{" "}
              <span className="inline-block" style={{ whiteSpace: "nowrap" }}>
                {generateLetters("Engineer", false)}
              </span>
            </h1>
            <p className="lead text-gray-300 mb-4 text-lg">
              I'm a Software Engineer from Ciudad Juárez, Chihuahua, Mexico. I
              work with technologies like React, TypeScript, Python, FastAPI,
              Django, C++ and Git.
              <br />
              I like staying updated in the tech world, constantly learning new
              skills and acquiring knowledge.
              <br />I also have experience with MySQL, Firebase and Figma.
            </p>
            <div className="flex flex-col md:flex-row gap-3">
              <Link to={"/portfolio/contact"} viewTransition>
                <CustomButton text={"Contact me"} />
              </Link>
              <Link to={"/portfolio/projects"} viewTransition>
                <CustomButton
                  secondary
                  text={"My Work"}
                  className="md:!hidden"
                />
              </Link>
            </div>
            <div className="flex items-center gap-4 mt-4 flex-wrap">
              <a
                href={SocialLinks.cv}
                target="_blank"
                rel="noreferrer"
                aria-label="Download Marcos Casas CV"
                className="social-link flex items-center gap-2 text-white hover:text-[#08fdd8] transition-colors"
              >
                <AiFillFilePdf size="2rem" />
                <span className="text-lg">Download CV</span>
              </a>
              <a
                href={SocialLinks.github}
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Marcos Casas on GitHub"
                className="social-link"
              >
                <AiFillGithub size="2rem" color="#fff" />
              </a>
              <a
                href={SocialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Marcos Casas on LinkedIn"
                className="social-link"
              >
                <AiFillLinkedin size="2rem" color="#fff" />
              </a>
            </div>
          </div>
          <div className="w-full md:w-[auto] flex items-center justify-center hidden md:flex">
            <WorkCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
