import { Outlet } from "react-router-dom"
import { Footer } from "../footer"
import { Header } from "../header"
import styles from "./layout.module.css"
import { CartModal } from "../../../cart/ui/cartModal"
import { useModalManagerStore } from "../../../../store"
import { LayoutProps } from "./layout.types"
import { SmallHeader } from "../smallHeader"
import { SelfOrderModal } from "../../../selfOrder"
import { OrderModal } from "../../../cart"

export function Layout(props: LayoutProps) {
	const activeModal = useModalManagerStore((state) => state.activeModal)
	const { variant = 'default' } = props
	return (
		<div className={styles.container}>
			{ variant === 'default' && <Header /> }
			{ variant === 'small' && <SmallHeader /> }


			<div className={styles.main}>
				<Outlet />
			</div>

			<Footer />


			{activeModal === 'cart' && <CartModal />}
            {activeModal === 'selfOrder' && <SelfOrderModal />}
            {activeModal === 'order' && <OrderModal />}
            {/* {activeModal === 'verify' && <SuccessModal />}
            {activeModal === 'error' && <ErrorModal />} */}
		</div>
	)
}
