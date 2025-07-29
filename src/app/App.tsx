import { useEffect } from "react";
import { useCartStore } from "../modules/cart";
import { AppProviders } from "./providers";
import { AppRoutes } from "./routes";
import { CartItem } from "../modules/cart/types";

export default function App() {
	const { cartItems, setCartItems } = useCartStore()

	useEffect(()=>{
		const newCartItems = localStorage.getItem("cart")

		if (!newCartItems) return

		const parsedCart: CartItem[] = JSON.parse(newCartItems)

		setCartItems(parsedCart)
	}, [])

	useEffect(()=>{
		if (!cartItems) return

		localStorage.setItem("cart",JSON.stringify(cartItems))
	},[cartItems])

	return (
		<AppProviders>
			<AppRoutes />
		</ AppProviders>
	);
}
