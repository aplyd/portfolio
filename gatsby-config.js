module.exports = {
	siteMetadata: {
		title: `Austin Ftacnik`,
		description: `Front-End Developer`,
		author: `Austin Ftacnik`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `pages`,
				path: `${__dirname}/src/pages`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `posts`,
				path: `${__dirname}/src/posts`
			}
		},
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: ['gatsby-remark-images']
			}
		},
		`gatsby-plugin-catch-links`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
			}
		},
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				root: __dirname,
				extensions: ['.mdx', '.md'],
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 800,
							linkImagesToOriginal: false
						}
					},
					{
						resolve: `gatsby-remark-vscode`,
						options: {
							theme: `High Contrast`
						}
					}
				]
			}
		}

		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};
