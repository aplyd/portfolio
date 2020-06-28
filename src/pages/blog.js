import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const Blog = ({ data }) => {
	return (
		<Layout>
			<div>
				<h1>Latest Posts</h1>
				{data.allMarkdownRemark.edges.map(post => {
					console.log(post);
					return (
						<div key={post.node.id}>
							<h3>{post.node.frontmatter.title}</h3>
							<small>
								Posted by {post.node.frontmatter.author} on{' '}
								{post.node.frontmatter.date}
							</small>
							<br />
							<br />
							<Link to={post.node.frontmatter.path}>
								Read More
							</Link>
							<br />
							<br />
							<hr />
						</div>
					);
				})}
			</div>
		</Layout>
	);
};

Blog.propTypes = {
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			edges: PropTypes.shape({
				map: PropTypes.func
			})
		})
	})
};

export const pageQuery = graphql`
	query BlogIndexQuery {
		allMarkdownRemark {
			edges {
				node {
					id
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

export default Blog;
