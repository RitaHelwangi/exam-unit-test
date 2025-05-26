import { isCartItem, isProduct } from "../validation.js";
// Examples of a valid product and a valid cart item. You may use these when testing below.
const exampleProduct = {
  id: 1001,
  name: "Badanka",
  price: 500,
};

const exampleCartObject = {
  id: 2001,
  amount: 1,
  item: exampleProduct,
};

// Group tests using "describe"
describe("Validation", () => {
  // 1. it returns true for a valid cart object
  // 2. it returns false for invalid cart objects

  // 3. it returns true for a valid product
  // 4. it returns false for invalid cart objects
  describe("isProduct", () => {
    test("isProduct returns true for a valid product object", () => {
      const result = isProduct(exampleProduct);
      expect(result).toBe(true);
    });

    test("returns false for an invalid product", () => {
      const invalidProduct = { name: "Missing price and id" };
      const result = isProduct(invalidProduct);
      expect(result).toBe(false);
    });
  });
});
