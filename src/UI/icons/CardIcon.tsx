import React from 'react';

interface Props {
	className: string;
}

const CardIcon: React.FC<Props> = ({ className }) => {
	return (
		<svg
			className={className}
			xmlns='http://www.w3.org/2000/svg'
			width='800'
			height='800'
			viewBox='0 0 1000 1000'
		>
			<path d='M775 286L548 154q-20-11-43-5t-34 26L204 637q-12 20-6 42.5t27 34.5l227 132q20 11 43 5t34-26l267-462q12-20 6-42.5T775 286z'></path>
		</svg>
	);
};

export default CardIcon;
