import axios from "axios";

const productsApi = axios.create({
  baseURL: "http://localhost:4000/panaderia",
});

export const getProductsApi = async () => {
  const res = await productsApi.get();
  return res.data;
};
