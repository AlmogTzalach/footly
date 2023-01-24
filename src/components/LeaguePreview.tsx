import React from 'react';
import { useDispatch } from 'react-redux';
import { leagueActions } from '../store/league-slice';
import Card from '../UI/Card';
import League from '../models/League';

const LeaguePreview: React.FC<{ league: League }> = props => {
	const dispatch = useDispatch();

	const selectLeagueHandler = () => {
		dispatch(leagueActions.selectLeague(id));
	};

	const { name, logo, id, flag, country } = props.league;
	return (
		<Card className={'bg-amber-400 cursor-pointer'}>
			<li className='flex flex-col h-full rounded-md text-gray-100' onClick={selectLeagueHandler}>
					<div className='container flex justify-center py-2 bg-amber-600 mb-2 rounded-t-md'>
						{flag ? (
							<img
								className='px-2 w-12 max-h-12'
								src={flag}
								alt={`${country}'s flag`}
							/>
						) : null}
						<p className='px-2'>{country}</p>
					</div>
					<div className='container flex justify-center items-center h-full mb-2'>
						{logo ? (
							<img
								className='px-2 w-20 max-h-20'
								src={logo}
								alt={`${name}'s logo`}
							/>
						) : null}
						<p className='px-2'>{name}</p>
					</div>
			</li>
		</Card>
	);
};

export default LeaguePreview;
