import React, { useState } from 'react';

function BMICalculator() {
  const [gender, setGender] = useState('male');
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBMI] = useState(null);

  const handleCalculateBMI = () => {
    // Calculate BMI here and update the state
    const heightInMeters = height;
    const weightInKg = weight;
    const bmiValue = weightInKg / (heightInMeters * heightInMeters);
    setBMI(bmiValue);
  };

  return (
    <div className='bg-[#282c34] flex flex-col items-center justify-center min-h-screen'>
      <div className="p-4 w-4/5 md:w-6/12 mx-auto bg-white shadow-md rounded-md">
        <h2 className="text-3xl text-gray-700 font-semibold mb-4">BMI Calculator</h2>
        <form>
          <div className="mb-4">
            <label className="block font-semibold text-gray-700">Gender:</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full p-2 border text-center rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block font-semibold text-gray-700">Height (meters):</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full p-2 text-center border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold text-gray-700">Weight (kg):</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full text-center p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <button
            type="button"
            onClick={handleCalculateBMI}
            className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring"
          >
            Calculate BMI
          </button>
        </form>
        {bmi !== null && (
          <div className="mt-4">
            <p className="text-xl font-semibold text-green-700">Your BMI is: {bmi.toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default BMICalculator;
