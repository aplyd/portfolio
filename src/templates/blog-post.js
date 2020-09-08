import React from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';

export default function template({ data }) {
	const post = data.markdownRemark;

	return (
		<div>
			<Link to='/blog'>Back</Link>
			<hr></hr>
			<h1>{post.frontmatter.title}</h1>
			<div dangerouslySetInnerHTML={{ __html: post.html }}></div>
		</div>
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
