// CalculatorButton.js
import React from 'react';

const CalculatorButton = ({ label, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {label}
    </button>
  );
};

export default CalculatorButton;
