import { IBenefitCardProps as Props } from "./card.types";
import styles from "./card.module.css"

export function BenefitCard(props: Props) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <p className={styles.title}>{props.title}</p>
                <p className={styles.description}>{props.description}</p>
            </div>
            <img className={styles.image} src={props.imageUrl} alt="" />
        </div>
    )
}