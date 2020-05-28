import React from 'react';
import styled from 'styled-components';
import { useScrollPos } from '../hooks/useScrollPos';
import { Frame } from 'framer';

const SpinningTextContainer = styled.div`
	display: ${props => (props.scrollPos > 1000 ? 'block' : 'none')};
	transform: scale(0.5);
	width: 300px;
	height: 300px;
	z-index: 10007;
	position: fixed;
	right: calc(30vw);
	top: 30vh;
`;

const SpinSVG = styled.svg`
	fill: transparent;
`;

const Text = styled.text`
	font-size: 29px;
	fill: var(--main-fg-color);
	&& > path {
	}
`;

export default function SpinningText() {
	const scrollPos = useScrollPos();
	return (
		<SpinningTextContainer scrollPos={scrollPos}>
			{/* <Scroll> */}
			<Frame
				animate={{ rotate: -scrollPos / 2 }}
				width={1000}
				height={1000}
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
