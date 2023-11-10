import React from 'react';
import './App.css';
import BMICalculator from './BMICalculator'; // Import the BMICalculator component
import Design from './components/Design';

function App() {
  return (
    <div>
      <Design />
      <BMICalculator />
    </div>
  );
}

export default App;
