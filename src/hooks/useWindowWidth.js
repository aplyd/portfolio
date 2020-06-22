import { useLayoutEffect } from 'react';

const useWindowWidth = setWidth => {
	useLayoutEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth);
		};
		if (typeof window !== 'undefined') {
			handleResize();
			window.addEventListener('resize', handleResize);
		}
		return () => {
			if (typeof window !== 'undefined') {
				window.removeEventListener('resize', handleResize);
			}
		};
	}, [setWidth]);
};

export default useWindowWidth;
