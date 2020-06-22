import { useLayoutEffect } from 'react';

let defaultWidth;

if (typeof window !== 'undefined') {
	defaultWidth = window.innerWidth;
}

const useWindowWidth = setWidth => {
	useLayoutEffect(() => {
		const handleResize = () => {
			setWidth(defaultWidth);
		};

		handleResize();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [setWidth]);
};

export default useWindowWidth;
