import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useScrollToHideNav } from '../hooks/useScrollToHideNav';
import { WiMoonAltWaxingCrescent4 } from 'react-icons/wi';
import { GiStripedSun } from 'react-icons/gi';
import { AiOutlineMenu } from 'react-icons/ai';
import useWindowWidth from '../hooks/useWindowWidth';

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
	margin: 0 56px 0 0;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

const NavItem = styled.div`
	height: 48px;
	width: 100%;
	text-align: center;
	&& > h3 {
		margin-top: 16px;
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
	font-size: 28px;
	cursor: pointer;
`;

const ToggleContainer = styled.div`
	height: 48px;
	position: absolute;
	top: 14px;
	right: 12px;
	width: 28px;
`;

const Hamburger = styled(ToggleModeBtn)``;
const HamburgerContainer = styled(ToggleContainer)`
	left: 12px;
	z-index: 10003;
`;

export default function Nav({ setIsMobileMenuOpen }) {
	const [visible, setVisible] = useState(true);
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [windowWidth, setWindowWidth] = useState();
	useScrollToHideNav(setVisible);
	useWindowWidth(setWindowWidth);

	//detect dark mode
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
				<NavItem
					key={index}
					onClick={() => console.log(i.link || i.shortcut)}
				>
					<h3>{i.title}</h3>
				</NavItem>
			);
		});
	};

	const mobileMenu = () => {
		return (
			<HamburgerContainer onClick={() => setIsMobileMenuOpen(true)}>
				<Hamburger as={AiOutlineMenu} />
			</HamburgerContainer>
		);
	};

	return (
		<Container visible={visible}>
			{windowWidth > 480 ? (
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
