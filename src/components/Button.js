import React from 'react';
import "./Button.css";

const Button = ({ value, onhandleClick }) => {
  return (
    <button onClick={() => onhandleClick(value)} >{value}</button>
  );
};

export default Button;
