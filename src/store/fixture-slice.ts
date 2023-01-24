import LiveFixture from '../models/LiveFixture';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface fixtureState {
	currFixture: LiveFixture | null;
	liveFixtures: LiveFixture[] | null;
}

const initialState: fixtureState = {
	currFixture: null,
	liveFixtures: null,
};

const fixtureSlice = createSlice({
	name: 'fixture',
	initialState,
	reducers: {
		setLiveFixtures: (state, action: PayloadAction<LiveFixture[] | null>) => {
			state.liveFixtures = action.payload;
		},
		selectFixture: (state, action: PayloadAction<LiveFixture | null>) => {
			state.currFixture = action.payload;
		},
	},
});

export const fixtureActions = fixtureSlice.actions;

export default fixtureSlice.reducer;
