import { useState, useLayoutEffect } from 'react';

export const useScrollPos = () => {
	const [scrollPos, setScrollPos] = useState(0);

	useLayoutEffect(() => {
		const handleScroll = () => {
			setScrollPos(window.pageYOffset);
		};
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', handleScroll);
		}
		return () => {
			if (typeof window !== 'undefined') {
				window.removeEventListener('scroll', handleScroll);
			}
		};
	}, []);
	return scrollPos;
};
