import React from 'react';
import "./Button.css";

const Button = ({ value, handleClick }) => {
  return (
    <button onClick={() => handleClick(value)} >{value}</button>
  );
};

export default Button;
