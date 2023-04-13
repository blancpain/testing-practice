import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./app";

test("first letter capitalized", () => {
  expect(capitalize("string")).toBe("String");
});

test("reverse string", () => {
  expect(reverseString("string")).toBe("gnirts");
});

describe("calculator", () => {
  const myCalc = calculator();
  const { add, substract, multiply, divide } = myCalc;

  test("add", () => {
    expect(add(1, 2)).toBe(3);
  });
  test("substract", () => {
    expect(substract(5, 4)).toBe(1);
  });
  test("multiply", () => {
    expect(multiply(3, 3)).toBe(9);
  });
  test("divide", () => {
    expect(divide(4, 2)).toBe(2);
  });
});

describe("cipher", () => {
  test("empty string", () => {
    expect(caesarCipher("", 1)).toBe("");
  });

  test("negative shift", () => {
    expect(caesarCipher("abc", -1)).toBe("Shift needs to be positive!");
  });

  test("base case", () => {
    expect(caesarCipher("abc", 1)).toBe("bcd");
  });

  test("punctuation", () => {
    expect(caesarCipher("a,b", 1)).toBe("b,c");
  });

  test("keeping the same case", () => {
    expect(caesarCipher("aB", 1)).toBe("bC");
  });

  test("wrapping from z to a", () => {
    expect(caesarCipher("z", 1)).toBe("a");
  });
});

describe("analyze array", () => {
  test("average", () => {
    expect(analyzeArray([1, 2, 3])).toHaveProperty("average", 2);
  });

  test("min", () => {
    expect(analyzeArray([1, 2, 3])).toHaveProperty("min", 1);
  });

  test("max", () => {
    expect(analyzeArray([1, 2, 3])).toHaveProperty("max", 3);
  });

  test("lenght", () => {
    expect(analyzeArray([1, 2, 3])).toHaveProperty("length", 3);
  });
});
