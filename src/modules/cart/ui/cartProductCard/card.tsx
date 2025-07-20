import { Product } from "../../../product"
import styles from "./card.module.css"

export function CartProductCard(props: Product & { count: number }) {
	return (
		<div className={styles.container}>
			<img src={styles.image} alt="" className={styles.image} />
			<div className={styles.content}>
				<div className={styles.mainInfo}>
					<p className={styles.name}>{props.name}</p>
					<p className={styles.composition}>{props.composition}</p>
				</div>
				<div className={styles.manageCountBlock}>
					<button className={styles.decrementButton}>-</button>
					<div className={styles.countBlock}>
						<p className={styles.count}>{props.count}</p>
					</div>
					<button className={styles.incrementButton}>+</button>
                    <p className={styles.price}>{props.price}</p>
				</div>
			</div>
		</div>
	)
}
