import React from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
// import { MDXProvider } from '@mdx-js/react'; will reimplement this and move mdx components from layout.js
import Layout from '../components/layout';
import { Spacer } from '../components/globalStyle';
import Footer from '../components/footer';
import Contact from '../components/contact';

const Container = styled.div`
	width: 100%;
	max-width: 80rem;
	height: 100%;
	min-height: 100vh;
	margin: 0 auto;
`;

const Title = styled.h2`
	/* text-align: center; */
	color: var(--accent-light);
`;

export default function template({ data: { mdx }, pageContext }) {
	console.log(pageContext);
	return (
		<Layout>
			<Container>
				<Spacer height={'xlarge'} />
				<Spacer height={'large'} />
				<Title>{mdx.frontmatter.title}</Title>
				<Spacer height={'large'} />
				{/* <MDXProvider> */}
				<MDXRenderer>{mdx.body}</MDXRenderer>
				{/* </MDXProvider> */}
				{/* <Link
					to={`${pageContext.pathPrefix}/${pageContext.next.node.frontmatter.path}`}
				>
					NEXT
				</Link> */}
			</Container>
			<Contact />
			<Footer />
		</Layout>
	);
}

export const pageQuery = graphql`
	query BlogPostQuery($id: String) {
		mdx(id: { eq: $id }) {
			id
			body
			frontmatter {
				title
			}
		}
	}
`;

template.propTypes = {
	data: PropTypes.object,
	pageContext: PropTypes.object
};
