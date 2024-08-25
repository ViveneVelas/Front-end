import React from "react";
import Dashboard from "./pages/dashboard/Dashboard";
import Estoque from "./pages/estoque/Estoque";
import Vela from "./pages/vela/Vela";
import Calendario from "./pages/calendario/Calendario";
import Login from './pages/login/Login'

import { BrowserRouter, Routes, Route } from "react-router-dom";

function Rotas() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/vela" element={<Vela />} />
                    <Route path="/estoque" element={<Estoque />} />
                    <Route path="/calendario" element={<Calendario />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Rotas;