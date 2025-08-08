import { Link } from "react-router-dom"
import { NavigationButton } from "../../../../ui/navigationButton"
import styles from "./header.module.css"
import { useModalManagerStore } from "../../../../store"

export function SmallHeader() {
	const { openModal } = useModalManagerStore()

	return (
		<div className={styles.container}>
			<Link
				to={"/"}
				onClick={() => {
					window.scrollTo({ top: 100, behavior: "smooth" })
				}}
			>
				<NavigationButton variant="big" title="Home Cake" />
			</Link>

			<div className={styles.orderNavigation}>
				<NavigationButton
					title="Власне замовлення"
					onClick={() => {
						openModal("selfOrder")
					}}
				/>
				<NavigationButton
					title="Кошик"
					onClick={() => {
						openModal("cart")
					}}
				/>
			</div>
		</div>
	)
}
