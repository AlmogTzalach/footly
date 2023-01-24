import AnimatedMenuIcon from './icons/AnimatedMenuIcon';
import MobileMenuNav from './MobileMenuNav';
import Backdrop from './Backdrop';
import { createPortal } from 'react-dom';
import LinkMap from '../models/LinkMap';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../hooks/redux-hooks';
import { uiActions } from '../store/ui-slice';

interface Props {
	links: LinkMap[];
}

const MobileMenu: React.FC<Props> = ({ links }) => {
	const dispatch = useDispatch();
	const isMenuOpen = useAppSelector(state => state.ui.isMenuOpen);

	const openMenuHandler = () => {
		dispatch(uiActions.onOpenMenu());
	};

	const closeMenuHandler = () => {
		dispatch(uiActions.onCloseMenu());
	};

	const elPortal = document.getElementById('overlays') as HTMLElement;

	return (
		<section className='sm:hidden'>
			<AnimatedMenuIcon
				onClose={closeMenuHandler}
				onOpen={openMenuHandler}
				isOpen={isMenuOpen}
			/>
			{isMenuOpen && (
				<MobileMenuNav links={links} onClose={closeMenuHandler} />
			)}
			{isMenuOpen &&
				createPortal(<Backdrop onClose={closeMenuHandler} />, elPortal)}
		</section>
	);
};

export default MobileMenu;
