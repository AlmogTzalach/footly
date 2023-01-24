import React from 'react';

interface Props {
	onClose: Function;
}

const Backdrop: React.FC<Props> = ({ onClose }) => {
	const closeMenuHandler = () => {
		onClose();
	};

	return <div className='fixed top-0 left-0 w-full h-screen z-20 bg-black opacity-50' onClick={closeMenuHandler}></div>;
};

export default Backdrop;
