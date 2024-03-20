// RandomNumberGenerator.js
import React, { useState } from 'react';

const NumberGenerator = ({ onSelect }) => {
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');

  const handleMinChange = (e) => {
    setMin(e.target.value);
  };

  const handleMaxChange = (e) => {
    setMax(e.target.value);
  };

  const RandomNumber = () => {
    const minVal = parseInt(min);
    const maxVal = parseInt(max);
    if (isNaN(minVal) || isNaN(maxVal) || minVal >= maxVal) {
      alert('Please enter valid minimum and maximum values.');
      return;
    }
    const randomNumber = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
    onSelect(randomNumber);
  };

  return (
    <div className="random-number-generator">
      <h3>Random Number Generator</h3>
      <div className="input-container">
        <label htmlFor="min">Enter minimum value:</label>
        <input
          type="text"
          id="min"
          value={min}
          onChange={handleMinChange}
          placeholder="e.g., 1"
        />
      </div>
      <div className="input-container">
        <label htmlFor="max">Enter maximum value:</label>
        <input
          type="text"
          id="max"
          value={max}
          onChange={handleMaxChange}
          placeholder="e.g., 100"
        />
      </div>
      <button onClick={RandomNumber}>Generate Random Number</button>
    </div>
  );
};

export default NumberGenerator;
