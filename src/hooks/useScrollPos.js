import { useState, useLayoutEffect } from 'react';

export const useScrollPos = () => {
	const [scrollPos, setScrollPos] = useState(0);

	useLayoutEffect(() => {
		const windowGlobal = typeof window !== 'undefined' && window;
		const handleScroll = () => {
			setScrollPos(windowGlobal.pageYOffset);
		};

		windowGlobal.addEventListener('scroll', handleScroll);
		return () => {
			windowGlobal.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return scrollPos;
};
