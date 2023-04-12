import { capitalize, reverseString, calculator } from "./app";

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
