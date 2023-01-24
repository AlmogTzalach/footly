import ReactLogo from '../UI/icons/ReactLogo';
import TailwindLogo from '../UI/icons/TailwindLogo';
import ReduxLogo from '../UI/icons/ReduxLogo';
import ReactRouterLogo from '../UI/icons/ReactRouter';
import Card from '../UI/Card';

const About = () => {
	return (
		<section className='flex flex-col items-center text-center text-2xl sm:text-4xl'>
			<p className='mb-4'>
				This site was built for educational purposes using{' '}
				<a className='underline' href='https://www.api-football.com/'>
					API-FOOTBALL's
				</a>{' '}
				free plan.
			</p>
			<p className='mb-4'>
				The fixtures data is not live, and is only updated on refresh.
			</p>
			<p className='mb-4'>
				This site was built with the following technologies:
			</p>
			<div className='flex flex-col'>
				<div className='flex'>
					<Card className='p-4 m-4 bg-orange-100'>
						<a href='https://reactjs.org/' title='React'>
							<ReactLogo className='w-28 sm:w-48 h-28 sm:h-48' />
						</a>
					</Card>
					<Card className='p-4 m-4 bg-orange-100'>
						<a href='https://tailwindcss.com/' title='Tailwind'>
							<TailwindLogo className='w-28 sm:w-48 h-28 sm:h-48' />
						</a>
					</Card>
				</div>
				<div className='flex'>
					<Card className='p-4 m-4 bg-orange-100'>
						<a href='https://react-redux.js.org/' title='Redux'>
							<ReduxLogo className='w-28 sm:w-48 h-28 sm:h-48' />
						</a>
					</Card>
					<Card className='p-4 m-4 bg-orange-100'>
						<a
							href='https://reactrouter.com/en/main'
							title='React Router'
						>
							<ReactRouterLogo className='w-28 sm:w-48 h-28 sm:h-48' />
						</a>
					</Card>
				</div>
			</div>
		</section>
	);
};

export default About;
