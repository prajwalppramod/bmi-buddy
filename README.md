# BMI Buddy 
### Enabling individuals to monitor their BMI (Body Mass Index) and obtain custom weight management advice to enhance their overall health and fitness.
---
## Overview
This project is a React application with a BMI Calculator component. The BMI Calculator allows users to input their gender, height, and weight, and it calculates and displays the Body Mass Index (BMI).

---
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Customization](#customization)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
---
# Installation

git clone https://github.com/prajwalppramod/bmi-buddy.git \
npm install \
npm start


# Folder Structure

bmi-buddy/\
├── src/\
│   ├── components/\
│   │   ├── Design.js\
│   └── App.css\
│   └── App.js\
│   └── app.test.js\
│   └── BMICalculator.jsx\
│   └── index.css\
│   └── index.js\
│   └── reportWebVitals.js\
│   └── setupTests.js\
├── package.json\
└── README.md

# Customization

Tailwind Configuration\
The Tailwind CSS configuration can be customized in the tailwind.config.js file.\
To optimize for production, ensure that unused CSS is purged by setting purge in tailwind.config.js.

# Styling Components
Style the components in BMICalculator.jsx using Tailwind CSS classes.
# Testing

npm test
