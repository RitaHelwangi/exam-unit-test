// importera här
import { addToCart, getCartItemCount, clearCart } from "../cart";

describe("Cart", () => {
  beforeEach(() => {
    // Denna kod körs före varje test. Det är för att rensa kundvagnen, så inte saker ligger kvar från föregående test.
    clearCart();
  });
  // Skriv dina testfall här
  // Du får ett test att börja med
  test("addToCart adds a new product to the cart", () => {
    const itemCountBefore = getCartItemCount();
    const input = { id: 1002, name: "Vattenpistol", price: 40 };
    addToCart(input);
    const itemCountAfter = getCartItemCount();
    expect(itemCountAfter).toBe(itemCountBefore + 1);
  });

  test("getCartItemCount returns 0 when the cart is empty", () => {
    expect(getCartItemCount()).toBe(0);
  });

  test("addToCart does not add an invalid product to the cart", () => {
    const itemCountBefore = getCartItemCount();
    const invalidProduct = { name: "missing id and price" };
    addToCart(invalidProduct);
    const itemCountAfter = getCartItemCount();
    expect(itemCountAfter).toBe(itemCountBefore);
  });
});
