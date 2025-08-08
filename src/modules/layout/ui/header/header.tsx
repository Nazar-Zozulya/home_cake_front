import { forwardRef } from "react"
import { NavigationButton } from "../../../../ui/navigationButton"
import { cartProductsToProducts, totalCount, useCartStore } from "../../../cart"
import { useModalManagerStore } from "../../../../store"
import { useProductContext } from "../../../product"
import styles from "./header.module.css"

function HeaderComponent(
	props: React.HTMLAttributes<HTMLDivElement>,
	ref: React.Ref<HTMLDivElement>
) {
	const openModal = useModalManagerStore((state) => state.openModal)
	const { cartItems } = useCartStore()
	const { products } = useProductContext()
	const cartProducts = cartProductsToProducts(cartItems ?? [], products)
	const totalCartCount = totalCount(cartProducts)

	return (
		<div ref={ref} className={styles.container} id="header" {...props}>
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
								document.getElementById("newProductsBlock")?.scrollIntoView({
									behavior: "smooth",
									block: "center",
								})
							}}
						/>
						<NavigationButton
							title="Наші переваги"
							onClick={() => {
								document.getElementById("usBenefitsBlock")?.scrollIntoView({
									behavior: "smooth",
									block: "center",
								})
							}}
						/>
						<NavigationButton
							title="Асортимент"
							onClick={() => {
								document.getElementById("assortmentBlock")?.scrollIntoView({
									behavior: "smooth",
									block: "center",
								})
							}}
						/>
						<NavigationButton
							title="Про нас"
							onClick={() => {
								document.getElementById("aboutUsBlock")?.scrollIntoView({
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
					<div className={styles.cartHelper}>
						<NavigationButton
							title="Кошик"
							onClick={() => {
								openModal("cart")
							}}
						/>
						<p className={styles.cartCounter}>
							{totalCartCount > 0 ? totalCartCount : undefined}
						</p>
					</div>
				</div>
			</div>

			<div className={styles.logoBlock}>
				<img src="/assets/images/logo.png" alt="Logo" className={styles.logo} />
				<p className={styles.logoText}>Home Cake</p>
			</div>
		</div>
	)
}

export const Header = forwardRef(HeaderComponent)
Header.displayName = "Header"
