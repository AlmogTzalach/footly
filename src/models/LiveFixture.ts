import Fixture from './Fixture'
import League from './League'
import Teams from './Teams'
import Event from './Event'

interface LiveFixture {
	fixture: Fixture;
	league: League;
	teams: Teams;
	goals: {
		home: number;
		away: number;
	};
	score: {};
	events: Event[];
}

export default LiveFixture