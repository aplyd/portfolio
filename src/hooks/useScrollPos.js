import { useState, useLayoutEffect } from 'react';

export const useScrollPos = () => {
	const [scrollPos, setScrollPos] = useState(0);

	useLayoutEffect(() => {
		const handleScroll = () => {
			const scroll =
				typeof window !== `undefined` ? window.pageYOffset : 0;
			setScrollPos(scroll);
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return scrollPos;
};
