import { configureStore } from '@reduxjs/toolkit';
import leagueSlice from './league-slice';
import fixtureSlice from './fixture-slice';
import uiSlice from './ui-slice';

const store = configureStore({
	reducer: {
		league: leagueSlice,
		fixture: fixtureSlice,
		ui: uiSlice,
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
