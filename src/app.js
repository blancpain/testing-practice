function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function reverseString(str) {
  return Array.from(str).reverse().join("");
}

function calculator() {
  const add = (a, b) => a + b;
  const substract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => a / b;
  return {
    add,
    substract,
    multiply,
    divide,
  };
}

export { capitalize, reverseString, calculator };
