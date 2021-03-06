const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

const makePostsFromMdx = async ({ graphql, actions }) => {
	const postTemplate = path.resolve('./src/templates/blog-post.js');
	const { createPage } = actions;
	const result = await graphql(`
		query {
			allMdx {
				edges {
					node {
						id
						frontmatter {
							path
						}
					}
				}
			}
		}
	`);
	if (result.errors) {
		throw new Error(
			'🚨  ERROR: Loading "createPages" query, in makePostsFromMdx function'
		);
	}
	// Create blog post pages.
	const posts = result.data.allMdx.edges;
	// you'll call `createPage` for each result
	posts.forEach(({ node }, index) => {
		createPage({
			// This is the slug you created before
			// (or `node.frontmatter.slug`)
			path: `/blog${node.frontmatter.path}`,
			// This component will wrap our MDX content
			component: postTemplate,
			// You can use the values in this context in
			// our page layout component
			context: {
				id: node.id
			}
		});
	});
};

const paginate = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const blogIndexTemplate = path.resolve('./src/templates/blog-index.js');
	const result = await graphql(`
		query {
			allMdx {
				edges {
					node {
						id
						frontmatter {
							path
						}
					}
				}
			}
		}
	`);

	if (result.errors) {
		throw new Error(`Error while running GraphQL query.`);
	}

	const posts = result.data.allMdx.edges;
	const postsPerPage = 10;
	const numPages = Math.ceil(posts.length / postsPerPage);
	Array.from({ length: numPages }).forEach((_, i) => {
		createPage({
			path: i === 0 ? `/blog` : `/blog/${i + 1}`,
			component: blogIndexTemplate,
			context: {
				limit: postsPerPage,
				skip: i * postsPerPage,
				numPages,
				currentPage: i + 1
			}
		});
	});
};

exports.createPages = async ({ graphql, actions }) => {
	await Promise.all([
		makePostsFromMdx({ graphql, actions }),
		paginate({ graphql, actions })
	]);
};

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;
	if (node.internal.type === 'Mdx') {
		const value = createFilePath({ node, getNode });
		createNodeField({
			name: `slug`,
			node,
			value
		});

		// for /blog/1, /blog/2, etc. pages
		// createNodeField({
		// 	// Name of the field you are adding
		// 	name: 'slug',
		// 	// Individual MDX node
		// 	node,
		// 	// Generated value based on filepath with "blog" prefix. you
		// 	// don't need a separating "/" before the value because
		// 	// createFilePath returns a path with the leading "/".
		// 	value: `/blog${value}`
		// });
	}
};
