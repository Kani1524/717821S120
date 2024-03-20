// NumberAverageDisplay.js
import React, { useState, useEffect } from 'react';

const NumberAverageDisplay = () => {
  const [numbers, setNumbers] = useState([]);
  const [average, setAverage] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:9876/number');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setNumbers(data.numbers);
      setAverage(data.avg.toFixed(2));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h2>Number Average Display</h2>
      <div>
        <h3>Numbers:</h3>
        <ul>
          {numbers.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Average:</h3>
        <p>{average}</p>
      </div>
    </div>
  );
};

export default NumberAverageDisplay;
