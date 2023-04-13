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

function caesarCipher(str, shift) {
  if (str === "") return "";
  if (shift < 0) return "Shift needs to be positive!";
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const alphabetIndex = alphabet.reduce((acc, letter, index) => {
    acc[letter.toLowerCase()] = index + 1;
    return acc;
  }, {});

  let convertedStr = "";

  // helper function to check if char is a letter
  function isLetter(char) {
    if (char.length === 1 && char.match(/[A-Z|a-z|ü|é]/i)) {
      return true;
    }
    return false;
  }

  // helper function to check letter case
  function isUpper(letter) {
    if (letter.toUpperCase() === letter) {
      return true;
    }
    return false;
  }

  // helper function to fetch shifted letter, preserving case
  function shiftLetter(letter, offset) {
    const letterIndex = alphabetIndex[letter.toLowerCase()];
    const newLetterIndex = (letterIndex + offset) % 26;

    const newLetter = Object.keys(alphabetIndex).find(
      (key) => alphabetIndex[key] === newLetterIndex
    );

    return isUpper(letter) ? newLetter.toUpperCase() : newLetter;
  }

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < str.length; i++) {
    if (isLetter(str[i])) {
      // TODO - shift the letter....
      convertedStr += shiftLetter(str[i], shift);
    } else {
      convertedStr += str[i];
    }
  }

  return convertedStr;
}

function analyzeArray(arr) {
  return {
    average: arr.reduce((sum, val) => sum + val, 0) / arr.length,
    length: arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
  };
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
