// App.js
import React, { useState } from 'react';
import './App.css';
import AverageCalculator from './AverageCalculator';
import FibonacciCalculator from './FibonacciCalculator';
import EvenOddChecker from './EvenOddChecker';
import CalculatorChoice from './CalculatorChoice';


function App() {
  const [selectedCalculator, setSelectedCalculator] = useState(null);

  const handleSelectCalculator = (choice) => {
    switch (choice) {
      case 'average':
        setSelectedCalculator(<AverageCalculator />);
        break;
      case 'fibonacci':
        setSelectedCalculator(<FibonacciCalculator />);
        break;
      case 'even':
      case 'odd':
        setSelectedCalculator(<EvenOddChecker choice={choice} />);
        break;
      
      default:
        setSelectedCalculator(null);
        break;
    }
  };

  

  return (
    <div className="App">
      <h1>Calculator App</h1>
      <CalculatorChoice onSelect={handleSelectCalculator} />
      {selectedCalculator}
    </div>
  );
}

export default App;
