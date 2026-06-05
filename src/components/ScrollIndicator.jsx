import React from 'react'

const ScrollIndicator = ({ text = "Scroll to see more" }) => {
  return (
    <div className="scroll-indicator d-lg-none">
      <span className="scroll-text">{text}</span>
      <div className="arrow-down"></div>
    </div>
  )
}

export default ScrollIndicator
