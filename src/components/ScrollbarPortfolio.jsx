import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { HashLink } from 'react-router-hash-link'
import styled from 'styled-components'
import { DataPortfolio } from '../data/DataPortfolio'

const ScrollbarPortfolio = () => {

    const scrollbar = useRef(null)
    const mainColor = '#08FDD8';

    useEffect(() => {
        let scrollPercent = 0;
        const handleScroll = () => {
            if (!scrollbar.current) return;
            const height = document.documentElement.scrollHeight;
            const element = document.documentElement;
            scrollPercent = Math.round(element.scrollTop / (height - element.clientHeight) * 100)
            scrollbar.current.style.height = `${scrollPercent}%`;
            var buttons = document.querySelectorAll('.project-button')
            buttons.forEach((btn, idx) => {
                const threshold = (idx / (buttons.length - 1 || 1)) * 90;
                if (scrollPercent >= threshold) {
                    btn.style.backgroundColor = mainColor;
                } else {
                    btn.style.backgroundColor = '#fff';
                }
            });
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])


    return (
        <StyledScrollbarPortfolio>
            <span ref={scrollbar} className={'scrollbar'}></span>
            {

                DataPortfolio.map((item, index) =>
                    <button alt={item.title} key={index} className='rounded-circle project-button'><HashLink to={`#${item.title}`} alt={item.title}><img src={item.logo} alt="" /></HashLink></button>
                )
            }
        </StyledScrollbarPortfolio>
    )
}

const StyledScrollbarPortfolio = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-color: #fff;
  width: 10px;
  height: 50%;
  position: fixed;
  inset: 0 36px 0 auto;
  margin: auto;
  z-index: 10;

  @media screen and (max-width: 768px) {
    display: none !important;
  }

  .scrollbar{
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
    background-color: #08FDD8;
    transition: background .3s ease-in-out;
  }

  button{
    width: 60px;
    aspect-ratio: 1;
    appearance: none;
    outline: none;
    border: 3px solid transparent;
    background-color: #fff;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    position: relative;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
      transform: scale(1.15);
      border-color: #08FDD8;
      box-shadow: 0 0 15px rgba(8, 253, 216, 0.4);
    }

    @media (hover: hover){
        &:hover{
            &::before{
                opacity: 1;
                visibility: visible;
                transform: translateX(0);
            }
            &::after{
                opacity: 1;
                visibility: visible;
                transform: rotate(45deg) translateX(0);
            }
        }

        &::before{
            content: attr(alt);
            position: absolute;
            width: 130px;
            left: -145px;
            top: 0;
            bottom: 0;
            margin: auto;
            height: fit-content;
            padding: 8px 12px;
            color: #fff;
            border-radius: 6px;
            background-color: #111;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
            font-weight: 600;
            font-size: 0.85rem;
            text-align: center;
            opacity: 0;
            visibility: hidden;
            transform: translateX(10px);
            transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
            pointer-events: none;
        }
        &::after{
            content: '';
            position: absolute;
            width: 10px;
            height: 10px;
            left: -20px;
            top: 0;
            bottom: 0;
            margin: auto;
            background-color: #111;
            transform: rotate(45deg) translateX(5px);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
            pointer-events: none;
        }
    }

    img{
        width: 90%;
        height: 90%;
        object-fit: contain;
        border-radius: 50%;
    }
  }
`

export default ScrollbarPortfolio