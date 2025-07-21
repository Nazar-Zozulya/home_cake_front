import { create } from "zustand";
import { CartItem } from "../types/cartItem";

interface CartStoreTypes {
	cartItems: CartItem[] | null;
	setCartItems: (cartItems: CartItem[]) => void;
	addToCart: (id: number) => void;
	isInCart: (id: number) => boolean;
	removeFromCart: (id: number) => void;
	clearCart: () => void;
	incrementCount: (id: number) => void;
	decrementCount: (id: number) => void;
}

export const useCartStore = create<CartStoreTypes>()((set, get) => ({
	cartItems: null,

	setCartItems: (cartItems) => {
		set({ cartItems });
	},

	addToCart: (id) => {
		const items = get().cartItems ?? [];
		const exists = items.some((item) => item.id === id);

		if (exists) {
			const updatedCart = items.map((item) =>
				item.id === id ? { ...item, count: item.count + 1 } : item
			);
			set({ cartItems: updatedCart });
		} else {
			set({ cartItems: [...items, { id, count: 1 }] });
		}
	},

	isInCart: (id) => {
		const items = get().cartItems ?? [];
		return items.some((item) => item.id === id);
	},

	removeFromCart: (id) => {
		const items = get().cartItems ?? [];
		const newCart = items.filter((item) => item.id !== id);
		set({ cartItems: newCart });
	},

	clearCart: () => {
		set({ cartItems: [] });
	},

	incrementCount: (id) => {
		const items = get().cartItems ?? [];
		const updatedCart = items.map((item) =>
			item.id === id ? { ...item, count: item.count + 1 } : item
		);
		set({ cartItems: updatedCart });
	},

	decrementCount: (id) => {
		const items = get().cartItems ?? [];
		const updatedCart = items
			.map((item) =>
				item.id === id ? { ...item, count: item.count - 1 } : item
			)
			.filter((item) => item.count > 0);
		set({ cartItems: updatedCart });
	},
}));
