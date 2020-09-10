import React from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
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

export default function template({ data: { mdx: post } }) {
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
				<MDXRenderer>{post.body}</MDXRenderer>
			</Container>
			<Contact />
			<Footer />
		</Layout>
	);
}

export const pageQuery = graphql`
	query {
		mdx {
			id
			body
			frontmatter {
				title
				date
				author
				path
			}
		}
	}
`;

template.propTypes = {
	data: PropTypes.object
};
