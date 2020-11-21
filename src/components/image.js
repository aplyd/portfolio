import PropType from 'prop-types';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Image = ({ fileName, alt }) => {
	const { allImageSharp } = useStaticQuery(graphql`
		query {
			allImageSharp {
				nodes {
					fluid(maxWidth: 1600) {
						originalName
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
		}
	`);

	const fluid = allImageSharp.nodes.find(
		n => n.fluid.originalName === fileName
	).fluid;

	return (
		<figure>
			<Img fluid={fluid} alt={alt} />
		</figure>
	);
};

export default Image;

Image.propTypes = {
	fileName: PropType.string,
	alt: PropType.string
};
