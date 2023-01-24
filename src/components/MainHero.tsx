import { NavLink } from 'react-router-dom';
import Goalkeeper from '../UI/icons/Goalkeeper';

const MainHero = () => {
	return (
		<div className='flex flex-col-reverse items-center px-8 xl:flex-row'>
			<div className='flex flex-col items-center text-center text-gray-700'>
				<p className='text-lg font-bold md:text-5xl'>
					Footly is the best place to look for live games from all over the
					world.
				</p>
				<p className='text-lg md:text-2xl'>
					Feeling the football fever but not sure what fixtures are
					currently being played?
				</p>
				<p className='text-lg md:text-2xl'>Footly's here for you!</p>
				<p className='text-lg md:text-2xl mb-4'>
					Take a look at all the football games being played all over the
					globe, including their scores and stats, and catch up with
					your favorite teams.
				</p>
				<NavLink
					className='text-lg md:text-xl rounded-md p-2 bg-amber-600 text-gray-100 mb-4'
					to='/fixtures'
				>
					Get Started
				</NavLink>
			</div>
			<div>
				<Goalkeeper className={'w-[250px] h-[250px] sm:w-[500px] sm:h-[500px] xl:w-[800px] xl:h-[800px]'} />
			</div>
		</div>
	);
};

export default MainHero;
