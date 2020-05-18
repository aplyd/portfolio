import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useScrollToHideNav } from '../hooks/useScrollToHideNav';
import { FaRegMoon } from 'react-icons/fa';
import { GiStripedSun } from 'react-icons/gi';
// import Logo from './Logo';

const Container = styled.div`
	width: 100%;
	background: var(--main-bg-color);
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

const NavItem = styled.div`
	height: 56px;
	width: 100%;
	cursor: pointer;
	text-align: center;
	&& > h2 {
		padding-top: 12px;
		color: var(--main-fg-color);
	}
`;

const LinkTo = styled.h1`
	color: var(--main-fg-color);
`;

const ToggleModeBtn = styled.svg`
	margin-top: 12px;
	color: var(--main-fg-color);
	font-size: 28px;
	cursor: pointer;
`;

export default function Nav() {
	const [visible, setVisible] = useState(true);
	const [isDarkMode, setIsDarkMode] = useState(false);
	useScrollToHideNav(setVisible);

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

	return (
		<Container visible={visible}>
			{navItems.map((i, index) => {
				return (
					<NavItem
						key={index}
						onClick={() => console.log(i.link || i.shortcut)}
					>
						<h2>{i.title}</h2>
					</NavItem>
				);
			})}
			<NavItem onClick={toggleDisplayMode}>
				<ToggleModeBtn
					as={isDarkMode ? GiStripedSun : FaRegMoon}
				></ToggleModeBtn>
			</NavItem>
		</Container>
	);
}
