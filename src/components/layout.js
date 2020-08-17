/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, ColorModeProvider } from "@chakra-ui/core";
import customTheme from '../gatsby-plugin-chakra-ui/theme'
import Nav from './nav';
import { Box, Text, Icon } from '@chakra-ui/core'
// import { Link } from 'gatsby'
// import { useStaticQuery, graphql } from "gatsby"

import { GlobalStyle, PageContainer } from './globalStyle';
import './layout.css';
import { MdClose } from 'react-icons/md';
// import { Frame, AnimatePresence } from 'framer';

// const MobileMenu = styled.div`
// 	background-color: var(--main-bg-color);
// 	position: fixed;
// 	height: 100vh;
// 	width: 100vw;
// 	overflow: hidden;
// 	z-index: 1002;
// 	display: grid;
// 	grid-template-rows: 80px 1fr 80px;
// `;

// const MenuItemContainer = styled.div`
// 	grid-row: 2;
// 	color: var(--main-fg-color);
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// 	justify-content: space-evenly;
// `;
// const MenuItem = styled.h2`
// 	cursor: pointer;
// 	&&:hover {
// 		color: var(--main-bg-color);
// 	}
// `;

// const CloseMenu = styled.svg`
// 	font-size: 36px;
// 	cursor: pointer;
// 	color: var(--main-fg-color);
// `;

const Layout = ({ children }) => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	// const data = useStaticQuery(graphql`
	//   query SiteTitleQuery {
	//     site {
	//       siteMetadata {
	//         title
	//       }
	//     }
	//   }
	// `)

	return (
		<>
			<ThemeProvider theme={customTheme}>
				<ColorModeProvider>

					{/* MOBILE MENU */}
					{/* <Box backgroundColor="brand.700">
						<Box>
							<Text fontSize="2xl">Home</Text>
							<Text fontSize="2xl">Info</Text>
							<Text fontSize="2xl">Projects</Text>
							<Text fontSize="2xl">Contact</Text>
							<Text fontSize="2xl">Blog</Text>
							<Icon as={MdClose}
								onClick={() => setIsMobileMenuOpen(false)}>
							</Icon>
						</Box>
					</Box> */}

					{/* DESKTOP MENU */}
					<Nav setIsMobileMenuOpen={setIsMobileMenuOpen} />

					<main>{children}</main>

					{/* <GlobalStyle />
			
			{/* TODO - animate with framer-motion */}
					{/* {isMobileMenuOpen ? (
				<MobileMenu>
					<MenuItemContainer>
						<MenuItem>Home</MenuItem>
						<MenuItem>Info</MenuItem>
						<MenuItem>Projects</MenuItem>
						<MenuItem>Blog</MenuItem>
						<MenuItem>Contact</MenuItem>
						<CloseMenu
							as={MdClose}
							onClick={() => setIsMobileMenuOpen(false)}
						></CloseMenu>
					</MenuItemContainer>
				</MobileMenu>
			) : null}

			<Nav setIsMobileMenuOpen={setIsMobileMenuOpen} />
			<PageContainer>
			</PageContainer> */}

				</ColorModeProvider>
			</ThemeProvider>
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.any
};

export default Layout;
