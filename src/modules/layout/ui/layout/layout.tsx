import { Outlet } from "react-router-dom"
import { Footer } from "../footer"
import { Header } from "../header"
import styles from "./layout.module.css"
import { ProductCard } from "../../../../components/productCard"

export function Layout() {
	return (
		<div className={styles.container}>
			<Header />

			<div className={styles.main}>
				<Outlet />
			</div>

			<Footer />
		</div>
	)
}
