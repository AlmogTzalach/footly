import React from 'react';

interface Props {
	onOpen: Function;
	onClose: Function;
	isOpen: Boolean;
}

const AnimatedMenuIcon: React.FC<Props> = ({ onClose, onOpen, isOpen }) => {
	const menuChangeHandler = (ev: React.MouseEvent<HTMLDivElement>) => {
		ev.currentTarget.classList.contains('open') ? onClose() : onOpen();

		// ev.currentTarget.classList.toggle('open');
	};
	return (
		<div
			className={
				`inline-block cursor-pointer group sm:hidden ${isOpen ? 'open' : ''}`
			}
			onClick={menuChangeHandler}
		>
			<div className='bar1 w-[35px] h-[5px] bg-zinc-700 my-[6px] transition-transform group-[.open]:translate-y-[11px] group-[.open]:-rotate-45'></div>
			<div className='bar2 w-[35px] h-[5px] bg-zinc-700 my-[6px] transition-transform group-[.open]:opacity-0'></div>
			<div className='bar3 w-[35px] h-[5px] bg-zinc-700 my-[6px] transition-transform group-[.open]:-translate-y-[11px] group-[.open]:rotate-45'></div>
		</div>
	);
};

export default AnimatedMenuIcon;
