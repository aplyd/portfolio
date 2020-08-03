import React from 'react';
import styled from 'styled-components';

const Frame = styled.div`
	width: 220px;
	height: 260px;
`;

const fontSize = '48px'

const P = styled.p`
	white-space: nowrap;
	color: var(--main-fg-color);
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

export default function scrollText() {
	return (
		<Frame>
			<P>Contact</P>
			<P>Contact</P>
			<P>Contact</P>
			<P>Contact</P>
			<P>Contact</P>
			<P>Contact</P>
			<P>Contact</P>
		</Frame>
	);
}
