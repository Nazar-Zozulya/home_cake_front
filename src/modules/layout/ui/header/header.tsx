import { Link } from "react-router-dom"
import styles from "./header.module.css"
import { NavigationButton } from "../../../../ui/navigationButton"
import { useCartStore } from "../../../cart"
import { useModalManagerStore } from "../../../../store"

export function Header() {
	const openModal = useModalManagerStore((state) => state.openModal)

	return (
		<div className={styles.container} id="header">
			{/* <img src="/assets/images/bg.jpg" alt="" className={styles.bgImage} />   bg image */}
			<div className={styles.navigationBlock}>
				<div className={styles.pageNavigation}>
					<NavigationButton
						variant="big"
						title="Home Cake"
						onClick={() => {
							document.getElementById("header")?.scrollIntoView({
								behavior: "smooth",
								block: "center",
							})
						}}
					/>
					<div className={styles.navigationLinks}>
						<NavigationButton
							title="Новинки"
							onClick={() => {
								document
									.getElementById("newProductsBlock")
									?.scrollIntoView({
										behavior: "smooth",
										block: "center",
									})
							}}
						/>
						<NavigationButton
							title="Наші переваги"
							onClick={() => {
								document
									.getElementById("usBenefitsBlock")
									?.scrollIntoView({
										behavior: "smooth",
										block: "center",
									})
							}}
						/>
						<NavigationButton
							title="Асортимент"
							onClick={() => {
								document
									.getElementById("assortmentBlock")
									?.scrollIntoView({
										behavior: "smooth",
										block: "center",
									})
							}}
						/>
						<NavigationButton
							title="Про нас"
							onClick={() => {
								document
									.getElementById("aboutUsBlock")
									?.scrollIntoView({
										behavior: "smooth",
										block: "center",
									})
							}}
						/>
					</div>
				</div>
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

			<div className={styles.logoBlock}>
				<img
					src="/assets/images/logo.png"
					alt="Logo"
					className={styles.logo}
				/>
				<p className={styles.logoText}>Home Cake</p>
			</div>
		</div>
	)
}
