import React from 'react'

const ScrollIndicator = ({ text, direction = "down" }) => {
  const displayText = text || (direction === "up" ? "Scroll up" : "Scroll for more");
  
  return (
    <div className="scroll-indicator d-lg-none">
      {(direction === "up" || direction === "both") && <div className="arrow-up"></div>}
      <span className="scroll-text">{displayText}</span>
      {(direction === "down" || direction === "both") && <div className="arrow-down"></div>}
    </div>
  )
}

export default ScrollIndicator
