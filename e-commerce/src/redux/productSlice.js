import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    loading: false,

    search: '',
    category: 'all',
    sort: ''
  },
  reducers: {
    fetchStart(state) {
      state.loading = true;
    },
    fetchSuccess(state, action) {
      state.loading = false;
      state.products = action.payload;
    },
    fetchFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    clearFilters(state) {
      state.search = '';
      state.category = 'all';
      state.sort = '';
    }
  }
});

export const { fetchStart, fetchSuccess, fetchFailure, setSearch, setCategory, setSort, clearFilters } = productSlice.actions;

export default productSlice.reducer;
