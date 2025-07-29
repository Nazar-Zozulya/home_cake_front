import { TrashIcon } from "../../../../ui/icons"
import { Product } from "../../../product"
import { useCartStore } from "../../store/useCartStore"
import styles from "./card.module.css"

export function CartProductCard(
	props: Omit<Product, "weight" | "kilocalories"> & { count: number }
) {
	const { incrementCount, decrementCount, removeFromCart } = useCartStore()


	return (
		<div className={styles.container}>
			<button className={styles.trashIcon} onClick={() => removeFromCart(props.id)}>
				<TrashIcon width={25} height={25} stroke="#FF0000" strokeWidth={2} />
			</button>
			<img src={props.image} alt="" className={styles.image} />
			<div className={styles.content}>
				<div className={styles.mainInfo}>
					<p className={styles.name}>{props.name}</p>
					<p className={styles.composition}>{props.composition}</p>
				</div>
				<div className={styles.manageCountBlock}>
					<button className={styles.decrementButton} onClick={() => decrementCount(props.id)}>-</button>
					<div className={styles.countBlock}>
						<p className={styles.count}>{props.count}</p>
					</div>
					<button className={styles.incrementButton} onClick={() => incrementCount(props.id)}>+</button>
					<p className={styles.price}>{props.price * props.count} грн</p>
				</div>
			</div>
		</div>
	)
}
