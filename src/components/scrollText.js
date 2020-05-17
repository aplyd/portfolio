import React from 'react';
import styled from 'styled-components';

const Frame = styled.div`
	height: 200px;
	width: 80%;
	max-width: 960px;
	margin: 0 auto;
	overflow: hidden;
	display: flex;
	flex-direction: row;
`;

const Text = styled.div`
	font-size: 58px;
	line-height: 38px;
	margin-right: 16px;
	animation: slide 6s infinite linear;
	@keyframes slide {
		from {
			transform: translateY(-380px);
		}
		to {
			transform: translateY(0);
		}
	}
`;

const P = styled.p`
	/* animation: warp 8s linear infinite both;
	@keyframes warp {
		0% {
			transform: skewX(0deg);
		}
		15% {
			transform: skewX(-25deg);
		}

		30% {
			transform: skewX(0deg);
		}
		50% {
			transform: skewX(-10deg);
		}
		75% {
			transform: skewX(25deg);
		}
		85% {
			transform: skewX(10deg);
		}
		100% {
			transform: skewX(0deg);
		}
	} */
`;

export default function scrollText() {
	const randomSpeed = () => Math.floor(Math.random * 3) + 4;

	const scrollyText = string => {
		return (
			<Text>
				{[...Array(18)].map(i => (
					<P>{string}</P>
				))}
			</Text>
		);
	};

	const quote = 'creative web developer';

	return <Frame>{quote.split(' ').map(word => scrollyText(word))}</Frame>;
}
