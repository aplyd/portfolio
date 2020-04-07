import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	padding: 40px 0;
`;

const Arrow = styled.svg`
	display: block;
	margin: 0 auto;
	stroke-width: 2px;
`;

export default function ArrowDown() {
	return (
		<Container className='arrow-down-container'>
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
					stroke='black'
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
					stroke='black'
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
					stroke='black'
				/>
			</Arrow>
		</Container>
	);
}
