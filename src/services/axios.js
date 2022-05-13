import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:4044/cgp",
  timeout: 400,
});

export const doingLogin = async (email, password) => {
  return api.post("/login", { email, password });
};

export const createUser = async (nome, senha, data, email) => {
  const password = senha;
  const dat_nasc = data;
  return api.post("/users", { email, nome, password, dat_nasc });
};

export const getUser = async () => {
  return api.get("/users");
};

export const cartãoUptade = async (id, nome, dat_ven) => {
  return api.put(`cartoes/${id}`, { nome, dat_ven });
};

export const cartãoCreate = async (nome, dat_ven) => {
  return api.post("/cartoes", { nome, dat_ven });
};

export const categoriaCreate = async (nome, valor_planejado, tipo, desc) => {
  desc = desc ? desc : "";
  valor_planejado = Number(valor_planejado);
  console.log(nome, valor_planejado, tipo, desc);
  return api.post("/categorias", { nome, valor_planejado, tipo, desc });
};

export const categoriaUptade = async (id, nome, valor_planejado, desc) => {
  desc = desc ? desc : "";
  valor_planejado = Number(valor_planejado);
  return api.put(`/categorias/${id}`, { nome, valor_planejado, desc });
};

export const getUserData = async () => {
  return api.get("/usersData");
};

export const uptadeUser = async (nome, password, dat_nasc) => {
  return api.put(`/users`, { nome, password, dat_nasc });
};
