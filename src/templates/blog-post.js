import React from 'react';
import { graphql } from 'gatsby';
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
import { IoLogoGithub } from 'react-icons/io';

const Container = styled.div`
	width: 100%;
	max-width: 80rem;
	height: 100%;
	min-height: 100vh;
	margin: 0 auto;
`;

const Title = styled.h2`
	${MobileTextPadding}
	max-width: 75rem;
	margin: 0 auto;
	color: var(--color-dark);
`;

const IMG = styled(Img)`
	max-width: 80rem;
	border-radius: var(--rounded);
	margin: 0 auto;
	@media screen and (max-width: 800px) {
		border-radius: 0;
	}
`;

const EditPostContainer = styled.div`
	width: 100%;
	padding-bottom: 1.2rem;
	&& p {
		text-align: center;
		margin: 0 auto;
		font-size: 1.4rem;
	}
	&& a {
		font-size: 1.4rem;
	}
`;

const EditOnGithub = styled(IoLogoGithub)``;

export default function template({ data: { mdx } }) {
	const featuredImage = mdx.frontmatter.featuredImage.childImageSharp.fluid;

	const editURL = `https://github.com/aplyd/portfolio/tree/master/src/${
		mdx.fileAbsolutePath.split('/src/')[1]
	}`;

	return (
		<MDXProvider components={mdxComponents}>
			<Layout>
				<Container>
					<Spacer height={'xlarge'} />
					{/* <Spacer height={'large'} /> */}
					<Title>{mdx.frontmatter.title}</Title>
					<Spacer height={'medium'} />
					<IMG fluid={featuredImage} />
					<Spacer height={'large'} />
					<MDXRenderer>{mdx.body}</MDXRenderer>
					<Spacer height={'large'} />
					<EditPostContainer>
						<p>
							Find an issue with this post? All my posts are
							available to edit on{' '}
							<a
								rel='noopener noreferrer'
								target='_blank'
								href={editURL}
							>
								{' '}
								Github
								<EditOnGithub />
							</a>
						</p>
					</EditPostContainer>
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
			fileAbsolutePath
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
