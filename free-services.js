// import './style.css';

function calculateBMR(sex, weight, height, age) {
  if (sex === 'male') {
    return 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    return 10 * weight + 6.25 * height - 5 * age - 161;
  }
}

function calculateCalories(bmr, activityLevel, goal) {
  return Math.round(bmr * activityLevel * goal);
}

document.getElementById('caloriesForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const sex = document.getElementById('sex').value;
  const age = parseFloat(document.getElementById('age').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  const activity = parseFloat(document.getElementById('activity').value);
  const goal = parseFloat(document.getElementById('goal').value);

  const bmr = calculateBMR(sex, weight, height, age);
  const calories = calculateCalories(bmr, activity, goal);

  const result = document.getElementById('result');
  result.textContent = `Your daily calorie requirement is approximately ${calories} calories`;
  result.classList.add('show');
});




















// import './style.css';
// import { calculateBMR, calculateCalories } from 'js/calculations.js';



// document.getElementById('caloriesForm').addEventListener('submit', function(e) {
//   e.preventDefault();
  
//   const sex = document.getElementById('sex').value;
//   const age = parseFloat(document.getElementById('age').value);
//   const weight = parseFloat(document.getElementById('weight').value);
//   const height = parseFloat(document.getElementById('height').value);
//   const activity = parseFloat(document.getElementById('activity').value);
//   const goal = parseFloat(document.getElementById('goal').value);

//   const bmr = calculateBMR(sex, weight, height, age);
//   const calories = calculateCalories(bmr, activity, goal);

//   const result = document.getElementById('result');
//   result.innerHTML = `Your daily calorie requirement is approximately ${calories} calories`;
//   result.classList.add('show');
// });