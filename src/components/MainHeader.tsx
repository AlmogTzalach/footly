import { NavLink } from 'react-router-dom';
import Logo from '../UI/Logo';
import MobileMenu from '../UI/MobileMenu';
import LinkMap from '../models/LinkMap';
import { useDispatch } from 'react-redux';
import { uiActions } from '../store/ui-slice';

const MainHeader = () => {
	const dispatch = useDispatch();

	const links: LinkMap[] = [
		{
			path: '/fixtures',
			name: 'Fixtures',
		},
		{
			path: '/about',
			name: 'About',
		},
	];

	const closeMenuHandler = () => {
		dispatch(uiActions.onCloseMenu());
	};

	return (
		<header className='flex items-center place-content-between p-2 sm:p-8 bg-amber-600 sticky top-0 z-30 mb-4'>
			<NavLink className='px-4' to='/' onClick={closeMenuHandler}>
				<Logo />
			</NavLink>
			<nav className='text-slate-200 text-2xl hidden sm:block	'>
				<NavLink className='px-4' to='/fixtures'>
					Fixtures
				</NavLink>
				<NavLink className='px-4' to='/about'>
					About
				</NavLink>
			</nav>
			<MobileMenu links={links} />
		</header>
	);
};

export default MainHeader;
