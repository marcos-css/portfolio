import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../../context/Context'
import { DataPortfolio } from '../../data/DataPortfolio'
import Loader from '../Loader';
import { BsGithub, BsGlobe } from 'react-icons/bs'
import '@splidejs/react-splide/css/sea-green';
import ScrollReveal from 'scrollreveal'
import ScrollbarPortfolio from '../ScrollbarPortfolio';
import { useEffect } from 'react';
import Menu from '../Menu';
import ScrollIndicator from '../ScrollIndicator';

const Portfolio = () => {

  const { generateLetters, AnimateLetters } = useContext(AppContext)
  AnimateLetters()

  const handleLogoMouseEnter = (e) => {
    const container = e.currentTarget;
    container.classList.add('spread-active');
    container.dataset.hoveredAt = Date.now();
  };

  const handleLogoMouseLeave = (e) => {
    const container = e.currentTarget;
    const hoveredAt = parseInt(container.dataset.hoveredAt || '0');
    const elapsed = Date.now() - hoveredAt;
    const minDuration = 800; // 0.8s minimum animation cycle duration
    if (elapsed < minDuration) {
      // If hover was too short, wait until the cycle completes before shrinking
      setTimeout(() => {
        container.classList.remove('spread-active');
      }, minDuration - elapsed);
    } else {
      container.classList.remove('spread-active');
    }
  };
  
  useEffect(() => {
    var arrayLogos = document.querySelectorAll('.project-logo')
    var arrayTitles = document.querySelectorAll('.project-title')
    ScrollReveal().reveal(arrayLogos , {
      origin: 'left',
      reset: true,
      distance: '100%',
      duration: 1000,
    })
    ScrollReveal().reveal(arrayTitles, {
      origin: 'left',
      reset: true,
      distance: '100%',
      duration: 1000,
    })
  },[])

  return (
    <>
      <Loader />
      <ScrollbarPortfolio/>
      <Menu/>
        {
          DataPortfolio.map((obj, index) => (
            <section id={obj.title} className='d-flex justify-content-center align-items-center pe-lg-5 me-lg-5 pe-3 me-3 position-relative' key={index}>
              <div className="container container-projects  p-3 d-flex flex-column gap-3">
                <div className='row'>
                  <div className="col col-12 mb-3">
                    <div 
                      className="project-logos-container"
                      onMouseEnter={handleLogoMouseEnter}
                      onMouseLeave={handleLogoMouseLeave}
                    >
                      {obj.logos ? (
                        obj.logos.map((logo, logoIndex) => {
                          // Extract name to construct clean Alt and Title attributes (e.g. "django", "react")
                          const logoName = logo.split('/').pop().split('.')[0].replace('logo-', '');
                          return (
                            <img 
                              key={logoIndex} 
                              src={logo} 
                              className='project-logo stacked-logo' 
                              alt={logoName} 
                              title={logoName}
                            />
                          );
                        })
                      ) : (
                        <img 
                          src={obj.logo} 
                          className='project-logo' 
                          style={{ width: '100px', height: '100px', objectFit: 'contain' }} 
                          alt={obj.title} 
                          title={obj.title}
                        />
                      )}
                    </div>
                  </div>
                  <div className="col col-12 mt-2 d-flex justify-content-start align-items-center">
                    <h1 className='text-light fw-bold display-1 project-title '>
                      {
                        obj.title === "UACJ Interactive Map" ? generateLetters(obj.title, true, 4) :
                          generateLetters(obj.title, false)
                      }
                    </h1>
                  </div>
                </div>
                <p className="lead text-light" style={{ fontSize: '1.2em' }}>
                  {obj.description}
                </p>
                <div className="row">
                  {obj.links.web && <div className="col col-12 col-md-auto">
                    <div className="d-flex flex-row align-items-center">
                      <BsGlobe size={'2rem'} color="#fff" />
                      <a target={'_blank'} rel='noreferrer' aria-label={`Visit ${obj.title} website`} className='text-decoration-none fs-4 btn btn-link text-light' href={obj.links.web}>View website</a>
                    </div>
                  </div>}

               {  obj.links.github && <div className="col col-12 col-md-auto">
                    <div className="d-flex flex-row align-items-center ">
                      <BsGithub size={'2rem'} color="#fff" />
                      <a target={'_blank'} rel='noreferrer' aria-label={`View ${obj.title} on GitHub`} className='text-decoration-none fs-4 btn btn-link text-light' href={obj.links.github}>Github</a>
                    </div>
                  </div>}

                </div>
              </div>
              
              {/* Mobile scroll down indicator */}
              {index < DataPortfolio.length - 1 && (
                <ScrollIndicator />
              )}
            </section>

          ))
        }
    </>
  )
}

export default Portfolio