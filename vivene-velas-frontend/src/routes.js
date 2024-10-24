import React from "react";
import Dashboard from "./pages/dashboard/Dashboard";
import Estoque from "./pages/estoque/Estoque";
import Vela from "./pages/vela/Vela";
import Calendario from "./pages/calendario/Calendario";
import Login from './pages/login/Login'
import Cadastro from './pages/cadastro/Cadastro'
import CadastroVelas from "./pages/cadastrovelas/CadastroVelas";
import CadastroPedidos from "./pages/cadastropedidos/CadastroPedidos";
import Pedidos from "./pages/pedidos/Pedidos";
import CadastroLotes from "./pages/cadastrolote/CadastroLote";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function Rotas() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/vela" element={<Vela />} />
                    <Route path="/estoque" element={<Estoque />} />
                    <Route path="/calendario" element={<Calendario />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/cadastro-velas" element={<CadastroVelas />} />
                    <Route path="/cadastro-pedidos" element={<CadastroPedidos />} />
                    <Route path="/pedidos" element={<Pedidos />} />
                    <Route path="/cadastro-lote" element={<CadastroLotes/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Rotas;