import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "./pages/landing-page/landing-page";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";
import Inicio from "./pages/inicio/Inicio";
import Relatorios from "./pages/relatorios/relatorios";
import Ajustes from "./pages/ajustes/ajustes";

import { AuthContext, AuthProvider } from "./contexts/auth";
import Cartao from "./pages/cartao/cartao";
import Categoria from "./pages/categorias/categorias";
import NovoGasto from "./pages/categorias/novoGasto";
import Sobre from "./pages/landing-page/sobre";
import Contato from "./pages/landing-page/contato";

export default function Router() {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);
    console.log(authenticated);
    if (loading) {
      return <div className="loading">Carregando...</div>;
    }

    if (!authenticated) {
      return <Navigate to="/" />;
    }

    return children;
  };

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route
            path="/inicio"
            element={
              <Private>
                <Inicio />
              </Private>
            }
          />
          <Route
            path="/sobre"
            element={
              <Sobre />
            }
          />
          <Route
            path="/contato"
            element={
              <Contato />
            }
          />
          <Route
            path="/cartao"
            element={
              <Private>
                <Cartao />
              </Private>
            }
          />
          <Route
            path="/categoria"
            element={
              <Private>
                <Categoria />
              </Private>
            }
          />
          <Route
            path="/gasto"
            element={
              <Private>
                <NovoGasto />
              </Private>
            }
          />
          <Route
            path="/relatorios"
            element={
              <Private>
                <Relatorios />
              </Private>
            }
          />
          <Route
            path="/ajustes"
            element={
              <Private>
                <Ajustes />
              </Private>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
