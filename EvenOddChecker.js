// EvenOddChecker.js
import React, { useState } from 'react';
import './EvenOddChecker.css';

const EvenOddChecker = () => {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (e) => {
    setNumber(e.target.value);
  };

  const checkEvenOdd = () => {
    const num = parseInt(number);
    if (isNaN(num)) {
      setResult('Please enter a valid number.');
    } else {
      setResult(num % 2 === 0 ? 'Even' : 'Odd');
    }
  };

  return (
    <div className="even-odd-checker">
      <h2>Even/Odd Checker</h2>
      <div className="input-container">
        <label htmlFor="number">Enter a number:</label>
        <input
          type="text"
          id="number"
          value={number}
          onChange={handleInputChange}
          placeholder="e.g., 5"
        />
      </div>
      <button onClick={checkEvenOdd}>Check</button>
      {result && <p className="result">{result}</p>}
    </div>
  );
};

export default EvenOddChecker;
