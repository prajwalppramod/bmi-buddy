import React from 'react';
import './App.css';
import BMICalculator from './BMICalculator'; // Import the BMICalculator component
import Design from './components/Design';
function App() {
  return (
    <div>
      <Design/>
      <div className="App">
        <header className="App">
          <BMICalculator /> {/* Render the BMICalculator component here */}
        </header>
      </div>
    </div>
  );
}

export default App;
