import { ProductCard } from "../../../product/ui/productCard"
import { Product, useProductContext } from "../../../product"
import styles from "./block.module.css"

export function NewProductsBlock() {
	const { products }  = useProductContext()

	return (
		<div className={styles.container} id="newProductsBlock">
			<img src="/assets/images/newProducts.jpg" alt="" className={styles.bg}  />
			<p className={styles.title}>Наші Новинки</p>
			<div className={styles.allProducts}>
				{ products.slice(-3).reverse().map((product) => {
					return (
						<ProductCard
						{...product}
						/>
					)
				})}
			</div>
		</div>
	)
}
