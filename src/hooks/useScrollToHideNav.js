import { useState, useLayoutEffect } from 'react';

export const useScrollToHideNav = setVisible => {
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [currScrollPos, setCurrScrollPos] = useState(0);

	useLayoutEffect(() => {
		const handleScroll = () => {
			setCurrScrollPos(window.pageYOffset);
			if (prevScrollPos > currScrollPos) {
				setVisible(true);
			} else {
				setVisible(false);
			}
			setPrevScrollPos(currScrollPos);
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [currScrollPos, prevScrollPos, setVisible]);
};
