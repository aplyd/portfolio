/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Nav from './nav';
import { Link } from 'gatsby';
// import { useStaticQuery, graphql } from "gatsby"
import { FaTwitter, FaGithub, FaDev, FaLinkedin } from 'react-icons/fa';
import { GlobalStyle, PageContainer } from './globalStyle';
import './layout.css';
import styled from 'styled-components';
import { VscClose } from 'react-icons/vsc';
import { motion, AnimatePresence } from 'framer-motion';

const Container = styled.div`
	background-color: ${props => (props.homepage ? `#4c606b` : `#C6C8C9`)};
	background-image: ${props =>
		props.homepage
			? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='0' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23395b5c'/%3E%3Cstop offset='1' stop-color='%23395b5c' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='1200' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%237b9e8d'/%3E%3Cstop offset='1' stop-color='%237b9e8d' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='c' cx='600' cy='0' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23879270'/%3E%3Cstop offset='1' stop-color='%23879270' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='d' cx='600' cy='800' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%234c606b'/%3E%3Cstop offset='1' stop-color='%234c606b' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='e' cx='0' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23365445'/%3E%3Cstop offset='1' stop-color='%23365445' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='f' cx='1200' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ebd1a9'/%3E%3Cstop offset='1' stop-color='%23ebd1a9' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' width='1200' height='800'/%3E%3Crect fill='url(%23c)' width='1200' height='800'/%3E%3Crect fill='url(%23d)' width='1200' height='800'/%3E%3Crect fill='url(%23e)' width='1200' height='800'/%3E%3Crect fill='url(%23f)' width='1200' height='800'/%3E%3C/svg%3E")`
			: null};
	background-attachment: ${props => (props.homepage ? `fixed` : null)};
	background-size: ${props => (props.homepage ? `cover` : null)};
	width: 100%;
	height: 100%;
`;

const MobileMenu = styled(motion.div)`
	background-color: var(--color-dark);
	position: fixed;
	height: 100vh;
	width: 100vw;
	overflow: hidden;
	z-index: 1010;
	display: grid;
	grid-template-rows: 80px 1fr 80px;
`;

const MenuItemContainer = styled.div`
	grid-row: 2;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
`;
const MenuItem = styled(motion.h3)`
	color: var(--accent-light);
	padding: 3.8rem 0 1.8rem 0;
`;

const CloseMenuContainer = styled.div`
	height: 40px;
	position: absolute;
	top: 6px;
	left: 6px;
	width: 40px;
`;

const CloseMenuSVG = styled.svg`
	color: var(--accent-light);
	/* z-index: 10003; */
	margin-bottom: -4px;
	/* font-size: 2.2rem; */
	width: 100%;
	height: 100%;
	padding: 0;
	cursor: pointer;
`;

const IconContainer = styled(motion.div)`
	text-align: center;
	padding-top: 42px;
`;

const Icon = styled.svg`
	fill: var(--accent-light);
	width: 3.6rem;
	height: 3.6rem;
	margin-left: 1.2rem;
	margin-right: 1.2rem;
`;

const Layout = ({ children, homepage }) => {
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

	const toggleMobileMenu = menuIsOpening => {
		if (menuIsOpening) {
			setIsMobileMenuOpen(true);
		} else {
			setIsMobileMenuOpen(false);
		}
	};

	return (
		<Container homepage={homepage}>
			<GlobalStyle />
			{/* TODO - animate with framer-motion */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<MobileMenu
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<CloseMenuContainer
							// as={MdClose}
							onClick={() => toggleMobileMenu(false)}
						>
							<CloseMenuSVG as={VscClose}></CloseMenuSVG>
						</CloseMenuContainer>
						<MenuItemContainer>
							<Link to='/#'>
								<MenuItem
									onClick={() => toggleMobileMenu()}
									initial={{ opacity: 0, y: 100 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3, delay: 0.1 }}
								>
									Home
								</MenuItem>
							</Link>
							{/* <Link to=''>
							<MenuItem
								initial={{ opacity: 0, y: 100 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3, delay: 0.2 }}
							>
								Info
							</MenuItem>
							</Link> */}
							<Link to='/#projects'>
								<MenuItem
									onClick={() => toggleMobileMenu()}
									initial={{ opacity: 0, y: 100 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3, delay: 0.15 }}
								>
									Projects
								</MenuItem>
							</Link>
							<Link to='/blog#'>
								<MenuItem
									onClick={() => toggleMobileMenu()}
									initial={{ opacity: 0, y: 100 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3, delay: 0.2 }}
								>
									Blog
								</MenuItem>
							</Link>
							<Link to='/#contact'>
								<MenuItem
									onClick={() => toggleMobileMenu()}
									initial={{ opacity: 0, y: 100 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3, delay: 0.25 }}
								>
									Contact
								</MenuItem>
							</Link>
							<IconContainer
								initial={{ opacity: 0, y: 100 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3, delay: 0.3 }}
							>
								<a
									href='https://twitter.com/austinftacnik'
									rel='noopener noreferrer'
								>
									<Icon as={FaTwitter}></Icon>
								</a>
								<a
									href='https://github.com/aplyd'
									rel='noopener noreferrer'
								>
									<Icon as={FaGithub}></Icon>
								</a>
								<a
									href='https://dev.to/austinftacnik'
									rel='noopener noreferrer'
								>
									<Icon as={FaDev}></Icon>
								</a>
								<a
									href='https://www.linkedin.com/in/austin-ftacnik-3b91b7162'
									rel='noopener noreferrer'
								>
									<Icon as={FaLinkedin}></Icon>
								</a>
							</IconContainer>
						</MenuItemContainer>
					</MobileMenu>
				)}
			</AnimatePresence>

			<Nav toggleMobileMenu={toggleMobileMenu} homepage={homepage} />
			<PageContainer>
				<main>{children}</main>
			</PageContainer>
		</Container>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	homepage: PropTypes.bool
};

export default Layout;
