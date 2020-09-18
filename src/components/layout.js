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
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
deckDeckGoHighlightElement();

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

const Layout = ({ children }) => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const controls = useAnimation();
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
		<>
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
									// custom={1}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3, delay: 0.1 }}
								>
									Home
								</MenuItem>
							</Link>
							{/* <Link to=''>
							<MenuItem
								initial={{ opacity: 0, y: 100 }}
								// custom={1.5}
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
									// custom={2}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3, delay: 0.3 }}
								>
									Projects
								</MenuItem>
							</Link>
							<Link to='/blog#'>
								<MenuItem
									onClick={() => toggleMobileMenu()}
									initial={{ opacity: 0, y: 100 }}
									// custom={2.5}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3, delay: 0.4 }}
								>
									Blog
								</MenuItem>
							</Link>
							<Link to='/#contact'>
								<MenuItem
									onClick={() => toggleMobileMenu()}
									initial={{ opacity: 0, y: 100 }}
									// custom={3}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3, delay: 0.5 }}
								>
									Contact
								</MenuItem>
							</Link>
							<IconContainer
								initial={{ opacity: 0, y: 100 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3, delay: 0.6 }}
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

			<Nav toggleMobileMenu={toggleMobileMenu} />
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
