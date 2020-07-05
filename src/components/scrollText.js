import React from 'react';
import styled from 'styled-components';

const Frame = styled.div`
	width: 200px;
	height: 200px;
	overflow: hidden;
`;

const P = styled.p`
	color: var(--main-bg-color);
	font-size: 32px;
	line-height: 38px;
	animation: slide 1s infinite linear;
	text-shadow: -1px -1px 0 var(--main-fg-color),
		1px -1px 0 var(--main-fg-color), -1px 1px 0 var(--main-fg-color),
		1px 1px 0 var(--main-fg-color);
	text-transform: uppercase;
	@keyframes slide {
		from {
			transform: translateY(-38px);
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
