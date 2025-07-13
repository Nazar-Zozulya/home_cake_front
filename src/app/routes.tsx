import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../modules/layout";
import { MainPage } from "../pages/mainPage";




export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route path="/" element={<MainPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}