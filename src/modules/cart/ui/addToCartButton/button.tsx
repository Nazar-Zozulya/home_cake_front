// import { CartIcon } from '../../ui/icons/cart-icon';
import { CartIcon } from "../../../../ui/icons/cart-icon"
import { useCartStore } from "../../store/useCartStore"
import styles from "./button.module.css"
import { IAddToCartButtonProps as Props } from "./button.types"

export function AddToCartButton({ id }: Props) {
	const addToCart = useCartStore((state) => state.addToCart)
	const isInCart = useCartStore((state) => state.isInCart)
	const removeFromCart = useCartStore((state) => state.removeFromCart)

	return (
		<button className={`${styles.button} ${isInCart(id) ? styles.active : undefined}`} onClick={() => !isInCart(id) ? addToCart(id) : removeFromCart(id)}>
			<CartIcon width={40} height={40} />
		</button>
	)
}
