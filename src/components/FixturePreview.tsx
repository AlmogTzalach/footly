import React from 'react';
import { useDispatch } from 'react-redux';
import { fixtureActions } from '../store/fixture-slice';
import Card from '../UI/Card';
import LiveFixture from '../models/LiveFixture';

const FixturePreview: React.FC<{ fixture: LiveFixture }> = props => {
	const dispatch = useDispatch();

	const selectFixtureHandler = () => {
		dispatch(fixtureActions.selectFixture(props.fixture));
	};

	const { home, away } = props.fixture.teams;
	return (
		<Card className={'flex justify-center p-4 bg-amber-500 text-slate-200 text-center cursor-pointer'}>
			<li className='flex' onClick={selectFixtureHandler}>
				<div className='flex flex-col justify-center content-center'>
					<img src={home.logo} alt={`${home.name}'s logo`} />
					<p className='px-2'>{home.name}</p>
				</div>
				<div className='flex flex-col justify-center text-center'>
					<img src={away.logo} alt={`${away.name}'s logo`} />
					<p className='px-2'>{away.name}</p>
				</div>
			</li>
		</Card>
	);
};

export default FixturePreview;
