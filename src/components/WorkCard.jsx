import React, { useState, useEffect, useRef } from "react";
import { DataPortfolio } from "../data/DataPortfolio";
import { HashLink as Link } from "react-router-hash-link";

const WorkCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const timeoutRef = useRef(null);
  const cardRef = useRef(null);

  const duration = 600; // Should match CSS transition duration

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (!isFlipped && !isAnimating) {
      setIsFlipped(true);
      setIsAnimating(true);

      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setIsAnimating(false);
      }, duration);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleToggle = () => {
    const nextPinned = !isPinned;
    setIsPinned(nextPinned);

    if (nextPinned) {
      setIsFlipped(true);
    } else {
      setIsFlipped(false);
      setIsHovered(false);
    }

    setIsAnimating(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsAnimating(false);
    }, duration);
  };

  useEffect(() => {
    // If not animating, but state needs to revert because mouse left
    if (!isAnimating && isFlipped && !isHovered && !isPinned) {
      setIsFlipped(false);
      setIsAnimating(true);

      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setIsAnimating(false);
      }, duration);
    }
  }, [isAnimating, isFlipped, isHovered, isPinned]);

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setIsHovered(false);
        if (isPinned) {
          setIsPinned(false);
          setIsFlipped(false);
          setIsAnimating(true);
          clearTimeout(timeoutRef.current);
          timeoutRef.current = setTimeout(
            () => setIsAnimating(false),
            duration,
          );
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isPinned]);

  return (
    <div className="animateCardWork" tabIndex={1}>
      <div
        ref={cardRef}
        className={`cardWork-container ${isFlipped ? "flipped" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onClick={handleToggle}
      >
        <div className="cardWork-inner">
          {/* Front Face */}
          <div className="cardWork-face cardWork-front p-3">
            <div className="align">
              <span className="red"></span>
              <span className="yellow"></span>
              <span className="green"></span>
            </div>
            <h2 className="text-white mt-2 ms-2 font-semibold text-3xl">
              My work
            </h2>
          </div>

          {/* Back Face */}
          <div className="cardWork-face cardWork-back overflow-hidden flex flex-col justify-center">
            <div className="flex flex-col ms-2 pt-1 relative z-10 pr-3 w-full">
              {DataPortfolio.map((item, index) => (
                <div
                  key={index}
                  className={`border-b border-white/5 last:border-0 overflow-hidden ${isFlipped ? "opacity-0 animate-[slideInRight_0.4s_ease-out_forwards]" : "opacity-0"}`}
                  style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                >
                  <Link
                    className="flex items-center justify-between w-full py-2 group cursor-pointer text-lg"
                    aria-label={`View ${item.title} project`}
                    to={`/portfolio/projects/#${item.title}`}
                    onClick={(e) => e.stopPropagation()}
                    viewTransition
                  >
                    <span className="text-white/70 font-medium group-hover:text-white group-hover:translate-x-1 group-hover:scale-105 origin-left inline-block transition-all duration-300">
                      {item.title}
                    </span>
                    <span className="text-[#08fdd8] text-lg opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      ↗
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
