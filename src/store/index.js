import axios from "axios";
import { create } from "zustand";

const useStore = create((set) => ({
  data: [],
  filterData: [],
  searchQuery: "",
  error: null,
  loading: false,
  characterDetail: null,
  locationDetail: null,
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
  fetchCharacterDetail: async (id) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      set({ characterDetail: response.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  fetchLocationDetail: async (id) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/location/${id}`
      );
      set({ locationDetail: response.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
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
