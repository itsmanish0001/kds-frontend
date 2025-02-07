import { configureStore } from "@reduxjs/toolkit";
import fetchedDataSlice from "./reducers/FetchedData";

const store = configureStore({
    reducer: {
      products: fetchedDataSlice.reducer,
    }
  });
export default store;