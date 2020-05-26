import { useState, useLayoutEffect } from 'react';

export const useScrollPos = () => {
	const [scrollPos, setScrollPos] = useState(0);

	useLayoutEffect(() => {
		const handleScroll = () => {
			setScrollPos(window.pageYOffset);
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return scrollPos;
};
