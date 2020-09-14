import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
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
	padding: 24px 0;
	min-height: 24rem;
	display: grid;
	grid-template-columns: 1fr 33%;
	grid-template-rows: 1fr;
	&&:hover {
		color: var(--color-dark);
	}
`;

const WordsContainer = styled.div`
	grid-column: 1;
	&& > h3 {
		min-height: 6rem;
	}
`;

const PhotoContainer = styled.div`
	grid-column: 2;
	background: var(--color-dark);
	border-radius: 50px;
`;

const template = ({ data, pageContext }) => {
	return (
		<Layout>
			<Container>
				<Spacer height={'xlarge'} />
				<Title>Recent Posts</Title>
				<Spacer height={'small'} />
				{/* <Line /> */}
				{data.allMdx.edges.map(post => {
					return (
						<React.Fragment key={post.node.id}>
							<Link to={`/blog/${post.node.frontmatter.path}/`}>
								<PostPreviewContainer>
									<WordsContainer>
										<h3>{post.node.frontmatter.title}</h3>
										<p>
											Posted by{' '}
											{post.node.frontmatter.author} on{' '}
											{post.node.frontmatter.date}
										</p>
									</WordsContainer>
									<PhotoContainer></PhotoContainer>
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
					frontmatter {
						author
						date
						path
						title
					}
				}
			}
		}
	}
`;

export default template;