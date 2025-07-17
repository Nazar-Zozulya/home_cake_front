import { NavigationButton } from "../../../../ui/navigationButton"
import styles from "./footer.module.css"

export function Footer() {
	return (
		<div className={styles.container}>
			<div className={styles.logo}>
				<img
					src="/assets/images/logo.png"
					alt="Logo"
					className={styles.logoImg}
				/>
				<p className={styles.logoText}>Home Cake</p>
			</div>
			<div className={styles.navigation}>
                <NavigationButton title="Головна" onClick={() => {}} variant="small" />
				<NavigationButton title="Новинки" onClick={() => {}} variant="small" />
				<NavigationButton title="Наші переваги" onClick={() => {}} variant="small" />
				<NavigationButton title="Асортимент" onClick={() => {}} variant="small" />
				<NavigationButton title="Про нас" onClick={() => {}} variant="small" />
			</div>
            <div className={styles.contacts}>
                <p className={styles.contactTitle}>Контакти</p>
                <div className={styles.contactBlock}>
                    {/* <img src="" alt="" className={styles.contactIcon} /> */}
                    <p className={styles.contactText}>+380 999999999</p>
                </div>
                <div className={styles.contactBlock}>
                    {/* <img src="" alt="" className={styles.contactIcon} /> */}
                    <p className={styles.contactText}>home_cake@gmail.com</p>
                </div>
            </div>
		</div>
	)
}
