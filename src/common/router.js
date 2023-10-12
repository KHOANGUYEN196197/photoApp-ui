import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddEditPage from "../features/Photo/pages/addEdit";
import NotFound from "../components/notFound";
import Header from "../components/header";
import Login from "../features/Login/pages/Login";
import Logout from "../features/Login/pages/Logout";
import Register from "../features/Login/pages/Register";

//lazy-load
const Photo = React.lazy(() => import("../features/Photo/pages/main"));

const AppRouter = () => (
    <>
        <Suspense fallback={<div>Loading ...</div>}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/" element={<Photo />} />
                    <Route path="/photos/add" element={<AddEditPage />} />
                    <Route path="/photo/:photoId" element={<AddEditPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    </>
);

export default AppRouter;