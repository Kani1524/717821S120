// AverageCalculator.js
import React, { useState } from 'react';
import './AverageCalculator.css';

const AverageCalculator = () => {
  const [numbers, setNumbers] = useState('');
  const [average, setAverage] = useState(null);

  const handleInputChange = (e) => {
    setNumbers(e.target.value);
  };

  const calculateAverage = () => {
    const numberArray = numbers.split(',').map((num) => parseFloat(num.trim()));
    const sum = numberArray.reduce((acc, curr) => acc + curr, 0);
    const avg = sum / numberArray.length;
    setAverage(avg);
  };

  return (
    <div className="average-calculator">
      <h2>Average Calculator</h2>
      <div className="input-container">
        <label htmlFor="numbers">Enter numbers separated by comma:</label>
        <input
          type="text"
          id="numbers"
          value={numbers}
          onChange={handleInputChange}
          placeholder="e.g., 1, 2, 3, 4"
        />
      </div>
      <button onClick={calculateAverage}>Calculate Average</button>
      {average !== null && (
        <div className="result-container">
          <p>Average: {average}</p>
        </div>
      )}
    </div>
  );
};

export default AverageCalculator;
