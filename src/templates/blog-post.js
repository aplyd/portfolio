import React from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import mdxComponents from '../components/mdxComponents';
import Layout from '../components/layout';
import Footer from '../components/footer';
import Contact from '../components/contact';
import Img from 'gatsby-image';
import { Spacer } from '../components/globalStyle';

const Container = styled.div`
	width: 100%;
	max-width: 80rem;
	height: 100%;
	min-height: 100vh;
	margin: 0 auto;
	@media screen and (max-width: 816px) {
		padding: 0 16px;
	}
`;

const Title = styled.h2`
	/* text-align: center; */
	color: var(--accent-light);
`;

export default function template({ data: { mdx }, pageContext }) {
	const featuredImage = mdx.frontmatter.featuredImage.childImageSharp.fluid;

	console.log(mdxComponents);

	return (
		<MDXProvider components={mdxComponents}>
			<Layout>
				<Container>
					<Spacer height={'xlarge'} />
					<Spacer height={'large'} />
					<Title>{mdx.frontmatter.title}</Title>
					<Spacer height={'large'} />
					<Img fluid={featuredImage} />
					<Spacer height={'large'} />
					<MDXRenderer>{mdx.body}</MDXRenderer>
					<Spacer height={'large'} />
				</Container>
				<Contact />
				<Footer />
			</Layout>
		</MDXProvider>
	);
}

export const pageQuery = graphql`
	query BlogPostQuery($id: String) {
		mdx(id: { eq: $id }) {
			id
			body
			frontmatter {
				title
				featuredImage {
					childImageSharp {
						fluid(maxWidth: 800) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	}
`;

template.propTypes = {
	data: PropTypes.object,
	pageContext: PropTypes.object
};
