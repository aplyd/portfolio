import React from 'react';
import styled from 'styled-components';
import { useScrollPos } from '../hooks/useScrollPos';
import { Frame } from 'framer';

const SpinningTextContainer = styled.div`
	transform: scale(7);
	width: 200px;
	height: 200px;
	z-index: 10007;
	position: absolute;
	right: -80px;
	top: 200px;
`;

const SpinSVG = styled.svg`
	fill: transparent;
`;

const Text = styled.text`
	font-weight: 700;
	text-transform: uppercase;
	z-index: 9999;
	font-size: 23px;
	fill: white;
	&& > path {
	}
`;

export default function SpinningText() {
	const scrollPos = useScrollPos();
	return (
		<SpinningTextContainer>
			{/* <Scroll> */}
			<Frame
				animate={{ rotate: -scrollPos / 2 }}
				width={200}
				height={200}
				background='transparent'
			>
				<SpinSVG
					version='1.1'
					viewBox='0 0 1000 1000'
					preserveAspectRatio='xMinYMin meet'
				>
					<path
						d='
                M 500, 500
                m -150, 0
                a 150,150 0 1,1 300,0
                a 150,150 0 1,1 -300,0
                '
						// transform='translate(25, 25)'

						id='circle'
					/>{' '}
					<Text width='100'>
						<textPath xlinkHref='#circle'>
							idle hands build nothing idle hands build nothing
							idle hands build nothing
						</textPath>
					</Text>
				</SpinSVG>
			</Frame>
			{/* </Scroll> */}
		</SpinningTextContainer>
	);
}
