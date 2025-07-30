import { Product } from "../../product"
import { User } from "../../user"
import { cartProductsToProducts } from "../helpers"
import { useCartStore } from "../store/useCartStore"
import { CartItem, DeliveryInfo } from "../types"

export async function orderFromCart(
	user: User,
	products: Product[],
	cartItems: CartItem[],
	deliveryInfo?: DeliveryInfo,
) {
    if (!cartItems) return

    try {

        const newProducts = cartProductsToProducts(cartItems, products)

        const newDeliveryInfo = deliveryInfo ?? undefined

        const response = await fetch(
			`${process.env.REACT_APP_SERVER_URL}/api/order/cart`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},

				body: JSON.stringify({
					user,
					products: newProducts,
                    deliveryInfo: newDeliveryInfo,
				}),
			}
		)

        const result = response.json()

        return result
	} catch (err) {
		console.log(err)
		return err
	}
}
