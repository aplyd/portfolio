/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';
// import { Link } from 'gatsby'
// import { useStaticQuery, graphql } from "gatsby"

import { GlobalStyle, PageContainer } from './GlobalStyle';
import './layout.css';
import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';

const MobileMenu = styled.div`
	position: fixed;
	height: 100vh;
	width: 100vw;
	overflow: hidden;
	background-color: var(--main-bg-color);
	color: var(--main-fg-color);
	z-index: 1002;
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
	font-size: 40px;
	cursor: pointer;
	&&:hover {
		color: red;
	}
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
				<MobileMenu>
					<MenuItem>Home</MenuItem>
					<MenuItem>Info</MenuItem>
					<MenuItem>Projects</MenuItem>
					<MenuItem>Blog</MenuItem>
					<MenuItem>Contact</MenuItem>
					<CloseMenu
						as={GrClose}
						onClick={() => setIsMobileMenuOpen(false)}
					></CloseMenu>
				</MobileMenu>
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
