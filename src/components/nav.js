import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useScrollToHideNav } from '../hooks/useScrollToHideNav';
import { WiMoonAltWaxingCrescent4 } from 'react-icons/wi';
import { GiStripedSun } from 'react-icons/gi';
import useWindowWidth from '../hooks/useWindowWidth';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { Box, Text, IconButton, useColorMode } from '@chakra-ui/core'

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
	useScrollToHideNav(setVisible);
	const [windowWidth] = useWindowWidth();
	const { colorMode, toggleColorMode } = useColorMode();

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
				// <AnchorLink to={i.link || '/' + i.shortcut} key={index}>
				// 	<NavItem key={index}>
				// 		<h3>{i.title}</h3>
				// 	</NavItem>
				// </AnchorLink>
				<AnchorLink to={i.link || '/' + i.shortcut} key={index}>
					<Box
						key={index}
						height="56px"
						width="100%"
						textAlign="center"
					>
						<Text
							fontSize="2xl"
							textTransform="uppercase"
							mt="20px"
							cursor="pointer"
						>{i.title}</Text>
					</Box>
				</AnchorLink>
			);
		});
	};

	const mobileMenu = () => {
		return (
			// <MenuBtnContainer onClick={() => setIsMobileMenuOpen(true)}>
			// 	<h3>ME</h3>
			// 	<h3>NU</h3>
			// </MenuBtnContainer>
			<Box
				onClick={() => setIsMobileMenuOpen(true)}
				height="48px"
				position="absolute"
				top="7px"
				left="16px"
				width="42px"
			>
				<Text
					zIndex={10003}
					mb="-4px"
					padding={0}
				>ME</Text>
				<Text
					zIndex={10003}
					mb="-4px"
					padding={0}
				>NU</Text>
			</Box>
		);
	};

	return (
		<>
			<Box
				visible={visible}
				height="56px"
				width="100%"
				position="fixed"
				top={() => visible ? 0 : '-58px'}
				transition='top 0.3s'
				zIndex="1009"
				display="flex"
				flexDirection="row"
			>
				{windowWidth > 800 ? (
					<Box
						windowWidth={windowWidth}
					>
						<Box
							width="480px"
							margin="0 58px 0 16px"
							display="flex"
							flex-direction="row"
							justifyContent="space-between"
						>
							{desktopMenu()}
						</Box>
					</Box>
				) : (
						mobileMenu()
					)
				}
				<Box onClick={toggleColorMode}>
					{colorMode === 'dark' ? (
						<IconButton
							aria-label="Toggle dark mode"
							fontSize="42px"
							icon={GiStripedSun}
							position="absolute"
							top="8px"
							right="16px"

						></IconButton>
					) : (
							<IconButton
								aria-label="Toggle dark mode"
								fontSize="42px"
								icon={WiMoonAltWaxingCrescent4}
								position="absolute"
								top="8px"
								right="16px"
							></IconButton>
						)}
				</Box>
			</Box>

		</>
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
	);
}

Nav.propTypes = {
	setIsMobileMenuOpen: PropTypes.func
};
