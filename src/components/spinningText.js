import React, { useEffect } from 'react';
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
	/* transform: rotateY(90); */
	width: 400px;
	z-index: 0;
	margin: 0 auto;
	pointer-events: none;
	/* @media screen and (max-width: 800px) {
		left: calc(50%);
	} */
	position: absolute;
	bottom: -28%;
	right: -23%;
	/* transform: ${props => {
		if (props.windowWidth < 850) {
			return `scale(${(props.windowWidth / 1000) * 1.2})`;
		}
	}}; */
`;

const SpinSVG = styled.svg`
	transform: scale(1.5);
	pointer-events: none;
	fill: transparent;
`;

const Text = styled.text`
	font-weight: 700;
	text-transform: uppercase;
	z-index: 9999;
	font-size: 3.5rem;
	/* fill: var(--dark-color); */
	/* text-shadow: -2px -2px 0 var(--dark-color), 2px -2px 0 var(--dark-color),
		-2px 2px 0 var(--dark-color), 2px 2px 0 var(--dark-color); */
	/* font-weight: bold; */
	fill: var(--accent-light);
	mix-blend-mode: difference;
	pointer-events: none;
	&& > path {
		pointer-events: none;
	}
`;

export default function SpinningText() {
	let scrollPos = useScrollPos();

	// complicated way of scaling via window width
	const [windowWidth] = useWindowWidth();
	const motionVal = useMotionValue(windowWidth);
	const scaleTran = useTransform(motionVal, [320, 850, 4000], [0.5, 1, 1]);

	useEffect(() => {
		motionVal.set(windowWidth);
	}, [windowWidth, motionVal]);

	return (
		<SpinningTextContainer windowWidth={windowWidth}>
			<motion.div
				// animate={{ rotate: -scrollPos / 2, x: 0, y: 0, rotateY: scrollPos / 4.5 }}
				animate={{ rotate: -scrollPos / 3, x: 0, y: 0 }}
				style={{ transformOrigin: 'center-center', scale: scaleTran }}
			>
				<SpinSVG
					version='1.1'
					viewBox='0 0 500 500'
					preserveAspectRatio='xMinYMin meet'
					height='400px'
					width='400px'
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
