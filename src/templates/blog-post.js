import React from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Layout from '../components/layout';
import { Spacer } from '../components/globalStyle';
import Footer from '../components/footer';
import Contact from '../components/contact';

const Container = styled.div`
	width: 100%;
	max-width: 70rem;
	height: 100%;
	min-height: 100vh;
	margin: 0 auto;
`;

const Title = styled.h2`
	text-align: center;
	color: var(--accent-light);
`;

export default function template({ data }) {
	const post = data.markdownRemark;

	return (
		// <div>
		// 	<Link to='/blog'>Back</Link>
		// 	<hr></hr>
		// 	<h1>{post.frontmatter.title}</h1>
		// 	<div dangerouslySetInnerHTML={{ __html: post.html }}></div>
		// </div>
		<Layout>
			<Container>
				<Spacer height={'xlarge'} />
				<Spacer height={'large'} />
				<Title>{post.frontmatter.title}</Title>
				<Spacer height={'large'} />
				<div dangerouslySetInnerHTML={{ __html: post.html }}></div>
			</Container>
			<Contact />
			<Footer />
		</Layout>
	);
}

export const postQuery = graphql`
	query BlogPostByPath($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				path
				title
				author
				date
			}
		}
	}
`;

template.propTypes = {
	data: PropTypes.object
};
