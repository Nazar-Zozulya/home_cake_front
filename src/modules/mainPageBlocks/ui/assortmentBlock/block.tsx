import { ProductCard } from "../../../../components/productCard"
import { Product, useProductContext } from "../../../product"
import styles from "./block.module.css"
import { sampleSize } from "lodash"

export function AssortmentBlock() {
	const { products } = useProductContext()
	const randomProducts: Product[] = sampleSize(products, 3)

	return (
		<div className={styles.container}>
			<img
				src="/assets/images/assortment.jpg"
				className={styles.image}
				alt=""
			/>
			<p className={styles.title}>Наш асортимент</p>

			<div className={styles.productsList}>
				{randomProducts.map((product) => (
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
				))}
			</div>

			<button className={styles.showAll}>Показати всі</button>
		</div>
	)
}
