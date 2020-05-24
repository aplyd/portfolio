/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Nav from './nav';
// import { Link } from 'gatsby'
// import { useStaticQuery, graphql } from "gatsby"

import { GlobalStyle, PageContainer } from './globalStyle';
import './layout.css';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';

const MobileMenu = styled(motion.div)`
	background-color: var(--main-bg-color);
	position: fixed;
	height: 100vh;
	width: 100vw;
	overflow: hidden;
	z-index: 1002;
	display: grid;
	grid-template-rows: 80px 1fr 80px;
`;

const MenuItemContainer = styled.div`
	grid-row: 2;
	color: var(--main-fg-color);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
`;
const MenuItem = styled.h2`
	cursor: pointer;
	&&:hover {
		color: var(--main-bg-color);
	}
`;

const CloseMenu = styled.svg`
	font-size: 36px;
	cursor: pointer;
	color: var(--main-fg-color);
`;

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
			<GlobalStyle />

			{isMobileMenuOpen ? (
				<AnimatePresence>
					<MobileMenu
						animate={{ x: [-1000, 0, 10, 0] }}
						transition={{
							ease: 'easeInOut',
							duration: 0.5,
							times: [0.1, 0.8, 0.9, 1]
						}}
						exit={{ x: [0, -500, -800, -1000] }}
					>
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
				</AnimatePresence>
			) : null}

			<Nav setIsMobileMenuOpen={setIsMobileMenuOpen} />
			<PageContainer>
				<main>{children}</main>
			</PageContainer>
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
