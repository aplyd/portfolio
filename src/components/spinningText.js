import React from 'react';
import styled from 'styled-components';
import { useScrollPos } from '../hooks/useScrollPos';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { Spacer } from './globalStyle';

const SpinningTextContainer = styled.div`
	/* transform: rotateY(90); */
	width: 400px;
	z-index: 0;
	margin: 0 auto;
	pointer-events: none;
	@media screen and (max-width: 800px) {
		left: calc(50%);
	}
	position: absolute;
	bottom: -200px;
	right: -150px;
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
	const yRange = [0, 1200];
	const spinRange = [0, 450];
	const { scrollY } = useViewportScroll();
	const spinY = useTransform(scrollY, yRange, spinRange);

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
