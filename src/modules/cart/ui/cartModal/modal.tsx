
import { CloseModalButton } from "../../../../components/closeModalButton";
import { Modal } from "../../../../components/modal";
import { useModalManagerStore } from "../../../../store";
import { TrashIcon } from "../../../../ui/icons";
import { OrangeButton } from "../../../../ui/orangeButton";
import { useProductContext } from "../../../product";
import { cartProductsToProducts } from "../../helpers";
import { totalCartSum } from "../../helpers/totalSum";
import { useCartStore } from "../../store/useCartStore";
import { CartProductCard } from "../cartProductCard";
import styles from './modal.module.css'




export function CartModal() {
    const { cartItems, clearCart } = useCartStore()
    const { products } = useProductContext()
    const { closeModal, switchModal } = useModalManagerStore()
    const cartProducts = cartProductsToProducts(cartItems ?? [], products)
    const totalSum = totalCartSum(cartProducts ?? [])

    return (
        <Modal>
            <div className={styles.container}>
                <div className={styles.header}>
                    <p className={styles.title}>Кошик</p>
                    <CloseModalButton />
                </div>
                <div className={styles.content}>
                    { cartProducts.map((p)=> {
                        return(
                            <CartProductCard key={p.id} id={p.id} name={p.name} price={p.price} composition={p.composition} image={p.image} count={p.count} />
                        )
                    }) }
                </div>
                <div className={styles.footer}>
                    <div className={styles.buttonsHepler}>
                        <button className={styles.continueShopping} onClick={() => closeModal()}><p className={styles.continueShoppingText}  >Продовжити покупки</p></button>
                        <button className={styles.deleteAll} onClick={() => clearCart()}><TrashIcon width={25} height={25} stroke="#3E77BB" strokeWidth={2} /></button>
                    </div>
                    <div className={styles.totalSumBlock}>
                        <div className={styles.totalSumText}>{totalSum} грн</div>
                        <OrangeButton onClick={() => {switchModal("order")}} label="Замовити" />
                    </div>
                </div>
            </div>
        </Modal>
    )
}