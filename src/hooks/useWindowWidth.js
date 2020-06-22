import { useLayoutEffect } from 'react';

const useWindowWidth = setWidth => {
	useLayoutEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth);
		};
		if (window !== 'undefined') {
			handleResize();
			window.addEventListener('resize', handleResize);
		}
		return () => {
			if (window !== 'undefined') {
				window.removeEventListener('resize', handleResize);
			}
		};
	}, [setWidth]);
};

export default useWindowWidth;
