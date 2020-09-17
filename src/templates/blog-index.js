import PropTypes from 'prop-types';
import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import styled from 'styled-components';
import { Spacer } from '../components/globalStyle';
import Pagination from '../components/pagination';
import Contact from '../components/contact';
import Footer from '../components/footer';

const Container = styled.div`
	max-width: 80rem;
	min-height: calc(100vh - 12rem);
	margin: 0 auto;
	@media screen and (max-width: 800px) {
		padding-left: 1.6rem;
		padding-right: 1.6rem;
	}
`;

const Title = styled.h2`
	color: var(--accent-light);
	text-transform: uppercase;
`;

const Line = styled.div`
	height: 2px;
	border-radius: 50px;
	width: 100%;
	background-color: var(--accent-light);
`;

const PostPreviewContainer = styled.div`
	color: var(--accent-light);
	/* padding: 24px 0; */
	min-height: 18rem;
	display: grid;
	grid-template-columns: 1fr 33%;
	grid-gap: 1rem;
	/* &&:hover {
		transform: scale(1.05);
	} */

	@media screen and (max-width: 800px) {
		grid-template-columns: 1fr;
	}
`;

const WordsContainer = styled.div`
	@media screen and (max-width: 800px) {
		grid-row: 2;
	}
	position: relative;

	&& > h3 {
		padding-right: 1.2rem;
	}
	&& > p {
		padding-top: 0.6rem;
	}
`;

const ImageContainer = styled.div`
	@media screen and (max-width: 800px) {
		grid-row: 1;
	}
`;

const PreviewImage = styled(Img)`
	margin-top: 4px;
	border-radius: 12px;
`;

const template = ({ data, pageContext }) => {
	return (
		<Layout>
			<Container>
				<Spacer height={'xlarge'} />
				<Title>Recent Posts</Title>
				<Spacer height={'large'} />
				{/* <Line /> */}
				{data.allMdx.edges.map(post => {
					const featuredImage =
						post.node.frontmatter.featuredImage.childImageSharp
							.fluid;

					return (
						<React.Fragment key={post.node.id}>
							<Link to={`/blog/${post.node.frontmatter.path}/`}>
								<PostPreviewContainer>
									<WordsContainer>
										<h3>{post.node.frontmatter.title}</h3>
										<p>
											{post.node.frontmatter.author} |{' '}
											{post.node.frontmatter.date}
										</p>
										<p>{post.node.excerpt}</p>
									</WordsContainer>
									<ImageContainer>
										<PreviewImage fluid={featuredImage} />
									</ImageContainer>
								</PostPreviewContainer>
							</Link>
							<Spacer height={'large'} />
						</React.Fragment>
					);
				})}
				<Pagination
					totalCount={data.allMdx.totalCount}
					currentPage={pageContext.currentPage}
				/>
			</Container>
			<Contact />
			<Footer />
		</Layout>
	);
};

template.propTypes = {
	data: PropTypes.any,
	pageContext: PropTypes.object
};

export const BlogIndexQuery = graphql`
	query($skip: Int!, $limit: Int!) {
		allMdx(
			sort: { fields: [frontmatter___date], order: DESC }
			limit: $limit
			skip: $skip
		) {
			totalCount
			edges {
				node {
					id
					body
					excerpt
					frontmatter {
						author
						date
						path
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
		}
	}
`;

export default template;
