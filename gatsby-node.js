const path = require('path');
const { paginate } = require('gatsby-awesome-pagination');

exports.createPages = async ({ actions, graphql }) => {
	const { createPage } = actions;

	// const blogPost = path.resolve('src/templates/blog-post.js');
	const blogPosts = await graphql(`
		{
			allMarkdownRemark {
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
	`);

	paginate({
		createPage,
		items: blogPosts,
		itemsPerPage: 2,
		pathPrefix: '/blog',
		component: path.resolve('src/template/blog.js')
	});

	// return graphql(`
	// {
	//     allMarkdownRemark {
	//         edges {
	//             node {
	//                 html
	//                 id
	//                 frontmatter {
	//                     path
	//                     title
	//                     date
	//                     author
	//                 }
	//             }
	//         }
	//     }
	// }
	// `).then(res => {
	//     if (res.errors) {
	//         return Promise.reject(res.errors)
	//     }

	//     res.data.allMarkdownRemark.edges.forEach(({node}) => {
	//         createPage({
	//             path: node.frontmatter.path,
	//             component: postTemplate
	//         })
	//     })
	// })
};
