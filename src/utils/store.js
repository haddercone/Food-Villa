import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import loginSlice from "./loginSlice";
const store = configureStore({
	reducer: {
		cart: cartSlice,
		login: loginSlice,
	},
});

export default store;

/**
 *  Crate Store:
 *  - configureStore() - imported from rtk (@reduxjs/toolkit)
 *
 *  Provided store to app:
 *  <Provider store = {store} /> // Provider imported from react-redux
 *
 *  Slice:
 *  CreateSlice - imported from rtk
 */
