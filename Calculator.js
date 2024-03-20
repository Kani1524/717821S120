// Calculator.js
import React, { useState } from 'react';
import AverageCalculator from './AverageCalculator';
import FibonacciCalculator from './FibonacciCalculator';
import EvenOddChecker from './EvenOddChecker';
import RandomNumberGenerator from './RandomNumberGenerator';
import './Calculator.css';

const Calculator = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="calculator">
      <h2>Calculator</h2>
      <div className="options">
        <button onClick={() => handleOptionChange('average')}>Average</button>
        <button onClick={() => handleOptionChange('fibonacci')}>Fibonacci</button>
        <button onClick={() => handleOptionChange('evenOdd')}>Even/Odd</button>
        <button onClick={() => handleOptionChange('random')}>Random Number</button>
      </div>
      {selectedOption === 'average' && <AverageCalculator />}
      {selectedOption === 'fibonacci' && <FibonacciCalculator />}
      {selectedOption === 'evenOdd' && <EvenOddChecker />}
      {selectedOption === 'random' && <RandomNumberGenerator />}
    </div>
  );
};

export default Calculator;
