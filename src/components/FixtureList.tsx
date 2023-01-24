import FixturePreview from './FixturePreview';
import LiveFixture from '../models/LiveFixture';
import React from 'react';
import { useDispatch } from 'react-redux';
import { leagueActions } from '../store/league-slice';
import BackButton from '../UI/icons/BackButton';

const FixtureList: React.FC<{
	fixtures: LiveFixture[] | null;
	leagueId: number;
}> = props => {
	const dispatch = useDispatch();

	const backButtonHandler = () => {
		dispatch(leagueActions.selectLeague(null));
	};

	const leagueFixtures = props.fixtures?.filter(
		(fixture: LiveFixture) => fixture.league.id === props.leagueId
	);

	return (
		<>
			<BackButton goBack={backButtonHandler} />
			<ul className='grid gap-4 p-20 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
				{leagueFixtures?.map((fixture: LiveFixture) => (
					<FixturePreview fixture={fixture} key={fixture.fixture.id} />
				))}
			</ul>
		</>
	);
};

export default FixtureList;
