import React from 'react';
import styled from 'styled-components';

const Frame = styled.div`
	width: 240px;
	height: 300px;
	overflow: hidden;
	position: absolute;
	bottom: -240px;
	right: 0;
	z-index: 999;
`;

const fontSize = '4.8rem';

const P = styled.p`
	white-space: nowrap;
	color: white;
	font-size: ${fontSize};
	line-height: ${fontSize};
	font-weight: bold;
	animation: slide 1s infinite linear;
	text-transform: uppercase;
	@keyframes slide {
		from {
			transform: translateY(-48px);
		}
		to {
			transform: translateY(0);
		}
	}
`;

export default function ScrollText() {
	return (
		<Frame>
			<P>Projects</P>
			<P>Projects</P>
			<P>Projects</P>
			<P>Projects</P>
			<P>Projects</P>
			<P>Projects</P>
			<P>Projects</P>
		</Frame>
	);
}
