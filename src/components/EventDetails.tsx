import React from 'react';
import Event from '../models/Event';
import FootballIcon from '../UI/icons/FootballIcon';
import SubstitutionIcon from '../UI/icons/SubstitutionIcon';
import CardIcon from '../UI/icons/CardIcon';

const EventDetails: React.FC<{ event: Event }> = ({ event }) => {
	let eventContent = null;

	switch (event.detail) {
		case 'Normal Goal':
			eventContent = (
				<li className='flex items-center text-lg mb-3'>
					<FootballIcon className='w-5 h-5 mr-2 flex-shrink-0 fill-green-600' />
					<p className='mr-3'>{event.player.name}</p>
					<p>{event.assist.name}</p>
					<p className='px-2'>{event.time.elapsed}'</p>
				</li>
			);
			break;
		case 'Own Goal':
			eventContent = (
				<li className='flex items-center text-lg mb-3'>
					<FootballIcon className='w-5 h-5 mr-2 flex-shrink-0 fill-red-600' />
					<p>{event.player.name} [OG]</p>
					<p className='px-2'>{event.time.elapsed}'</p>
				</li>
			);
			break;
		case 'Yellow Card':
			eventContent = (
				<li className='flex items-center text-lg mb-3'>
					<CardIcon
						className={
							'fill-yellow-300 stroke-black stroke-[7px] w-10 h-10'
						}
					/>
					<div className='flex'>
						<p>{event.player.name}</p>
						<p className='px-2'>{event.time.elapsed}'</p>
					</div>
				</li>
			);
			break;
		case 'Second Yellow Card':
			eventContent = (
				<li className='flex items-center text-lg mb-3'>
					<div className='flex'>
						<CardIcon
							className={
								'fill-yellow-300 stroke-black stroke-[7px] w-10 h-10 -translate-x-2'
							}
						/>
						<CardIcon
							className={
								'fill-yellow-300 stroke-black stroke-[7px] w-10 h-10 -translate-x-10'
							}
						/>
					</div>
					<div className='flex -translate-x-10'>
						<p>{event.player.name}</p>
						<p className='px-2'>{event.time.elapsed}'</p>
					</div>
				</li>
			);
			break;
		case 'Red Card':
			eventContent = (
				<li className='flex items-center text-lg mb-3'>
					<CardIcon
						className={
							'fill-red-700 stroke-black stroke-[7px] w-10 h-10'
						}
					/>
					<p>{event.player.name}</p>
					<p className='px-2'>{event.time.elapsed}'</p>
				</li>
			);
			break;
	}

	if (event.type === 'subst') {
		eventContent = (
			<li className='flex items-center text-lg mb-3'>
				<SubstitutionIcon
					className={'fill-red-700 stroke-black mr-2 stroke-[7px] w-6 h-6'}
				/>
				<p>{event.player.name}</p>
				<p className='px-2'>{event.time.elapsed}'</p>
			</li>
		);
	}

	return eventContent;
};

export default EventDetails;
