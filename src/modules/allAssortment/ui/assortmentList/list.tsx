import { ProductCard } from "../../../product/ui/productCard"
import { useProductContext } from "../../../product"
import styles from "./list.module.css"

export function AssortmentList() {
	const { products } = useProductContext()
	return (
		<div className={styles.list}>
			{products.map((p) => {
				return products.map((p) => {
					return <ProductCard {...p} />
				})
			})}
		</div>
	)
}
