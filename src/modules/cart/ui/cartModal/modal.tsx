
import { CloseModalButton } from "../../../../components/closeModalButton";
import { Modal } from "../../../../components/modal";
import { cartProductsToProducts } from "../../../../helpers";
import { useModalManagerStore } from "../../../../store";
import { TrashIcon } from "../../../../ui/icons";
import { useProductContext } from "../../../product";
import { useCartStore } from "../../store/useCartStore";
import { CartProductCard } from "../cartProductCard";
import styles from './modal.module.css'




export function CartModal() {
    const closeModal = useModalManagerStore((state) => state.closeModal)
    const { cartItems, clearCart } = useCartStore()
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
                    <div className={styles.buttonsHepler}>
                        <button className={styles.continueShopping} onClick={() => closeModal()}><p className={styles.continueShoppingText}  >Продовжити покупки</p></button>
                        <button className={styles.deleteAll} onClick={() => clearCart()}><TrashIcon width={25} height={25} stroke="#3E77BB" strokeWidth={2} /></button>
                    </div>
                    <div className={styles.totalSumBlock}>
                        <div className={styles.totalSumText}>10000 $</div>
                        <button className={styles.buyButton}><p className={styles.buyButtonText}>Замовити</p></button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}