import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import Pager from '../components/pager';
import PostPreview from '../components/postPreview';

const Blog = ({ data, pageContext }) => {};

Blog.propTypes = {
	data: PropTypes.object.isRequired,
	pageContext: PropTypes.object.isRequired
};

export const query = graphql`
	query($skip: Int!, $limit: Int!) {
		allMarkdownRemark(
			sort: { fields: created, order: DESC }
			skip: $skip
			limit: $limit
		) {
			edges {
				node {
					html
					id
					frontmatter {
						path
						title
						date
						author
					}
				}
			}
		}
	}
`;

export default Blog;

// export const pageQuery = graphql`
//   query($skip: Int!, $limit: Int!) {
//     site { ... }
//     allMarkdownRemark(
//         sort: { fields: [frontmatter___date], order: DESC},
//         skip: $skip,
//         limit: $limit
//         ) {
//       edges { ... }
//     }
//   }
// `;

// const BlogArchive = ({ data, pageContext, location }) => {
// 	const posts = data.allMarkdownRemark.edges;

// 	return (
// 		<Layout location={location}>
// 			<h1>blog archive template</h1>
// 			{posts.map(({ node }) => {
// 				const title = node.frontmatter.title || node.fields.slug;
// 				return (
// 					<article key={node.fields.slug}>
// 						<header>
// 							<h3>
// 								<Link to={node.fields.slug}> {title} </Link>
// 							</h3>
// 							<small>{node.frontmatter.date}</small>
// 						</header>
// 						<section>
// 							<p
// 								dangerouslySetInnerHTML={{
// 									__html:
// 										node.frontmatter.description ||
// 										node.excerpt
// 								}}
// 							/>
// 						</section>
// 					</article>
// 				);
// 			})}
// 			<Pager pageContext={pageContext} />
// 		</Layout>
// 	);
// };

// BlogArchive.propTypes = {
// 	data: PropTypes.any,
// 	pageContext: PropTypes.any,
// 	location: PropTypes.any
// };

// export default BlogArchive;
