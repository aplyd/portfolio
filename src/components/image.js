import React from 'react';
import Img from 'gatsby-image';
import PropType from 'prop-types';

export default function Image({ image, ...theRest }) {
	if (!image) {
		return null;
	}
	if (image.extension === 'gif') {
		return <img src={image.publicURL} {...theRest} />;
	}
	return <Img fluid={image.childImageSharp.fluid} {...theRest} />;
}

Image.propTypes = {
	image: PropType.any
};
