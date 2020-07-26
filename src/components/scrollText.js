import React from 'react';
import styled from 'styled-components';

const Frame = styled.div`
	/* float: right; */
	width: 300px;
	height: 384px;
	overflow: hidden;
`;

const P = styled.p`
	white-space: nowrap;
	color: var(--main-bg-color);
	font-size: 64px;
	line-height: 64px;
	font-weight: bold;
	animation: slide 1s infinite linear;
	text-shadow: -1.5px -1.5px 0 var(--main-fg-color),
		1.5px -1.5px 0 var(--main-fg-color), -1.5px 1.5px 0 var(--main-fg-color),
		1.5px 1.5px 0 var(--main-fg-color);
	text-transform: uppercase;
	@keyframes slide {
		from {
			transform: translateY(-64px);
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
