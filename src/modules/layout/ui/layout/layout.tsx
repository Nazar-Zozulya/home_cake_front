import { useEffect, useRef, useState } from "react"
import { Header } from "../header"
import { Footer } from "../footer"
import { Outlet } from "react-router-dom"
import styles from "./layout.module.css"
import { CartModal } from "../../../cart/ui/cartModal"
import { useModalManagerStore } from "../../../../store"
import { SmallHeader } from "../smallHeader"
import { SelfOrderModal } from "../../../selfOrder"
import { OrderModal } from "../../../cart"

export function Layout(props: { variant?: "default" | "small" }) {
	const activeModal = useModalManagerStore((state) => state.activeModal)
	const { variant = "default" } = props
	const [isScroll, setIsScroll] = useState(false)

	const headerRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		if (!headerRef.current) return

		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting) {
					setIsScroll(true)
				} else {
					setIsScroll(false)
				}
			},
			{ root: null, threshold: 0 }
		)

		observer.observe(headerRef.current)

		return () => observer.disconnect()
	}, [])

	return (
		<div className={styles.container}>
			{variant === "default" && <Header ref={headerRef} />}
			{variant === "small" && <SmallHeader />}

			<div className={styles.main}>
				<Outlet />
			</div>

			<Footer />

			{isScroll && (
				<div className={styles.scrollUp}>
					<button
						className={styles.scrollUpButton}
						onClick={() => {
							document.getElementById("header")?.scrollIntoView({
								behavior: "smooth",
								block: "center",
							})
						}}
					>
						↑
					</button>
				</div>
			)}

			{activeModal === "cart" && <CartModal />}
			{activeModal === "selfOrder" && <SelfOrderModal />}
			{activeModal === "order" && <OrderModal />}
		</div>
	)
}
