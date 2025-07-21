
import { CloseModalButton } from "../../../../components/closeModalButton";
import { Modal } from "../../../../components/modal";
import { cartProductsToProducts } from "../../../../helpers";
import { useModalManagerStore } from "../../../../store";
import { useProductContext } from "../../../product";
import { useCartStore } from "../../store/useCartStore";
import { CartProductCard } from "../cartProductCard";
import styles from './modal.module.css'




export function CartModal() {
    const cartItems = useCartStore((state) => state.cartItems)
    const closeModal = useModalManagerStore((state) => state.closeModal)
    const { products } = useProductContext()

    return (
        <Modal>
            <div className={styles.container}>
                <div className={styles.header}>
                    <p className={styles.title}>Кошик</p>
                    <CloseModalButton />
                </div>
                <div className={styles.content}>
                    { cartProductsToProducts(cartItems ?? [], products).map((p)=> {
                        return(
                            <CartProductCard key={p.id} id={p.id} name={p.name} price={p.price} composition={p.composition} image={p.image} count={p.count} />
                        )
                    }) }
                    {/* { cartItems.map((item) => {
                        return(
                            <div>{item.id} {item.count}</div>
                        )
                    }) } */}
                </div>
                <div className={styles.footer}>
                    <button className={styles.continueShopping}><p className={styles.continueShoppingText} onClick={() => {closeModal()}} >Продовжити покупки</p></button>
                    <div className={styles.totalSumBlock}>
                        <div className={styles.totalSumText}>10000 $</div>
                        <button className={styles.buyButton}><p className={styles.buyButtonText}>Замовити</p></button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}