import { capitalize, reverseString } from "./app";

test("first letter capitalized", () => {
  expect(capitalize("string")).toBe("String");
});
