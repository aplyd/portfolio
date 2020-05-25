import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
	padding: 40px 0;
	position: absolute;
	top: 60%;
	left: calc(50% - 34.5px);
	-webkit-animation: slide-top 1s cubic-bezier(0.55, 0.68, 0.085, 0.53)
		infinite alternate both;
	animation: slide-top 1s cubic-bezier(0.55, 0.68, 0.085, 0.53) infinite
		alternate both;
	@-webkit-keyframes slide-top {
		0% {
			-webkit-transform: translateY(0);
			transform: translateY(0);
		}
		100% {
			-webkit-transform: translateY(-100px);
			transform: translateY(-100px);
		}
	}
	@keyframes slide-top {
		0% {
			-webkit-transform: translateY(0);
			transform: translateY(0);
		}
		100% {
			-webkit-transform: translateY(-100px);
			transform: translateY(-100px);
		}
	}

	@media screen and (min-width: 680px) {
		top: 75%;
	}
`;

const Arrow = styled.svg`
	display: block;
	margin: 0 auto;
	stroke-width: 3px;
`;

export default function ArrowDown() {
	return (
		<Container>
			<Arrow
				width='69'
				height='18'
				viewBox='0 0 69 18'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className='arrow-down'
			>
				<path
					d='M1 1L35 17M34.5741 16.9997L68.5744 1.00036'
					stroke='var(--main-fg-color)'
				/>
			</Arrow>

			<Arrow
				width='69'
				height='18'
				viewBox='0 0 69 18'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className='arrow-down'
			>
				<path
					d='M1 1L35 17M34.5741 16.9997L68.5744 1.00036'
					stroke='var(--main-fg-color)'
				/>
			</Arrow>
			<Arrow
				width='69'
				height='18'
				viewBox='0 0 69 18'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className='arrow-down'
			>
				<path
					d='M1 1L35 17M34.5741 16.9997L68.5744 1.00036'
					stroke='var(--main-fg-color)'
				/>
			</Arrow>
		</Container>
	);
}
