import { useState, useLayoutEffect } from 'react';

export const useScrollToHideNav = setVisible => {
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [currScrollPos, setCurrScrollPos] = useState(0);

	useLayoutEffect(() => {
		const windowGlobal = typeof window !== 'undefined' && window;

		const handleScroll = () => {
			setCurrScrollPos(windowGlobal.pageYOffset);

			if (currScrollPos > 20 && prevScrollPos < currScrollPos) {
				setVisible(false);
			} else {
				setVisible(true);
			}
			setPrevScrollPos(currScrollPos);
		};

		windowGlobal.addEventListener('scroll', handleScroll);

		return () => {
			windowGlobal.removeEventListener('scroll', handleScroll);
		};
	}, [currScrollPos, prevScrollPos, setVisible]);
};
