import React from 'react';
import LinkMap from '../models/LinkMap';
import { NavLink } from 'react-router-dom';

interface Props {
	links: LinkMap[];
	onClose: Function;
}

const MobileMenuNav: React.FC<Props> = ({ links, onClose }) => {
	const linkSelectHandler = () => {
		onClose();
	};

	const linkCmps = links.map((link: LinkMap) => (
		<NavLink
			className='p-10 text-3xl bg-orange-400 opacity-90 border border-slate-700'
			to={link.path}
			onClick={linkSelectHandler}
			key={link.path}
		>
			{link.name}
		</NavLink>
	));

	return (
		<nav className='flex flex-col absolute left-0 text-center min-w-full translate-y-2'>
			{linkCmps}
		</nav>
	);
};

export default MobileMenuNav;
