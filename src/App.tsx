import { Route, Routes } from 'react-router-dom';
import { useEffect, useCallback } from 'react';
import MainHeader from './components/MainHeader';
import About from './pages/About';
import Home from './pages/Home';
import LeagueList from './components/LeagueList';
import FixtureList from './components/FixtureList';
import FixtureDetails from './components/FixtureDetails';
import FullScreen from './UI/FullScreen';
import League from './models/League';
import LiveFixture from './models/LiveFixture';
import { useAppSelector } from './hooks/redux-hooks';
import { httpReq } from './services/http-service';
import { useDispatch } from 'react-redux';
import { leagueActions } from './store/league-slice';
import { fixtureActions } from './store/fixture-slice';
// import { DEMO_FIXTURE } from './demo-data';
import MainFooter from './components/MainFooter';

const App = () => {
	const dispatch = useDispatch();
	const leagues = useAppSelector(state => state.league.leagues);
	const selectedLeagueId = useAppSelector(state => state.league.currLeagueId);
	const selectedFixture = useAppSelector(state => state.fixture.currFixture);
	const liveFixtures = useAppSelector(state => state.fixture.liveFixtures);

	const fetchFixtures = useCallback(async () => {
		const allLiveFixtures: LiveFixture[] = await httpReq('fixtures', {
			live: 'all',
		});

		dispatch(fixtureActions.setLiveFixtures(allLiveFixtures));

		const leagueNames: string[] = [];
		const liveLeagues: League[] = allLiveFixtures.reduce(
			(acc: League[], fixture: LiveFixture) => {
				if (!leagueNames.includes(fixture.league.name)) {
					acc.push(fixture.league);
					leagueNames.push(fixture.league.name);
				}
				return acc;
			},
			[]
		);

		dispatch(leagueActions.setLeagues(liveLeagues));
	}, [dispatch]);

	// const fetchFixtures = useCallback(async () => {
	// 	dispatch(fixtureActions.setLiveFixtures([DEMO_FIXTURE]));

	// 	dispatch(leagueActions.setLeagues([DEMO_FIXTURE.league]));
	// }, [dispatch]);

	useEffect(() => {
		fetchFixtures();
	}, [fetchFixtures]);

	let content = <LeagueList leagues={leagues} />;

	if (selectedLeagueId)
		content = (
			<FixtureList fixtures={liveFixtures} leagueId={selectedLeagueId} />
		);

	if (selectedFixture) content = <FixtureDetails fixture={selectedFixture} />;

	if (!leagues?.length)
		content = (
			<section className='flex flex-col items-center'>
				<p className='text-xl sm:text-2xl text-gray-800 mb-2'>
					Here are all the leagues which currently have live fixtures being
					played.
				</p>
				<p className='text-xl sm:text-2xl text-gray-800 mb-8'>
					Select a league to view all of its fixtures:
				</p>
				<p className='text-2xl text-gray-600'>
					There are no live games being played right now.
				</p>
				<p className='text-2xl text-gray-600'>Try and check back later.</p>
			</section>
		);
	return (
		<div className='bg-amber-100 text-zinc-800 min-w-full'>
			<MainHeader />
			<FullScreen>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/fixtures' element={content} />
					<Route path='/about' element={<About />} />
				</Routes>
			</FullScreen>
			<MainFooter />
		</div>
	);
};

export default App;
