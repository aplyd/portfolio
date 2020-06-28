import React from 'react';
import styled from 'styled-components';
import { useScrollPos } from '../hooks/useScrollPos';
import { motion } from 'framer-motion';

const SpinningTextContainer = styled.div`
	transform: scale(1.75);
	width: 400px;
	height: 400px;
	z-index: 1007;
	position: absolute;
	right: -160px;
	top: 100px;
	pointer-events: none;
`;

const SpinSVG = styled.svg`
	fill: transparent;
	pointer-events: none;
`;

const Text = styled.text`
	font-weight: 700;
	text-transform: uppercase;
	z-index: 9999;
	font-size: 23px;
	fill: white;
	pointer-events: none;
	&& > path {
		pointer-events: none;
	}
`;

export default function SpinningText() {
	let scrollPos = useScrollPos();
	return (
		<SpinningTextContainer>
			<motion.div
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
							idle hands build nothing
						</textPath>
					</Text>
				</SpinSVG>
			</motion.div>
		</SpinningTextContainer>
	);
}

{
	/* <SpinSVG
					version='1.1'
					viewBox='0 0 1000 1000'
					preserveAspectRatio='xMinYMin meet'
					height='400px'
					width='400px'
				>
					<path
						d='
                M 500, 500
                m -150, 0
                a 150,150 0 1,1 300,0
                a 150,150 0 1,1 -300,0
                ' */
}
