import { ProductCard } from "../../../../components/productCard"
import styles from "./block.module.css"

export function NewProductsBlock() {
	return (
		<div className={styles.container}>
			<img src="/assets/images/newProducts.jpg" alt="" className={styles.bg}  />
			<p className={styles.title}>Наші Новинки</p>
			<div className={styles.allProducts}>
				<ProductCard />
				<ProductCard />
				<ProductCard />
				
			</div>
		</div>
	)
}
