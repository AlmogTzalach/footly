import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import League from '../models/League';

interface leagueState {
	currLeagueId: number | null;
	leagues: League[] | null;
}

const initialState: leagueState = {
	currLeagueId: null,
	leagues: null,
};

const leagueSlice = createSlice({
	name: 'league',
	initialState,
	reducers: {
		setLeagues: (state, action: PayloadAction<League[]>) => {
			state.leagues = action.payload;
		},
		selectLeague: (state, action: PayloadAction<number | null>) => {
			state.currLeagueId = action.payload;
		},
	},
});

export const leagueActions = leagueSlice.actions;

export default leagueSlice.reducer;
