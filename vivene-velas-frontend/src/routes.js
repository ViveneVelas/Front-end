import React from "react";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard"
import Login from "./pages/login/LogIn"
import SignUp from "./pages/signUp/SignUp"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpStep2 from "./pages/signUp/SignUpStep2";

function Rotas() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signUp" element={<SignUp />} />
                    <Route path="/signUpStep2" element={<SignUpStep2/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Rotas;