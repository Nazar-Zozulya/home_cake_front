import { Link } from "react-router-dom"
import styles from "./header.module.css"
import { NavigationButton } from "../../../../ui/navigationButton"

export function Header() {
	return (
		<div className={styles.container}>
            {/* <img src="/assets/images/bg.jpg" alt="" className={styles.bgImage} />   bg image */}
			<div className={styles.navigationBlock}>
                <div className={styles.pageNavigation}>
                    <NavigationButton variant="big" title="Home Cake" onClick={() => {}} />
                    <div className={styles.navigationLinks}>
                        <NavigationButton title="Новинки" onClick={() => {}} />
                        <NavigationButton title="Наші переваги" onClick={() => {}} />
                        <NavigationButton title="Асортимент" onClick={() => {}} />
                        <NavigationButton title="Про нас" onClick={() => {}} />
                    </div>
                </div>
                <div className={styles.orderNavigation}>
                    <NavigationButton title="Власне замовлення" onClick={() => {}} />
                    <NavigationButton title="Кошик" onClick={() => {}} />
                </div>
            </div>

			<div className={styles.logoBlock}>
                <img src="/assets/images/logo.png" alt="Logo" className={styles.logo} />
                <p className={styles.logoText}>Home Cake</p>
            </div>
		</div>
	)
}
