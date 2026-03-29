import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { MainLayout } from "../layouts/MainLayout";
import { LoginPage } from "../pages/LoginPage";

export function MyRoutes() {

    return (

        <BrowserRouter>
            <Routes>

                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                </Route>
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    )
}