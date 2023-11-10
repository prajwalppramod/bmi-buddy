import React, { useState } from 'react';

function BMICalculator() {
  console.log('BMICalculator component is rendered');

  const [gender, setGender] = useState('male');
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBMI] = useState(null);
  const [bmiCategory, setBMICategory] = useState(null);

  const handleCalculateBMI = () => {
    // Calculate BMI here and update the state
    const heightInMeters = height/100;
    const weightInKg = weight;
    const bmiValue = weightInKg / (heightInMeters * heightInMeters);

    setBMI(bmiValue);
    setBMICategory(getBMICategory(bmiValue));
  };

  const getBMICategory = (bmiValue) => {
    if (bmiValue < 18.5) {
      return 'Underweight';
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      return 'Normal Weight';
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      return 'Overweight';
    } else {
      return 'Obese';
    }
  };

  const getTips = (category) => {
    switch (category) {
      case 'Underweight':
        return 'Tips: To gain weight, focus on a balanced diet with an emphasis on protein and healthy fats. Consult with a nutritionist for personalized advice.';
      case 'Normal Weight':
        return 'Interesting Fact: Did you know that maintaining a healthy weight reduces the risk of various health issues and improves overall well-being?';
      case 'Overweight':
        return 'Tips: To lose weight, consider incorporating regular exercise and a calorie-controlled diet. Consult with a healthcare professional for personalized advice.';
      case 'Obese':
        return 'Tips: Obesity may increase the risk of various health conditions. Consider seeking guidance from a healthcare professional for a tailored weight management plan.';
      default:
        return '';
    }
  };

  return (
    <div className='bg-[#282c34] flex flex-col items-center justify-center min-h-screen'>
      <div className="p-4 z-10 w-4/5 md:w-6/12 mx-auto backdrop-blur bg-cyan-600/30 shadow-md rounded-md">
        <h2 className="text-3xl text-white text-center font-semibold mb-4">BMI Buddy</h2>
        <form>
          {/* <div className="mb-4">
            <label className="block font-semibold text-white">Gender:</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full p-2  backdrop-blur bg-white/80 text-center rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div> */}
          <div className="mb-4">
            <label className="block font-semibold text-white">Height (centimeters):</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full p-2 backdrop-blur bg-white/80 text-center border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold text-white">Weight (kg):</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full text-center p-2 backdrop-blur bg-white/80 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
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
            <p className="text-xl font-semibold text-white">Your BMI is: {bmi.toFixed(2)}</p>
            <p className="text-lg text-white">BMI Category: {bmiCategory}</p>
            <p className="text-sm text-white">{getTips(bmiCategory)}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default BMICalculator;
