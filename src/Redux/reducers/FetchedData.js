import { createSlice } from "@reduxjs/toolkit";


const fetchedDataSlice = createSlice({
    name: "products",
    initialState: {
      items: [], 
      loading: false,
    },
    reducers: {
      setProducts: (state, action) => {
        state.items = action.payload;
      },
      deleteProduct: (state, action) => {
        state.items = state.items.filter((product) => product._id !== action.payload);
      },
      setLoading: (state, action) => {
        state.loading = action.payload;
      },
      addProduct: (state, action) => {
        state.items.push(action.payload);
      },
    }
})


export default fetchedDataSlice;
export const {setProducts, deleteProduct, setLoading, addProduct } = fetchedDataSlice.actions;

