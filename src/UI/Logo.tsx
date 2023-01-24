import React from 'react';
import FootballSvg from './icons/FootballSvg';

const Logo = () => {
	return (
		<div className='flex items-center'>
			<FootballSvg />
			<p className='text-3xl pl-2 font-[BebasNeue] sm:text-5xl text-slate-200 tracking-widest'>footly</p>
		</div>
	);
};

export default Logo;
