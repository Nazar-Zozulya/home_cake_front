import { ProductCard } from "../../../../components/productCard"
import { Product } from "../../../product"
import styles from "./block.module.css"

const products: Product[] = [
	{
		id: 4,
		name: "Торт Медовик",
		price: 210,
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPIpP2bGDiALastuZaCJddEZX1eSGxAREL8Q&s",
		composition: "Медові коржі, сметанний крем",
		weight: 520,
		kilocalories: 260,
	},
	{
		id: 5,
		name: "Торт Чізкейк",
		price: 230,
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPIpP2bGDiALastuZaCJddEZX1eSGxAREL8Q&s",
		composition: "Сирний крем, печиво, ягоди",
		weight: 500,
		kilocalories: 280,
	},
	{
		id: 6,
		name: "Торт Павлова",
		price: 240,
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPIpP2bGDiALastuZaCJddEZX1eSGxAREL8Q&s",
		composition: "Безе, вершковий крем, фрукти",
		weight: 480,
		kilocalories: 220,
	},
]

export function AssortmentBlock() {
	return (
		<div className={styles.container}>
			<img
				src="/assets/images/assortment.jpg"
				className={styles.image}
				alt=""
			/>
			<p className={styles.title}>Наш асортимент</p>

			<div className={styles.productsList}>
				{products.map((product) => {
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

			<button className={styles.showAll}>Показати всі</button>
		</div>
	)
}
