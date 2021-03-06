import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { useScrollToHideNav } from '../hooks/useScrollToHideNav';
// import { WiMoonAltWaxingCrescent4 } from 'react-icons/wi';
// import { GiStripedSun } from 'react-icons/gi';
import useWindowWidth from '../hooks/useWindowWidth';
import { CgMenu } from 'react-icons/cg';

const Container = styled.div`
	width: 100%;
	max-width: 80rem;
	height: 56px;
	position: fixed;
	top: ${props => (props.visible ? '0' : '-58px')};
	transition: top 0.3s;
	z-index: 1009;
	display: flex;
	flex-direction: row;
	mix-blend-mode: ${props => (props.homepage ? `normal` : `difference`)};
`;

const NavItemsContainer = styled.div`
	margin: 0 58px 0 32px;
	width: 520px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	@media screen and (max-width: 800px) {
		margin-left: 16px;
	}
`;

const NavItem = styled.div`
	height: 56px;
	width: 100%;
	text-align: center;
	&& > h3 {
		margin-top: 20px;
		font-size: 2rem;
		text-transform: uppercase;
		color: var(--accent-light);
		cursor: pointer;
	}
	&&:hover {
		&& > h3 {
			color: var(--color-dark);
		}
	}
`;

// const ToggleModeBtn = styled.svg`
// 	color: var(--main-fg-color);
// 	font-size: 4.2rem;
// 	cursor: pointer;
// `;

const ToggleContainer = styled.div`
	height: 48px;
	position: absolute;
	top: 8px;
	right: 16px;
	width: 42px;
`;

const MobileNavBtnContainer = styled(ToggleContainer)`
	top: 10px;
	left: 13px;
`;

const MobileMenuBtn = styled.svg`
	color: var(--accent-light);
	z-index: 10003;
	height: 3.6rem;
	width: 3.6rem;
	padding: 0;
	cursor: pointer;
`;

export default function Nav({ toggleMobileMenu, homepage }) {
	const [visible, setVisible] = useState(true);
	// const [isDarkMode, setIsDarkMode] = useState(false);
	useScrollToHideNav(setVisible);
	const [windowWidth] = useWindowWidth();

	// const windowGlobal = typeof window !== 'undefined' && window;

	// //detect dark mode - not sure if it works properly
	// useEffect(() => {
	// 	if (
	// 		windowGlobal.matchMedia &&
	// 		windowGlobal.matchMedia('(prefers-color-scheme: dark)').matches
	// 	) {
	// 		setIsDarkMode(true);
	// 	}
	// }, [isDarkMode, windowGlobal]);

	// //toggle dark/light modes
	// const toggleDisplayMode = () => {
	// 	setIsDarkMode(!isDarkMode);

	// 	const bg = windowGlobal
	// 		.getComputedStyle(windowGlobal.document.documentElement)
	// 		.getPropertyValue('--main-bg-color');

	// 	const fg = windowGlobal
	// 		.getComputedStyle(windowGlobal.document.documentElement)
	// 		.getPropertyValue('--main-fg-color');

	// 	windowGlobal.document.documentElement.style.setProperty(
	// 		'--main-bg-color',
	// 		bg === bg ? fg : bg
	// 	);

	// 	windowGlobal.document.documentElement.style.setProperty(
	// 		'--main-fg-color',
	// 		fg === fg ? bg : fg
	// 	);
	// };

	const navItems = [
		{ title: 'home', link: '/#' },
		{ title: 'projects', shortcut: '#projects' },
		{ title: 'contact', shortcut: '#contact' }
	];

	const desktopNav = () => {
		return navItems.map((i, index) => {
			return (
				<Link to={i.link || '/' + i.shortcut} key={index}>
					<NavItem key={index}>
						<h3>{i.title}</h3>
					</NavItem>
				</Link>
			);
		});
	};

	const mobileNav = () => {
		return (
			<MobileNavBtnContainer onClick={() => toggleMobileMenu(true)}>
				<MobileMenuBtn as={CgMenu} />
			</MobileNavBtnContainer>
		);
	};

	return (
		<Container visible={visible} homepage={homepage}>
			{windowWidth < 620 ? (
				mobileNav()
			) : (
				<NavItemsContainer windowWidth={windowWidth}>
					{desktopNav()}
				</NavItemsContainer>
			)}
			{/* this is the dark/light mode toggle
			
			<ToggleContainer onClick={() => toggleDisplayMode()}>
				{isDarkMode ? (
					<ToggleModeBtn as={GiStripedSun}></ToggleModeBtn>
				) : (
						<ToggleModeBtn
							as={WiMoonAltWaxingCrescent4}
						></ToggleModeBtn>
					)}
			</ToggleContainer> */}
		</Container>
	);
}

Nav.propTypes = {
	toggleMobileMenu: PropTypes.func,
	homepage: PropTypes.bool
};
