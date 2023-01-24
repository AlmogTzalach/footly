import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isMenuOpen: false,
};

const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		onCloseMenu: state => {
			state.isMenuOpen = false;
		},

		onOpenMenu: state => {
			state.isMenuOpen = true;
		},
	},
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
