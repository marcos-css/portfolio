import React, { createContext, useEffect, useState } from 'react'

export const AppContext = createContext()

const Context = ({ children }) => {
    const [effectsEnabled, setEffectsEnabled] = useState(() => {
        const saved = localStorage.getItem('animationsEnabled');
        if (saved !== null) {
            return JSON.parse(saved);
        }
        return true;
    });

    useEffect(() => {
        localStorage.setItem('animationsEnabled', JSON.stringify(effectsEnabled));
        if (!effectsEnabled) {
            document.body.classList.add('disable-effects');
        } else {
            document.body.classList.remove('disable-effects');
        }
    }, [effectsEnabled]);

    const generateLetters = (message, wrap, indexWrap) => {
        var aux = [];
        var currentWord = [];
        var arrayMessage = Array.from(message);
        
        arrayMessage.forEach((element, index) => {
            if (wrap && index === indexWrap) {
                if (currentWord.length > 0) {
                    aux.push(<span key={`w${index}`} style={{ whiteSpace: 'nowrap' }}>{currentWord}</span>);
                    currentWord = [];
                }
                aux.push(<br key={`br${index}`} />);
            } else if (element === ' ') {
                if (currentWord.length > 0) {
                    aux.push(<span key={`w${index}`} style={{ whiteSpace: 'nowrap' }}>{currentWord}</span>);
                    currentWord = [];
                }
                aux.push(<span key={`s${index}`}>{" "}</span>);
            } else {
                currentWord.push(
                    <span className='animate' style={{ cursor: 'default', display: 'inline-block' }} key={`l${index}`}>{element}</span>
                );
            }
        });
        
        if (currentWord.length > 0) {
            aux.push(<span key={`w_end`} style={{ whiteSpace: 'nowrap' }}>{currentWord}</span>);
        }
        
        return aux;
    }
      const AnimateLetters = () => useEffect(() => {
    
        document.querySelectorAll('.animate').forEach((item) => {
          item.addEventListener("mouseenter", () => {
            item.classList.add('animation-rubberband')
          })
          item.addEventListener('animationend', () => {
            item.classList.remove('animation-rubberband')
          })
        })
        document.querySelectorAll('.workLink').forEach((item) => {
          item.addEventListener('mouseenter', () => {
            item.classList.add('animated-workLink')
          })
          item.addEventListener('animationend', () => {
            item.classList.remove('animated-workLink')
          })
        })
      }, [])

  return (
    <AppContext.Provider value={{ generateLetters, AnimateLetters, effectsEnabled, setEffectsEnabled }}>
        { children }
    </AppContext.Provider>
  )
}

export default Context