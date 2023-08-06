
let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
}

function sumSalary(salaries) {
  let sum = 0;
  for (key in salaries) {
    if (typeof salaries[key] === 'number' && isFinite(salaries[key])) {
      
      sum += salaries[key];
    }
  }
  return sum;
}


