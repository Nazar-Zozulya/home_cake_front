import { create } from "zustand"
import { cartItem } from "../types/cartItem"

interface CartStoreTypes {
	cartItems: cartItem[]
	addToCart: (id: number) => void
	isInCart: (id: number) => boolean
	removeFromCart: (id: number) => void
	clearCart: () => void
}

export const useCartStore = create<CartStoreTypes>()((set, get) => ({
	cartItems: [],
	addToCart: (id) => {
		set((state) => ({ cartItems: [...state.cartItems, { id, count: 1 }] }))
		console.log("add:",get().cartItems)
	},
	isInCart: (id) => {
		const result = get().cartItems.some((product) => {
			return product.id === id
		})
        console.log(result)
		return result
	},
	removeFromCart: (id) => {
		const newCart = get().cartItems.filter((product) => {
			return product.id !== id
		})

		set(() => ({ cartItems: newCart }))
        console.log("remove:",get().cartItems)
	},
	clearCart: () => {
		set(() => ({ cartItems: [] }))
	},
}))
