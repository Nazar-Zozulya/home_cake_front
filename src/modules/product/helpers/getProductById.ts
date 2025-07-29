import { Product } from "../types/product"

export function getProductById(products: Product[], id: number): Product | undefined {
	const currentProduct = products.find((p) => {
		return p.id === id
	})
    // if( !currentProduct) return
    return currentProduct
}
