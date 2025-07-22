import { useParams } from "react-router-dom"
import { AddToCartButton } from "../../../cart"
import { Product } from "../../../product/types/product"
import styles from "./block.module.css"
import { useProductContext } from "../../../product/context/productContext"
import { getProductById } from "../../../../helpers"



export function ProductBlock() {
    const params = useParams()

    const { products } = useProductContext()

    const product = getProductById(products, Number(params.id))

    if ( !product ) {
        return <div>product not found</div>
    }

    return (
        <div className={styles.container}>
            <p className={styles.name}>{product.name}</p>
            <div className={styles.content}>
                <img src={product.image} alt="" className={styles.image} />
                <div className={styles.textContent}>
                    <div className={styles.mainText}>
                        <div className={styles.keysBlock}>
                            <p className={styles.keyText}>Ціна</p>
                            <p className={styles.keyText}>Вага</p>
                            <p className={styles.keyText}>Кілокалорії</p>
                        </div>
                        <div className={styles.valuesBlock}>
                            <p className={styles.valueText}>{product.price} грн</p>
                            <p className={styles.valueText}>{product.weight} гр</p>
                            <p className={styles.valueText}>{product.kilocalories} ккал.</p>
                        </div>
                    </div>
                    <div className={styles.compositionBlock}>
                        <p className={styles.compositionTitle}>Склад</p>
                        <p className={styles.compositionText}>{product.composition}</p>
                    </div>
                    <AddToCartButton id={product.id} />
                </div>
            </div>
        </div>
    )
}