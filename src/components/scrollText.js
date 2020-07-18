import React from 'react';
import styled from 'styled-components';

const Frame = styled.div`
	width: 480px;
	height: 400px;
	overflow: hidden;
`;

const P = styled.p`
	color: var(--main-bg-color);
	font-size: 72px;
	line-height: 72px;
	font-weight: bold;
	animation: slide 1s infinite linear;
	text-shadow: -1px -1px 0 var(--main-fg-color),
		1px -1px 0 var(--main-fg-color), -1px 1px 0 var(--main-fg-color),
		1px 1px 0 var(--main-fg-color);
	text-transform: uppercase;
	@keyframes slide {
		from {
			transform: translateY(-72px);
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
