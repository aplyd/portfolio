import * as React from 'react';
import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';

const Container = styled(motion.div)`
	${props => props.styles}
`;

export default function AnimateVisWrapper({
	children,
	initial,
	animation,
	custom,
	styles,
	partial
}) {
	const controls = useAnimation();
	const handleVisible = isVisible => {
		if (isVisible) {
			controls.start(i => animation);
		}
	};

	return (
		<VisibilitySensor onChange={handleVisible} partialVisibility={partial}>
			<Container
				initial={initial}
				containerStyles={styles}
				animate={controls}
				custom={custom}
			>
				{children}
			</Container>
		</VisibilitySensor>
	);
}

AnimateVisWrapper.propTypes = {
	children: PropTypes.node.isRequired,
	initial: PropTypes.object,
	animation: PropTypes.object,
	styles: PropTypes.object,
	custom: PropTypes.number,
	partial: PropTypes.bool
};
