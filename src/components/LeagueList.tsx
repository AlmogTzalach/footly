import LeaguePreview from './LeaguePreview';
import League from '../models/League';

const LeagueList: React.FC<{ leagues: League[] | null }> = props => {
	return (
		<section className='flex flex-col text-center'>
			<p className='text-xl sm:text-2xl text-gray-800 mb-2'>
				Here are all the leagues which currently have live fixtures being played.
			</p>
			<p className='text-xl sm:text-2xl text-gray-800'>
				Select a league to view all of its fixtures.
			</p>
			<ul className='grid gap-4 p-20 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
				{props.leagues?.map(league => (
					<LeaguePreview league={league} key={league.id} />
				))}
			</ul>
		</section>
	);
};

export default LeagueList;
