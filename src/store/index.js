import axios from "axios";
import { create } from "zustand";

const useStore = create((set) => ({
  data: [],
  filterData: [],
  searchQuery: "",
  error: null,
  loading: false,
  fetchData: async (url) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(url);
      set({ data: response.data.results, loading: false });
      set({ filterData: response.data.results });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
  setSearchQuery: (query) => {
    set({ searchQuery: query });
  },

  setFilterData: (query) => {
    set((state) => {
      const filtered = state.data.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      return { filterData: filtered };
    });
  },
}));

export default useStore;
