import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
import { useProductContext } from "../../modules/product"
import { useCartStore } from "../../modules/cart"
import { cartProductsToProducts, totalCount, totalCartSum } from "../../modules/cart"

export function OrderPage() {
	const { email, token } = useParams()
	const { products: pr } = useProductContext()
	const { cartItems } = useCartStore()

	const products = cartProductsToProducts(cartItems ?? [], pr)

	const totalSum = totalCartSum(products)

	const totalC = totalCount(products)

	useEffect(() => {
		async function fetchFunction() {
			const response = await fetch(
				"https://api.monobank.ua/personal/checkout/order",
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						order_ref: uuidv4(),
						amount: totalSum,
						ccy: 980,
						count: totalC,
						products,
						dlv_method_list: ["pickup", "courier"],
						payment_method_list: ["card"],
						dlv_pay_merchant: false,
						payments_number: 1,
						// callback_url: "https://your-site.com/callback",
						return_url: "http://localhost:3000/",
						hold: false,
					}),
				}
			)
		}

        fetchFunction()
	}, [products])

	return (
		<div>
			orderPage {email} {token}{" "}
		</div>
	)
}
