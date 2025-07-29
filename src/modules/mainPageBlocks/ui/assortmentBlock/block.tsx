import { useEffect, useState } from "react"
import { ProductCard } from "../../../product/ui/productCard"
import { Product, useProductContext } from "../../../product"
import styles from "./block.module.css"
import { sampleSize } from "lodash"
import { Link } from "react-router-dom"

export function AssortmentBlock() {
	const { products } = useProductContext()

	const [randomProducts, setRandomProducts] = useState<Product[]>([])

	useEffect(() => {
		setRandomProducts(sampleSize(products, 3))
	}, [products])

	return (
		<div className={styles.container} id="assortmentBlock">
			<img
				src="/assets/images/assortment.jpg"
				className={styles.image}
				alt=""
			/>
			<p className={styles.title}>Наш асортимент</p>

			<div className={styles.productsList}>
				{randomProducts.map((product) => (
					<ProductCard {...product} />
				))}
			</div>

			<Link to={"/all"}>
				<button className={styles.showAll}>Показати всі</button>
			</Link>
		</div>
	)
}
