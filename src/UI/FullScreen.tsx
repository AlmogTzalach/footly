import React from 'react';

interface Props {
	children: React.ReactNode;
}

const FullScreen: React.FC<Props> = ({ children }) => {
	return <div className='min-h-screen'>{children}</div>;
};

export default FullScreen;
