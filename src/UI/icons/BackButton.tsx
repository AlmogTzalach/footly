import React from 'react';

interface Props {
	goBack: Function;
}

const BackButton: React.FC<Props> = ({ goBack }) => {
	const goBackHandler = () => {
		goBack();
	};

	return (
		<section
			className='flex items-center group cursor-pointer'
			onClick={goBackHandler}
		>
			<svg
				className='group-hover:fill-orange-500'
				xmlns='http://www.w3.org/2000/svg'
				width='2.5rem'
				height='2.5rem'
				version='1.1'
				viewBox='0 0 72 72'
				xmlSpace='preserve'
			>
				<path d='M48.252 69.253a8.447 8.447 0 01-6.011-2.489L17.736 42.258a8.52 8.52 0 01-2.479-6.255 8.527 8.527 0 012.479-6.261L42.242 5.236a8.443 8.443 0 016.01-2.489c2.271 0 4.405.884 6.01 2.489 3.314 3.314 3.314 8.707 0 12.021L35.519 36l18.743 18.742c3.314 3.314 3.314 8.707 0 12.021a8.443 8.443 0 01-6.01 2.49zm0-62.506a4.474 4.474 0 00-3.182 1.317L21.038 32.57c-.891.893-.833 2.084-.833 3.355v.151c0 1.271-.058 2.461.833 3.353l24.269 24.506c.85.85 1.862 1.317 3.063 1.317 1.203 0 2.273-.468 3.123-1.317 1.755-1.755 1.725-4.61-.03-6.365L31.292 37.414a2 2 0 01-.007-2.828L51.438 14.43a4.507 4.507 0 00-.001-6.365 4.477 4.477 0 00-3.185-1.318z'></path>
			</svg>
			<p className='text-xl group-hover:translate-x-1 group-hover:text-orange-500 transition'>
				Back
			</p>
		</section>
	);
};

export default BackButton;
