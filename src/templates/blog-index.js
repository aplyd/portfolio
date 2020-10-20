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
import AnimateVisWrapper from '../components/animateVisWrapper';
import SEO from '../components/seo';

const Container = styled.div`
	max-width: 80rem;
	min-height: calc(100vh - 5.6rem);
	margin: 0 auto;
	position: relative;
`;

// const Title = styled.h2`
// 	color: var(--color-dark);
// 	text-transform: uppercase;
// `;

// const Line = styled.div`
// 	height: 2px;
// 	border-radius: 40px;
// 	width: 100%;
// 	background-color: var(--accent-light);
// `;

const PostPreviewContainer = styled.div`
	/* padding: 24px 0; */
	color: var(--color-dark);
	min-height: 18rem;
	display: grid;
	grid-template-columns: 1fr 40%;
	grid-gap: 4rem;
	/* &&:hover {
		transform: scale(1.05);
	} */
	/* background-color: rgba(255, 255, 255, 0.15);
	backdrop-filter: blur(5px);
	border-radius: 40px;
	padding: 24px; */
	@media screen and (max-width: 816px) {
		grid-template-columns: 1fr;
	}
`;

const WordsContainer = styled.div`
	@media screen and (max-width: 816px) {
		grid-row: 2;
	}
	position: relative;

	&& > h3 {
		padding-right: 1.2rem;
		font-weight: 500;
		text-transform: uppercase;
		@media screen and (max-width: 816px) {
			padding-left: 1.6rem;
			padding-right: 1.6rem;
		}
	}
`;

const Excerpt = styled.p`
	color: var(--color-dark);
	padding-top: 0.6rem;
	@media screen and (max-width: 816px) {
		padding-left: 1.6rem;
		padding-right: 1.6rem;
	}
`;

const Meta = styled.p`
	color: #363636;
	font-weight: 300;
	padding-top: 0.6rem;
	@media screen and (max-width: 816px) {
		padding-left: 1.6rem;
		padding-right: 1.6rem;
	}
`;

const ImageContainer = styled.div`
	@media screen and (max-width: 800px) {
		grid-row: 1;
	}
`;

const PreviewImage = styled(Img)`
	margin-top: 4px;
	border-radius: var(--rounded);
	@media screen and (max-width: 800px) {
		border-radius: 0;
	}
`;

const template = ({ data, pageContext }) => {
	return (
		<Layout>
			<SEO title='Blog' />
			<Container>
				<Spacer height={'large'} />
				<Spacer height={'large'} />
				{data.allMdx.edges.map(post => {
					const featuredImage =
						post.node.frontmatter.featuredImage.childImageSharp
							.fluid;

					return (
						<React.Fragment key={post.node.id}>
							<AnimateVisWrapper
								initial={{ opacity: 0 }}
								animation={{
									opacity: 1,
									transition: {
										delay: 0.15,
										duration: 0.5
									}
								}}
								partial={true}
							>
								<Link
									to={`/blog/${post.node.frontmatter.path}/`}
								>
									<PostPreviewContainer>
										<WordsContainer>
											<h3>
												{post.node.frontmatter.title}
											</h3>
											<Meta>
												{post.node.frontmatter.author} |{' '}
												{post.node.frontmatter.date}
											</Meta>
											<Excerpt>
												{post.node.excerpt}
											</Excerpt>
										</WordsContainer>
										<ImageContainer>
											<PreviewImage
												fluid={featuredImage}
											/>
										</ImageContainer>
									</PostPreviewContainer>
								</Link>
							</AnimateVisWrapper>
							<Spacer height={'large'} />
						</React.Fragment>
					);
				})}

				<Spacer height={'xlarge'} />
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
