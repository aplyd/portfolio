import { useLayoutEffect, useState } from 'react';

const useWindowWidth = () => {
	const [width, setWidth] = useState();
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
	}, []);

	return [width];
};

export default useWindowWidth;
