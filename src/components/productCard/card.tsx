import { AddToCartButton } from '../addToCartButton';
import  styles  from './card.module.css';





export function ProductCard() {
    return (
        <div className={styles.card}>
            <img src="https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480/img/recipe/ras/Assets/832541314c4494e68cc285577361ed67/Derivates/c0e1d6a07027e24c896898ad828261b087efdd83.jpg" className={styles.image}  alt="" />
            <div className={styles.mainInfo}>
                <p className={styles.name}>Name</p> 
                <p className={styles.price}>Price</p>
            </div>
            <div className={styles.secondInfo}>
                <p className={styles.description}>Lorem ipsum dolor sit amet consectetur </p>
                <AddToCartButton id={1} />
            </div>

            <div className={styles.thirdInfo}>
                <p className={styles.thirdInfoText}>215 гр.</p>
                <p className={styles.thirdInfoText}>/</p>
                <p className={styles.thirdInfoText}>300 ккал.</p>
            </div>
        </div>
    )
}