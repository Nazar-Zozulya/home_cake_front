import { ProductWithCount } from "../../product"

export function totalCartSum(products: ProductWithCount[] ): number {
	
	const priceMassive = products.map((p) => {
		return p.price * p.count
	})
	console.log("price massive: ", priceMassive)

	return priceMassive.reduce((acc, p) => {
		return acc + p
	}, 0)
}
