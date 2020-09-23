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
import { Spacer, MobileTextPadding } from '../components/globalStyle';

const Container = styled.div`
	width: 100%;
	max-width: 80rem;
	height: 100%;
	min-height: 100vh;
	margin: 0 auto;
`;

const Title = styled.h2`
	${MobileTextPadding}
	max-width: 80rem;
	margin: 0 auto;
	color: var(--color-dark);
`;

const IMG = styled(Img)`
	max-width: 80rem;
	border-radius: 40px;
	margin: 0 auto;
	@media screen and (max-width: 800px) {
		border-radius: 0;
	}
`;

export default function template({ data: { mdx }, pageContext }) {
	const featuredImage = mdx.frontmatter.featuredImage.childImageSharp.fluid;

	return (
		<MDXProvider components={mdxComponents}>
			<Layout>
				<Container>
					<Spacer height={'xlarge'} />
					<Spacer height={'large'} />
					<Title>{mdx.frontmatter.title}</Title>
					<Spacer height={'small'} />
					<IMG fluid={featuredImage} />
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
