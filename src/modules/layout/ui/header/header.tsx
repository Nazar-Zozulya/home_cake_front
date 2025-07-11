import { Link } from "react-router-dom"
import styles from "./header.module.css"

export function Header() {
	return (
		<div className={styles.container}>
			<div className={styles.navigationBlock}>
                <div className={styles.pageNavigation}>
                    <button className={styles.navButton}>Home Cake</button>
                    <button className={styles.navButton}>Новинки</button>
                    <button className={styles.navButton}>Наші переваги</button>
                    <button className={styles.navButton}>Асортимент</button>
                    <button className={styles.navButton}>Про нас</button>
                </div>
                <div className={styles.orderNavigation}>
                    <button className={styles.navButton}>Власне замовлення</button>
                    <button className={styles.navButton}>Кошик</button>
                </div>
            </div>

			<div className={styles.logoBlock}>
                <img src="/logo.png" alt="Logo" className={styles.logo} />
                <p className={styles.logoText}>Home Cake</p>
            </div>
		</div>
	)
}
