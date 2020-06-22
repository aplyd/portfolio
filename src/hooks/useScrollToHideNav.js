import { useState, useLayoutEffect } from 'react';

let defaultScrollPos;

if (typeof window !== 'undefined') {
	defaultScrollPos = window.pageYOffset;
}

export const useScrollToHideNav = setVisible => {
	const [prevScrollPos, setPrevScrollPos] = useState(defaultScrollPos);
	const [currScrollPos, setCurrScrollPos] = useState(defaultScrollPos);

	useLayoutEffect(() => {
		const handleScroll = () => {
			setCurrScrollPos(window.pageYOffset);

			if (currScrollPos > 20 && prevScrollPos < currScrollPos) {
				setVisible(false);
			} else {
				setVisible(true);
			}
			setPrevScrollPos(currScrollPos);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [currScrollPos, prevScrollPos, setVisible]);
};
