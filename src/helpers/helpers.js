export function randInt(low, high) {
  const rndDec = Math.random();
  return Math.floor(rndDec * (high - low + 1) + low);
}

function getRandNumbers(operator, low, high) {
  let num1 = randInt(low, high);
  let num2 = randInt(low, high);
  const numHigh = Math.max(num1, num2);
  const numLow = Math.min(num1, num2);
  
  if(operator === '-') { // Make sure higher num comes first
    num1 = numHigh;
    num2 = numLow;
  }
  
  if(operator === '/') {
      if (num2 === 0) { // No division by zero
        num2 = randInt(1, high);
      }
      num1 = (num1 * num2);
    }
  return {num1, num2};
}
