import { CartItem } from "../modules/cart";
import { Product } from "../modules/product";




export function cartProductsToProducts(data: CartItem[], products: Product[]): (Product & { count: number })[] {

	return data
		.map((item) => {
			const product = products.find((p) => p.id === item.id);
			if (!product) return null;
			return {
				...product,
				count: item.count,
			};
		})
		.filter(Boolean) as (Product & { count: number })[];
}
