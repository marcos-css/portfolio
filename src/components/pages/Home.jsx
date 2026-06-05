import React, { useContext } from 'react'
import Loader from '../Loader';
import WorkCard from '../WorkCard'
import { HashLink as Link } from 'react-router-hash-link';
import { AppContext } from '../../context/Context';
import CustomButton from '../CustomButton';
import Menu from '../Menu';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';


const Home = () => {

  const { generateLetters, AnimateLetters } = useContext(AppContext)
  AnimateLetters()
    

  return (
    <>
        <Loader />
        <Menu/>
    <div className='vh-100 p-4 d-flex flex-column justify-content-center align-items-center'>
        <div className="row">
          <div className="col-12 col-md-8">
            <h1 className='text-light fw-bold display-1 mb-4 home-title'>
              <span className="d-inline-block" style={{ whiteSpace: 'nowrap' }}>{generateLetters("I'm", false)}</span>{' '}
              <span className="d-inline-block" style={{ whiteSpace: 'nowrap' }}>{generateLetters("Marcos,", false)}</span>
              <br />
              <span className="d-inline-block" style={{ whiteSpace: 'nowrap' }}>{generateLetters("Software", false)}</span>{' '}
              <span className="d-inline-block" style={{ whiteSpace: 'nowrap' }}>{generateLetters("Engineer", false)}</span>
            </h1>
            <p className="lead text-light  mb-4" style={{fontSize: '1.2em'}}>
              I'm a Software Engineer from Ciudad Juárez, Chihuahua, Mexico. I work with technologies like React, TypeScript, Python, FastAPI, Django, C++ and Git.<br/>
              I like staying updated in the tech world, constantly learning new skills and acquiring knowledge.<br/>
              I also have experience with MySQL, Firebase and Figma.
            </p>
            <div className="row gap-3">
              <div className="col col-6 col-12">
            <Link to={'/portfolio/contact'}>
            <CustomButton  text={'Contact me'}/>
            </Link>
              </div>
              <div className="col col-6 col-12 d-lg-none">
            <Link to={'/portfolio/projects'}>
            <CustomButton   secondary text={'My Work'}/>
            </Link>
              </div>
              </div>
            <div className="d-flex align-items-center gap-4 mt-4">
              <a href='https://github.com/marcos-css' target='_blank' rel='noreferrer' aria-label="Visit Marcos Casas on GitHub" className='home-social-link'>
                <AiFillGithub size="2rem" color="#fff" />
              </a>
              <a href='https://www.linkedin.com/in/marcos-casas/' target='_blank' rel='noreferrer' aria-label="Visit Marcos Casas on LinkedIn" className='home-social-link'>
                <AiFillLinkedin size="2rem" color="#fff" />
              </a>
            </div>
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-start justify-content-md-center align-items-center mt-4 mt-md-0 d-none d-lg-flex">
            <WorkCard/>
          </div>
        </div>
    </div>
    </>
  )
}

export default Home