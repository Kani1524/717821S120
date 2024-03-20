// FibonacciCalculator.js
import React, { useState } from 'react';

const FibonacciCalculator = () => {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    setNumber(e.target.value);
  };

  const calculateFibonacci = () => {
    const n = parseInt(number);
    if (isNaN(n) || n < 0) {
      setResult('Please enter a non-negative integer.');
      return;
    }

    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    setResult(`Fibonacci(${n}) = ${fib[n]}`);
  };

  return (
    <div className="calculator-option">
      <h3>Fibonacci Calculator</h3>
      <div className="input-container">
        <label htmlFor="number">Enter a non-negative integer:</label>
        <input
          type="text"
          id="number"
          value={number}
          onChange={handleInputChange}
          placeholder="e.g., 5"
        />
      </div>
      <button onClick={calculateFibonacci}>Calculate Fibonacci</button>
      {result && <p>{result}</p>}
    </div>
  );
};

export default FibonacciCalculator;
