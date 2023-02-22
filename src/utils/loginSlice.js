import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
	name: "login",
	initialState: {
		visible: false,
	},
	reducers: {
		toggle: (state) => {
			state.visible = !state.visible;
		},
	},
});
export const { toggle } = loginSlice.actions;
export default loginSlice.reducer;
