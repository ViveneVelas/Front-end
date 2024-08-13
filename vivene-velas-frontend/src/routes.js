import React from "react";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard"
import Login from "./pages/login/LogIn"
import SignUp from "./pages/signUp/SignUp"

import { BrowserRouter, Routes, Route } from "react-router-dom";

function Rotas() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signUp" element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Rotas;