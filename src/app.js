function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function reverseString(str) {
  return Array.from(str).reverse().join("");
}

export { capitalize, reverseString };
