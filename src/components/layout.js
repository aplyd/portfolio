/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

// import { Link } from 'gatsby'
// import { useStaticQuery, graphql } from "gatsby"

import { GlobalStyle } from './GlobalStyle';
import './layout.css';
import styled from 'styled-components';

const Header = styled.div``;

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
			<Header></Header>
			<main>{children}</main>
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
