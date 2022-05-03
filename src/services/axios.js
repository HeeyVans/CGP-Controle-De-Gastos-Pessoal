import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:4044/cgp",
});

export const doingLogin = async (email, password) => {
  return api.post("/login", { email, password });
};

export const createUser = async (nome, senha, data, email) => {
  const password = senha;
  const dat_nasc = data;
  return api.post("/users", { email, nome, password, dat_nasc });
};
