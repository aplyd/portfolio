import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useScrollToHideNav } from '../hooks/useScrollToHideNav';
import { WiMoonAltWaxingCrescent4 } from 'react-icons/wi';
import { GiStripedSun } from 'react-icons/gi';
import useWindowWidth from '../hooks/useWindowWidth';
import { navigate } from '@reach/router';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const Container = styled.div`
	width: 100%;
	background: var(--main-fg-color);
	height: 56px;
	position: fixed;
	top: ${props => (props.visible ? '0' : '-58px')};
	transition: top 0.3s;
	z-index: 1000;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-content: center;
`;

const NavItemsContainer = styled.div`
	margin: 0 58px 0 0;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

const NavItem = styled.div`
	height: 56px;
	width: 100%;
	text-align: center;
	&& > h3 {
		margin-top: 17px;
		color: var(--main-bg-color);
		transform: translateY(0);
		transition: transform 1s ease-in-out;
		cursor: pointer;
	}
	&&:hover {
		&& > h3 {
			transform: translateY(3px);
			transition: transform 0.3s ease-in-out;
		}
	}
`;

const ToggleModeBtn = styled.svg`
	color: var(--main-bg-color);
	font-size: 42px;
	cursor: pointer;
`;

const ToggleContainer = styled.div`
	height: 48px;
	position: absolute;
	top: 8px;
	right: 16px;
	width: 42px;
`;

const MenuBtnContainer = styled(ToggleContainer)`
	top: 7px;
	left: 16px;
	&& > h3 {
		color: var(--main-bg-color);
		z-index: 10003;
		margin-bottom: -4px;
		font-size: 22px;
	}
`;

export default function Nav({ setIsMobileMenuOpen }) {
	const [visible, setVisible] = useState(true);
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [windowWidth, setWindowWidth] = useState();
	useScrollToHideNav(setVisible);
	useWindowWidth(setWindowWidth);

	//detect dark mode - not sure if it works properly
	useEffect(() => {
		if (
			window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: dark)').matches
		) {
			setIsDarkMode(true);
		}
	}, [isDarkMode]);

	//toggle dark/light modes
	const toggleDisplayMode = () => {
		setIsDarkMode(!isDarkMode);
		const bg = window
			.getComputedStyle(document.documentElement)
			.getPropertyValue('--main-bg-color');

		const fg = window
			.getComputedStyle(document.documentElement)
			.getPropertyValue('--main-fg-color');

		document.documentElement.style.setProperty(
			'--main-bg-color',
			bg === bg ? fg : bg
		);
		document.documentElement.style.setProperty(
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

	const desktopMenu = () => {
		return navItems.map((i, index) => {
			return (
				<AnchorLink to={i.link || '/' + i.shortcut} key={index}>
					<NavItem key={index}>
						<h3>{i.title}</h3>
					</NavItem>
				</AnchorLink>
			);
		});
	};

	const mobileMenu = () => {
		return (
			<MenuBtnContainer onClick={() => setIsMobileMenuOpen(true)}>
				<h3>ME</h3>
				<h3>NU</h3>
			</MenuBtnContainer>
		);
	};

	return (
		<Container visible={visible}>
			{windowWidth > 640 ? (
				<NavItemsContainer windowWidth={windowWidth}>
					{desktopMenu()}
				</NavItemsContainer>
			) : (
				mobileMenu()
			)}
			<ToggleContainer onClick={() => toggleDisplayMode()}>
				<ToggleModeBtn
					as={isDarkMode ? GiStripedSun : WiMoonAltWaxingCrescent4}
				></ToggleModeBtn>
			</ToggleContainer>
		</Container>
	);
}

Nav.propTypes = {
	setIsMobileMenuOpen: PropTypes.func
};
