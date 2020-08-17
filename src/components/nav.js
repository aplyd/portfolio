import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useScrollToHideNav } from '../hooks/useScrollToHideNav';
import { WiMoonAltWaxingCrescent4 } from 'react-icons/wi';
import { GiStripedSun } from 'react-icons/gi';
import useWindowWidth from '../hooks/useWindowWidth';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

// const Container = styled.div`
// 	width: 100%;
// 	background: var(--main-bg-color);
// 	height: 56px;
// 	position: fixed;
// 	top: ${props => (props.visible ? '0' : '-58px')};
// 	transition: top 0.3s;
// 	z-index: 1009;
// 	display: flex;
// 	flex-direction: row;
// `;

// const NavItemsContainer = styled.div`
// 	margin: 0 58px 0 16px;
// 	width: 480px;
// 	display: flex;
// 	flex-direction: row;
// 	justify-content: space-between;
// `;

// const NavItem = styled.div`
// 	height: 56px;
// 	width: 100%;
// 	text-align: center;
// 	&& > h3 {
// 		margin-top: 20px;
// 		font-size: 16px;
// 		text-transform: uppercase;
// 		color: var(--main-fg-color);
// 		transform: translateY(0);
// 		transition: transform 1s ease-in-out;
// 		cursor: pointer;
// 	}
// 	&&:hover {
// 		&& > h3 {
// 			transform: translateY(3px);
// 			transition: transform 0.3s ease-in-out;
// 		}
// 	}
// `;

// const ToggleModeBtn = styled.svg`
// 	color: var(--main-fg-color);
// 	font-size: 42px;
// 	cursor: pointer;
// `;

// const ToggleContainer = styled.div`
// 	height: 48px;
// 	position: absolute;
// 	top: 8px;
// 	right: 16px;
// 	width: 42px;
// `;

// const MenuBtnContainer = styled(ToggleContainer)`
// 	top: 7px;
// 	left: 16px;
// 	&& > h3 {
// 		color: var(--main-fg-color);
// 		z-index: 10003;
// 		margin-bottom: -4px;
// 		font-size: 22px;
// 		padding: 0;
// 		cursor: pointer;
// 	}
// `;

export default function Nav({ setIsMobileMenuOpen }) {
	const [visible, setVisible] = useState(true);
	const [isDarkMode, setIsDarkMode] = useState(false);
	useScrollToHideNav(setVisible);
	const [windowWidth] = useWindowWidth();

	const windowGlobal = typeof window !== 'undefined' && window;

	//detect dark mode - not sure if it works properly
	useEffect(() => {
		if (
			windowGlobal.matchMedia &&
			windowGlobal.matchMedia('(prefers-color-scheme: dark)').matches
		) {
			setIsDarkMode(true);
		}
	}, [isDarkMode, windowGlobal]);

	//toggle dark/light modes
	const toggleDisplayMode = () => {
		setIsDarkMode(!isDarkMode);

		const bg = windowGlobal
			.getComputedStyle(windowGlobal.document.documentElement)
			.getPropertyValue('--main-bg-color');

		const fg = windowGlobal
			.getComputedStyle(windowGlobal.document.documentElement)
			.getPropertyValue('--main-fg-color');

		windowGlobal.document.documentElement.style.setProperty(
			'--main-bg-color',
			bg === bg ? fg : bg
		);

		windowGlobal.document.documentElement.style.setProperty(
			'--main-fg-color',
			fg === fg ? bg : fg
		);
	};

	const navItems = [
		{ title: 'home', link: '/' },
		{ title: 'info', link: '/info' },
		{ title: 'projects', shortcut: '#projects' },
		{ title: 'blog', link: '/blog' },
		{ title: 'contact', shortcut: '#contact' }
	];

	// const desktopMenu = () => {
	// 	return navItems.map((i, index) => {
	// 		return (
	// 			<AnchorLink to={i.link || '/' + i.shortcut} key={index}>
	// 				<NavItem key={index}>
	// 					<h3>{i.title}</h3>
	// 				</NavItem>
	// 			</AnchorLink>
	// 		);
	// 	});
	// };

	// const mobileMenu = () => {
	// 	return (
	// 		<MenuBtnContainer onClick={() => setIsMobileMenuOpen(true)}>
	// 			<h3>ME</h3>
	// 			<h3>NU</h3>
	// 		</MenuBtnContainer>
	// 	);
	// };

	return (
		// <Container visible={visible}>
		// 	{windowWidth > 800 ? (
		// 		<NavItemsContainer windowWidth={windowWidth}>
		// 			{desktopMenu()}
		// 		</NavItemsContainer>
		// 	) : (
		// 			mobileMenu()
		// 		)}
		// 	<ToggleContainer onClick={() => toggleDisplayMode()}>
		// 		{isDarkMode ? (
		// 			<ToggleModeBtn as={GiStripedSun}></ToggleModeBtn>
		// 		) : (
		// 				<ToggleModeBtn
		// 					as={WiMoonAltWaxingCrescent4}
		// 				></ToggleModeBtn>
		// 			)}
		// 	</ToggleContainer>
		// </Container>
		<></>
	);
}

Nav.propTypes = {
	setIsMobileMenuOpen: PropTypes.func
};
