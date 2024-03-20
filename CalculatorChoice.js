// CalculatorChoice.js
import React, { useState } from 'react';

const CalculatorChoice = ({ onSelect }) => {
  const [choice, setChoice] = useState('');

  const handleChange = (e) => {
    setChoice(e.target.value);
    onSelect(e.target.value);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          value="average"
          checked={choice === 'average'}
          onChange={handleChange}
        />
        Calculate Average
      </label>
      <label>
        <input
          type="radio"
          value="fibonacci"
          checked={choice === 'fibonacci'}
          onChange={handleChange}
        />
        Calculate Fibonacci
      </label>
      <label>
        <input
          type="radio"
          value="even"
          checked={choice === 'even'}
          onChange={handleChange}
        />
        Check if Even
      </label>
      <label>
        <input
          type="radio"
          value="odd"
          checked={choice === 'odd'}
          onChange={handleChange}
        />
        Check if Odd
      </label>
    </div>
  );
};

export default CalculatorChoice;
