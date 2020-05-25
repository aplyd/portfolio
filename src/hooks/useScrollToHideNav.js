import { useState, useLayoutEffect } from 'react';

export const useScrollToHideNav = setVisible => {
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [currScrollPos, setCurrScrollPos] = useState(0);

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
