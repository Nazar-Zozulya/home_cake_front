import { CartIcon } from '../../ui/icons/cart-icon';
import styles from './button.module.css';
import { IAddToCartButtonProps as Props } from './button.types'


export function AddToCartButton({ id }: Props) {
    return (
        <button className={styles.button}>
            <CartIcon width={40} height={40} fill="#000" />
        </button>
    );
}