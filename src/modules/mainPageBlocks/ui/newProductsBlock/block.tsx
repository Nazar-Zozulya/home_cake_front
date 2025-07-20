import { ProductCard } from "../../../../components/productCard"
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
							key={product.id}
							id={product.id}
							image={product.image}
							name={product.name}
							price={product.price}
							composition={product.composition}
							weight={product.weight}
							kilocalories={product.kilocalories}
						/>
					)
				})}
			</div>
		</div>
	)
}
