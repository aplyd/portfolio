import { useLayoutEffect } from 'react';

const useWindowWidth = setWidth => {
	useLayoutEffect(() => {
		const windowGlobal = typeof window !== 'undefined' && window;
		const handleResize = () => {
			setWidth(windowGlobal.innerWidth);
		};

		handleResize();
		windowGlobal.addEventListener('resize', handleResize);

		return () => {
			windowGlobal.removeEventListener('resize', handleResize);
		};
	}, [setWidth]);
};

export default useWindowWidth;
