import './button.css';
import React, { useRef } from 'react';

export const Button = (name, icon, onClick) => {
  const buttonRef = useRef(null);

  return (
    <button ref={buttonRef} onClick={onClick} className='button'>
      <img
        src={`${process.env.PUBLIC_URL}/icons/${icon}`}
        alt={name}
        className='button-icon'
      />
    </button>
  );
}