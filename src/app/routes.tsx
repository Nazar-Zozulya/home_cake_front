import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../modules/layout";




export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} >
                    
                </ Route>
            </Routes>
        </BrowserRouter>
    )
}