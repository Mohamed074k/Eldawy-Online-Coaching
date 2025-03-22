// BMR calculation using Mifflin-St Jeor Equation
export function calculateBMR(sex, weight, height, age) {
    if (sex === 'male') {
      return 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      return 10 * weight + 6.25 * height - 5 * age - 161;
    }
  }
  
  export function calculateCalories(bmr, activityLevel, goal) {
    return Math.round(bmr * activityLevel * goal);
  }