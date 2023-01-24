import React from 'react';

interface Props {
	children: React.ReactNode;
	className: string
}

const Card: React.FC<Props> = ({ children, className }) => {
	return (
		<div
			className={`container rounded-md border-1 border-slate-500 shadow + ${className}`}
		>
			{children}
		</div>
	);
};

export default Card;
