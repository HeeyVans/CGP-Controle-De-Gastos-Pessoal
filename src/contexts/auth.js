import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api, doingLogin } from "../services/axios.js";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loggedUser = localStorage.getItem("token");

    if (loggedUser) {
      setToken(JSON.parse(loggedUser));
    }

    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const response = await doingLogin(email, password);
      localStorage.setItem("token", JSON.stringify(response.data.Token));
      setToken(response.data.Token);
      navigate("/inicio");
    } catch (err) {
      alert("Usuário Não Encontrado");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("UserData");
    delete api.defaults.headers.common["authorization"];
    setToken(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ authenticated: !!token, token, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
