import React from 'react';
import Event from '../models/Event';
import EventDetails from './EventDetails';

const EventList: React.FC<{ events: Event[] }> = ({ events }) => {
	return (
		<ul className='sm:p-4 basis-1/2'>
			{events.map((event: Event) => (
				<EventDetails event={event} key={event.time.elapsed + event.team.id * Math.random()}/>
			))}
		</ul>
	);
};

export default EventList;
