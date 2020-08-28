import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useScrollPos } from '../hooks/useScrollPos';
import {
	motion,
	useViewportScroll,
	useTransform,
	useMotionValue
} from 'framer-motion';
import useWindowWidth from '../hooks/useWindowWidth';

const SpinningTextContainer = styled.div`
	width: 100%;
	max-width: 600px;
	z-index: 0;
	margin: 0 auto;
	pointer-events: none;
	position: absolute;
	bottom: -38%;
	right: -33%;
	@media screen and (max-width: 850px) {
		/* bottom: -50%;
		left: 50%;
		transform: translate(-50%, 0); */
	}
`;

const SpinSVG = styled.svg`
	pointer-events: none;
	fill: transparent;
`;

const Text = styled.text`
	font-weight: 700;
	text-transform: uppercase;
	z-index: 9999;
	font-size: 3.5rem;
	fill: var(--accent-light);
	pointer-events: none;
	&& > path {
		pointer-events: none;
	}
`;

export default function SpinningText() {
	let scrollPos = useScrollPos();
	const [scrollAnimation, setScrollAnimation] = useState(0);

	// complicated way of scaling via window width
	// const [windowWidth] = useWindowWidth();
	// const motionVal = useMotionValue(windowWidth);
	// const scaleTran = useTransform(motionVal, [320, 850, 4000], [0.5, 1, 1]);

	// useEffect(() => {
	// 	motionVal.set(windowWidth);
	// }, [windowWidth, motionVal]);

	return (
		<SpinningTextContainer>
			<motion.div
				// animate={{ rotate: -scrollPos / 2, x: 0, y: 0, rotateY: scrollPos / 4.5 }}
				animate={{ rotate: -scrollPos / 3, x: 0, y: 0 }}
				style={{ transformOrigin: 'center-center' }}
			>
				<SpinSVG
					version='1.1'
					viewBox='0 0 500 500'
					preserveAspectRatio='xMinYMin meet'
					// height='400px'
					// width='400px'
				>
					<path
						d='
                M 250, 250
                m -150, 0
                a 150,150 0 1,1 300,0
                a 150,150 0 1,1 -300,0
                '
						id='circle'
					/>{' '}
					<Text width='100'>
						<textPath xlinkHref='#circle'>
							idle hands build nothing idle hands build nothing
						</textPath>
					</Text>
				</SpinSVG>
			</motion.div>
		</SpinningTextContainer>
	);
}
