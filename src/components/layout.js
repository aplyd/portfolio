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
import { Frame, AnimatePresence } from 'framer';

const MobileMenu = styled.div`
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

			<AnimatePresence>
				{isMobileMenuOpen ? (
					<Frame
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
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
					</Frame>
				) : null}
			</AnimatePresence>

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
