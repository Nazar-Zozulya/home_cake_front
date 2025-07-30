import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "../modules/layout"
import { MainPage } from "../pages/mainPage"
import { AssortmentPage } from "../pages/assortmentPage/page"
import { ProductPage } from "../pages/productPage/page"
import { OrderPage } from "../pages/orderPage"

export function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<MainPage />} />
				</Route>
				<Route path="/" element={<Layout variant="small" />}>
					<Route path="/all" element={<AssortmentPage />} />
					<Route path="/:id" element={<ProductPage />} />
					<Route path="/:email/:token/cart" element={<OrderPage />}/>
				</Route>

				<Route path="*" element={<h1>Not Found</h1>} />
			</Routes>
		</BrowserRouter>
	)
}
