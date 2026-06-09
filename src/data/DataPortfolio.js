import logo_react from "../img/logo-react.png";
import logo_cbtis from "../img/logo-cbtis128.svg";
import logo_django from "../img/logo-django.webp";
import logo_fastapi from "../img/logo-fastapi.webp";
import logo_gemini from "../img/logo-gemini.png";
import logo_postgresql from "../img/logo-postgresql.webp";
import logo_typescript from "../img/logo-typescript.png";
import logo_html from "../img/logo-html.png";
import logo_css from "../img/logo-css.png";
import logo_js from "../img/logo-javascript.png";
import logo_python from "../img/logo-python.png";

export const DataPortfolio = [
  {
    title: "Spendix",
    date: "February 2026 - Present",
    status: "In Development",
    logo: logo_gemini,
    logos: [logo_gemini, logo_python, logo_django, logo_react],
    description:
      "Architected a full-stack personal finance platform using React and Django. Engineered an automated AI pipeline using Python and the Gemini API to extract and parse unstructured data from PDF bank statements, converting it into structured JSON for dynamic frontend visualization.",
    links: {
      web: "",
      github: "https://github.com/marcos-css/Spendix",
    },
  },
  {
    title: "GeoCampus",
    date: "February 2026 - May 2026",
    status: "Completed (Proof of Concept)",
    logo: logo_react,
    logos: [logo_react, logo_typescript, logo_fastapi, logo_postgresql],
    description:
      "Collaborated in a 5-person agile team to develop an interactive geospatial map for UACJ's Ciudad Universitaria campus. Built a responsive React/TypeScript interface consuming a FastAPI/PostgreSQL RESTful API to filter and render real-time navigation data for nearly 300 distinct locations across all academic and administrative buildings.",
    links: {
      web: "",
      github: "https://github.com/LuisFlores223046/Proyecto-Innovacion",
    },
  },
  {
    title: "CBTIS 128",
    date: "December 2021 - March 2022",
    status: "Production",
    logo: logo_cbtis,
    logos: [logo_cbtis, logo_html, logo_css, logo_js],
    description:
      "Led a 5-developer team to build and deploy a responsive institutional platform from scratch. Modernized the school's digital infrastructure using HTML, CSS, and JS, delivering a robust communication system that serves a user base of over 3,500 students.",
    links: {
      web: "http://www.cbtis128.edu.mx/",
      github: "https://github.com/marcos-css/CBTIS128-Workspace",
    },
  },
];
