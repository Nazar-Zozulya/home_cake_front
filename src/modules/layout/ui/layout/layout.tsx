import { Outlet } from "react-router-dom"
import { Footer } from "../footer"
import { Header } from "../header"
import styles from "./layout.module.css"
import { CartModal } from "../../../cart/ui/cartModal"
import { useModalManagerStore } from "../../../../store"

export function Layout() {
	const activeModal = useModalManagerStore((state) => state.activeModal)

	return (
		<div className={styles.container}>
			<Header />

			<div className={styles.main}>
				<Outlet />
			</div>

			<Footer />


			{activeModal === 'cart' && <CartModal />}
            {/* {activeModal === 'selfOrder' && <SelfOrderModal />}
            {activeModal === 'order' && <OrderModal />}
            {activeModal === 'verify' && <SuccessModal />}
            {activeModal === 'error' && <ErrorModal />} */}
		</div>
	)
}
