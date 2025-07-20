import { BenefitCard } from '../benefitCard'
import styles from './block.module.css'




export function UsBenefitsBlock() {
    return (
        <div className={styles.container} id="usBenefitsBlock">
            <img className={styles.image} src="assets/images/usBefenits.jpg" alt="" />
            <div className={styles.block}>
                <p className={styles.title}>Наші переваги</p>
                <div className={styles.befenitsBlock}>
                    <BenefitCard
                        title="Швидка доставка"
                        description="Доставляємо замовлення в найкоротші терміни по всій Україні."
                        imageUrl="/assets/images/befenitIcon.png"
                    />
                    <BenefitCard
                        title="Якісні інгредієнти"
                        description="Використовуємо тільки свіжі та натуральні продукти."
                        imageUrl="/assets/images/befenitIcon.png"
                    />
                    <BenefitCard
                        title="Індивідуальний підхід"
                        description="Враховуємо побажання кожного клієнта при створенні замовлення."
                        imageUrl="/assets/images/befenitIcon.png"
                    />
                    <BenefitCard
                        title="Гарантія смаку"
                        description="Наші торти завжди смачні та свіжі, що підтверджують відгуки клієнтів."
                        imageUrl="/assets/images/befenitIcon.png"
                    />
                </div>
            </div>
        </div>
    )
}