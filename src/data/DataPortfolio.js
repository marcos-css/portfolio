import logo_react from '../img/logo-react.png';
import logo_cbtis from '../img/logo-cbtis128.svg';
import logo_django from '../img/logo-django.png';
import logo_fastapi from '../img/logo-fastapi.webp';
import logo_gemini from '../img/logo-gemini.webp';
import logo_postgresql from '../img/logo-postgresql.webp';
import logo_typescript from '../img/logo-typescript.png';
import logo_html from '../img/logo-html.png';
import logo_css from '../img/logo-css.png';
import logo_js from '../img/logo-javascript.png';

export const DataPortfolio = [
    {
        title: 'Spendix',
        logo: logo_gemini, 
        logos: [logo_django, logo_react, logo_gemini],
        description: "Full-stack personal finance application built with React and Django. Implemented automated data extraction and structuring from user documents using the Gemini API, featuring dynamic data visualization.",
        links: {
            web: '',
            github: 'https://github.com/marcos-css/Spendix',
        }
    },
    {
        title: 'CBTIS 128',
        logo: logo_cbtis,
        logos: [logo_cbtis, logo_html, logo_css, logo_js],
        description: "Responsive institutional website development. Technical leadership of a 5-developer team, optimizing digital communication for over 2,000 students using HTML, CSS, and JS.",
        links: {
            web: 'http://www.cbtis128.edu.mx/',
            github: 'https://github.com/marcos-css/CBTIS128-Workspace',
        }
    },
    {
        title: 'UACJ Interactive Map',
        logo: logo_react,
        logos: [logo_react, logo_typescript, logo_fastapi, logo_postgresql],
        description: "Frontend development for a university campus interactive map. Developed the frontend with React and TypeScript as part of a 5-developer team, consuming a FastAPI/PostgreSQL RESTful API for real-time location filtering and rendering.",
        links: {
            web: '',
            github: 'https://github.com/LuisFlores223046/Proyecto-Innovacion',
        }
    },
]