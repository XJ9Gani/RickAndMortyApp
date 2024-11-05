import axios from "axios";
import { create } from "zustand";

const useStore = create((set) => ({
  data: [],
  error: null,
  loading: false,
  fetchData: async (url) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(url);
      set({ data: response.data.results, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default useStore;
