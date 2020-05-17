import React from 'react';
import styled from 'styled-components';
import ScrollText from './scrollText';

const Frame = styled.div`
	height: 200px;
	width: 100%;
	/* overflow: hidden; */
	border-top: 2px solid red;
	border-bottom: 2px solid red;
	display: flex;
	flex-direction: row;
`;

export default function scrollTextFrame() {
	return (
		<Frame>
			<ScrollText />
		</Frame>
	);
}
