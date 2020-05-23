import { useLayoutEffect } from 'react';

const useWindowWidth = setWidth => {
	useLayoutEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth);
		};
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [setWidth]);
};

export default useWindowWidth;
