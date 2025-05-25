import React from 'react';
import './FlashButton.css';

const FlashButton = ({ children, onClick }) => (
  <button className="fancy-button" onClick={onClick}>
    {children}
  </button>
);

export default FlashButton;
