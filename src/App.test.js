import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BMICalculator from './BMICalculator';

test('renders BMICalculator component', () => {
  render(<BMICalculator />);
  const bmiCalculatorElement = screen.getByText('BMI Calculator');
  expect(bmiCalculatorElement).toBeInTheDocument();
});

test('calculates BMI correctly', () => {
  render(<BMICalculator />);
  const heightInput = screen.getByLabelText('Height (meters)');
  const weightInput = screen.getByLabelText('Weight (kg)');
  const calculateButton = screen.getByText('Calculate BMI');

  fireEvent.change(heightInput, { target: { value: 1.75 } });
  fireEvent.change(weightInput, { target: { value: 70 } });

  fireEvent.click(calculateButton);

  const bmiResult = screen.getByText('Your BMI is:');
  expect(bmiResult).toBeInTheDocument();
  expect(screen.getByText(/(\d+\.\d+)/)).toBeInTheDocument();
});
