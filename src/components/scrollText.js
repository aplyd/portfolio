import React from 'react';
import styled from 'styled-components';
import ArrowDown from './arrowDown';

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
	line-height: 46px;
	margin-right: 16px;
	animation: slide 10s infinite linear;
	@keyframes slide {
		from {
			transform: translateY(-460px);
		}
		to {
			transform: translateY(0);
		}
	}
`;

const P = styled.p`
	color: var(--main-fg-color);
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
	const scrollyText = string => {
		return (
			<Text>
				{[...Array(18)].map((i, index) => {
					<ArrowDown />;
				})}
			</Text>
		);
	};

	const quote = 'localhost://';

	return <Frame>{scrollyText()}</Frame>;
}
