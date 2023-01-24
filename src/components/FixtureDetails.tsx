import React from 'react';
import LiveFixture from '../models/LiveFixture';
import EventList from './EventList';
import { fixtureActions } from '../store/fixture-slice';
import { useDispatch } from 'react-redux';
import BackButton from '../UI/icons/BackButton';

const FixtureDetails: React.FC<{ fixture: LiveFixture }> = ({ fixture }) => {
	const { home, away } = fixture.teams;
	const { referee, status } = fixture.fixture;
	const { goals, events } = fixture;

	const dispatch = useDispatch();

	const homeEvents = events.filter(event => event.team.id === home.id);
	const awayEvents = events.filter(event => event.team.id === away.id);

	const backButtonHandler = () => {
		dispatch(fixtureActions.selectFixture(null));
	};

	return (
		<>
			<BackButton goBack={backButtonHandler} />
			<section className=' container flex flex-col items-center text-center px-4 sm:px-0'>
				<p className='animate-pulse text-6xl text-slate-800 mb-4'>
					{status.elapsed + "'"}
				</p>
				<div className='flex flex-col items-center mb-4'>
					<div className='flex items-center'>
						<div className='flex flex-col items-center basis-1/3 sm:p-4'>
							<img
								className='w-30 sm:w-80'
								src={home.logo}
								alt={`${home.name}'s logo`}
							/>
							<p className='px-2 text-2xl sm:text-4xl mb-2'>
								{home.name}
							</p>
							<p className='px-2 text-2xl sm:text-4xl'>{goals.home}</p>
						</div>
						<p className='text-9xl basis-1/3'> - </p>
						<div className='flex flex-col items-center basis-1/3 sm:p-4'>
							<img
								className='w-30 sm:w-80'
								src={away.logo}
								alt={`${away.name}'s logo`}
							/>
							<p className='px-2 text-2xl sm:text-4xl mb-2'>
								{away.name}
							</p>
							<p className='px-2 text-2xl sm:text-4xl'>{goals.away}</p>
						</div>
					</div>
					{referee && <p className='mb-4 text-lg'>Referee: {referee}</p>}
					<div className='flex'>
						<EventList events={homeEvents} />
						<EventList events={awayEvents} />
					</div>
				</div>
			</section>
		</>
	);
};

export default FixtureDetails;
