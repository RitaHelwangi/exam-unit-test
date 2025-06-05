// importera här
import {
	addToCart,
	getCartItemCount,
	clearCart,
	getItem,
	getTotalCartValue,
	removeFromCart,
	editCart,
} from "../cart";

describe("Cart", () => {
	beforeEach(() => {
		// Denna kod körs före varje test. Det är för att rensa kundvagnen, så inte saker ligger kvar från föregående test.
		clearCart();
	});
	// Skriv dina testfall här
	// Du får ett test att börja med
	describe("addToCart", () => {
		test("addToCart adds a new product to the cart", () => {
			const itemCountBefore = getCartItemCount();
			const input = { id: 1002, name: "Vattenpistol", price: 40 };
			addToCart(input);
			const itemCountAfter = getCartItemCount();
			expect(itemCountAfter).toBe(itemCountBefore + 1);
		});
		
		test("addToCart does not add an invalid product to the cart", () => {
			const itemCountBefore = getCartItemCount();
			const invalidProduct = { name: "missing id and price" };
			addToCart(invalidProduct);
			const itemCountAfter = getCartItemCount();
			expect(itemCountAfter).toBe(itemCountBefore);
		});
		
		test("addToCart increases amount if product already in cart", () => {
			const product = { id: 1002, name: "Vattenpistol", price: 40 };
			addToCart(product);
			addToCart(product);
			const item = getItem(0);
			expect(item.amount).toBe(2);
			expect(getCartItemCount()).toBe(2); // 2 items in total (amount), but only 1 cart entry
		});
	});
	
	describe("getCartItemCount", () => {
		test("getCartItemCount returns 0 when the cart is empty", () => {
			expect(getCartItemCount()).toBe(0);
		});
	});
	
	describe("getItem", () => {
		test("getItem returns the cart item at the given index", () => {
			const product = { id: 1003, name: "Strandboll", price: 30 };
			addToCart(product);
			const item = getItem(0);
			expect(item.item.name).toBe("Strandboll");
		});
	});
	
	describe("getTotalCartValue", () => {
		test("getTottalCartValue returns correct total value of the cart", () => {
			const product1 = { id: 1004, name: "Badhandduk", price: 100 };
			const product2 = { id: 1005, name: "Solkräm", price: 50 };
			addToCart(product1);
			addToCart(product2);
			
			const totalValue = getTotalCartValue();
			expect(totalValue).toBe(150); // 100 + 50
		});
	});
	
	describe("removeFromCart", () => {
		test("removeFromCart removes an item from the cart", () => {
			const product = { id: 1006, name: "Snorkel", price: 200 };
			addToCart(product);
			const itemCountBefore = getCartItemCount();
			removeFromCart(1006); // Assuming removeFromCart takes the product ID
			const itemCountAfter = getCartItemCount();
			expect(itemCountAfter).toBe(itemCountBefore - 1);
		});
		test("removeFromCart does nothing if the item is not in the cart", () => {
			const itemCountBefore = getCartItemCount();
			removeFromCart(9999); // Non-existing product ID
			const itemCountAfter = getCartItemCount();
			expect(itemCountAfter).toBe(itemCountBefore);
		});
	});
	
	describe("editCart", () => {
		test("editCart updates the amount of an item in the cart", () => {
			const product = { id: 1007, name: "Fotpump", price: 60 };
			addToCart(product);
			editCart(1007, { amount: 3 }); // <-- Call the function you want to test
			const item = getItem(0);
			expect(item.amount).toBe(3);
		});
	});
});
