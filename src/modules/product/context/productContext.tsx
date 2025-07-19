import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react"
import { Product } from "../types/product"
import { Result } from "../../../types/result"

type ProductContextType = {
	products: Product[]
}

const initialValue: ProductContextType = {
	products: [],
}

const ProductContext = createContext<ProductContextType>(initialValue)

export function useProductContext() {
	return useContext(ProductContext)
}

interface ProductContextProviderProps {
	children: ReactNode
}

export function ProductContextProvider({ children }: ProductContextProviderProps) {
	const [products, setProducts] = useState<Product[]>([])

	useEffect(() => {
		async function fetchProducts() {
			try {
				const response = await fetch(
					`${process.env.REACT_APP_SERVER_URL}/api/products/all`
				)
				const result: Result<Product[]> = await response.json()

				if (result.status === "success") {
					setProducts(result.data)
				} else {
					console.error("Failed to fetch products:", result.message)
				}
			} catch (error) {
				console.error("Error fetching products:", error)
			}
		}

		fetchProducts()
	}, [])

	return (
		<ProductContext.Provider value={{ products }}>
			{children}
		</ProductContext.Provider>
	)
}
