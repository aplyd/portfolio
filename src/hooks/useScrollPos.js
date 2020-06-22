import { useState, useLayoutEffect } from 'react';

let defaultScrollPos;

if (typeof window !== `undefined`) {
	defaultScrollPos = window.pageYOffset;
}

export const useScrollPos = () => {
	const [scrollPos, setScrollPos] = useState(defaultScrollPos);

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
