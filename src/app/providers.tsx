import { ReactNode } from "react";
import { ProductContextProvider } from "../modules/product";





export function AppProviders({ children }: { children: ReactNode }) {
    return (
        <ProductContextProvider>
            {children}
        </ProductContextProvider>
    )
}