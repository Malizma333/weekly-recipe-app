import './button.css';
import React, { useState } from 'react';

export const Button = ({ name, icon, onClick, tooltip }) => {

  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className='button-container'>
      <button
        onClick={onClick}
        className='button'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={`${process.env.PUBLIC_URL}/icons/${icon}`}
          alt={name}
          className='button-icon'
        />
      </button>
      {showTooltip && <div className="button-tooltip">{tooltip}</div>}
    </div>
  );
}