/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';
// import { Link } from 'gatsby'
// import { useStaticQuery, graphql } from "gatsby"

import { GlobalStyle, PageContainer } from './GlobalStyle';
import './layout.css';
import styled from 'styled-components';

const Layout = ({ children }) => {
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
			<Nav />
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
