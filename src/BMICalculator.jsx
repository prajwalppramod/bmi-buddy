import React, { useState } from 'react';

function BMICalculator() {
  console.log('BMICalculator component is rendered');

  const [height, setHeight] = useState(0);
  const [feet, setFeet] = useState(0);
  const [inches, setInches] = useState(0);
  const [heightUnit, setHeightUnit] = useState('cm');
  const [weight, setWeight] = useState(0);
  const [weightUnit, setWeightUnit] = useState('kg');
  const [bmi, setBMI] = useState(null);
  const [bmiCategory, setBMICategory] = useState(null);

  const handleCalculateBMI = () => {
    const heightInMeters = heightUnit === 'cm' ? height / 100 : ((feet * 0.3048) + (inches * 0.0254));
    const weightInKg = weightUnit === 'kg' ? weight : (weight / 2.20462); // Convert pounds to kg
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
        return `<div className="mx-auto">
            <p>Tips: To gain weight, focus on a balanced diet with an emphasis on protein and healthy fats. Consult with a nutritionist for personalized advice.</p>
              <iframe className="responsive-iframe" src="https://www.youtube.com/embed/oOXn1RrZ0eU" title="Weight Gain Tip 1" frameborder="0" allowfullscreen></iframe>
              <iframe className="responsive-iframe" src="https://www.youtube.com/embed/astPqpXaxkQ" title="Weight Gain Tip 2" frameborder="0" allowfullscreen></iframe>
              <iframe className="responsive-iframe" src="https://www.youtube.com/embed/KM3ko1Z4amA" title="Weight Gain Tip 3" frameborder="0" allowfullscreen></iframe>
            </div>`

      case 'Normal Weight':
        return 'Interesting Fact: Did you know that maintaining a healthy weight reduces the risk of various health issues and improves overall well-being?';
      case 'Overweight':
        return `<div className="mx-auto">
            <p>Tips: To lose weight, consider incorporating regular exercise and a calorie-controlled diet. Consult with a healthcare professional for personalized advice.</p>
            <iframe className="responsive-iframe" src="https://www.youtube.com/embed/jvJuJpCtyic" title="Weight Loss Tip 1" frameborder="0" allowfullscreen></iframe>
            <iframe className="responsive-iframe" src="https://www.youtube.com/embed/ygAC0yJp1KU" title="Weight Loss Tip 2" frameborder="0" allowfullscreen></iframe>
            <iframe className="responsive-iframe" src="https://www.youtube.com/embed/Tuz9YGtfTII" title="Weight Loss Tip 3" frameborder="0" allowfullscreen></iframe>
            </div>`

      case 'Obese':
        return `<div className="mx-auto">
            <p>Tips: Obesity may increase the risk of various health conditions. Consider seeking guidance from a healthcare professional for a tailored weight management plan.</p>
            <iframe className="responsive-iframe" src="https://www.youtube.com/embed/BSnnDfSNhyU" title="Obesity Tip 1" frameborder="0" allowfullscreen></iframe>
            <iframe className="responsive-iframe" src="https://www.youtube.com/embed/ymjNF6lPUaY" title="Obesity Tip 2" frameborder="0" allowfullscreen></iframe>
            <iframe className="responsive-iframe" src="https://www.youtube.com/embed/YufejdqeMYk" title="Obesity Tip 3" frameborder="0" allowfullscreen></iframe>
          </div>`
      default:
        return '';
    }
  };

  return (
    <div className='bg-[#282c34] md:pt-28 md:pb-28 pt-20 pb-24 flex flex-col items-center justify-center min-h-screen'>
      <div className="p-4 z-10 w-4/5 md:w-6/12 mx-auto backdrop-blur bg-cyan-600/30 shadow-md rounded-md">
        <h2 className="text-3xl text-white text-center font-semibold mb-4">BMI Buddy</h2>
        <form>
          <div className="mb-4">
            <label className="block font-semibold text-white">Weight:</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full p-2 backdrop-blur bg-white/80 text-center border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
            <select
              value={weightUnit}
              onChange={(e) => setWeightUnit(e.target.value)}
              className="w-full p-2 mt-2 backdrop-blur bg-white/80 text-center rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="kg">kg</option>
              <option value="lbs">lbs</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block font-semibold text-white">Height:</label>
            {heightUnit === 'cm' ? (
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full p-2 backdrop-blur bg-white/80 text-center border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            ) : (
              <div className="flex">
                <input
                  type="number"
                  value={feet}
                  onChange={(e) => setFeet(e.target.value)}
                  placeholder="Feet"
                  className="w-1/2 p-2 mr-2 backdrop-blur bg-white/80 text-center border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
                <input
                  type="number"
                  value={inches}
                  onChange={(e) => setInches(e.target.value)}
                  placeholder="Inch"
                  className="w-1/2 p-2 backdrop-blur bg-white/80 text-center border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
            )}
            <select
              value={heightUnit}
              onChange={(e) => setHeightUnit(e.target.value)}
              className="w-full p-2 mt-2 backdrop-blur bg-white/80 text-center rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="cm">cm</option>
              <option value="ft">ft/in</option>
            </select>
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
            <div className="text-sm text-white" dangerouslySetInnerHTML={{ __html: getTips(bmiCategory) }}></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BMICalculator;
