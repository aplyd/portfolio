const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
	const { createPage } = actions;
	const blogPost = path.resolve('src/templates/blog-post.js');
	return graphql(`
		{
			allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
				edges {
					node {
						id
						body
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
	`).then(res => {
		if (res.errors) {
			return Promise.reject(res.errors);
		}

		res.data.allMdx.edges.forEach(({ node }) => {
			console.log(node);
			createPage({
				path: node.frontmatter.path,
				component: blogPost
			});
		});
	});
};
