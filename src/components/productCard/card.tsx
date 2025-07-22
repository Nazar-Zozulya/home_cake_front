import { Link } from "react-router-dom"
import { AddToCartButton } from "../../modules/cart"
import { Product } from "../../modules/product"
// import { AddToCartButton } from '../addToCartButton';
import styles from "./card.module.css"

export function ProductCard(props: Product) {
	return (
		<div className={styles.card}>
				<Link to={`/${props.id}`}>
					<img src={props.image} className={styles.image} alt="" />
				</Link>
				<div className={styles.mainInfo}>
					<p className={styles.name}>{props.name}</p>
					<p className={styles.price}>{props.price}</p>
				</div>
				<div className={styles.secondInfo}>
					<p className={styles.description}>{props.composition}</p>
					<AddToCartButton id={props.id} />
				</div>

				<div className={styles.thirdInfo}>
					<p className={styles.thirdInfoText}>{props.weight} гр.</p>
					<p className={styles.thirdInfoText}>/</p>
					<p className={styles.thirdInfoText}>
						{props.kilocalories} ккал.
					</p>
				</div>
			</div>
	)
}
