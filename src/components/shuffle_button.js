import './shuffle_button.css';
import React, { useRef } from 'react';

export const ShuffleButton = () => {
  const buttonRef = useRef(null);

  const handleClick = () => {
    console.log("Shuffling...");
  };

  return (
    <button ref={buttonRef} onClick={handleClick} className='shuffle-button'>
      <img
        src={`${process.env.PUBLIC_URL}/shuffle_icon.png`}
        alt="Shuffle Icon"
        className='shuffle-icon'
      />
    </button>
  );
}