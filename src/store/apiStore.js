import axios from "axios";
import { create } from "zustand";

const apiStore = (set, get) => ({
  products: [],
  error: null,
  fetchProducts: async () => {
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      set(() => ({
        products: data,
        error: null,
      }));
    } catch (error) {
      set(() => ({
        error,
      }));
    }
  },
});

const useApi = create(apiStore);
export default useApi;
