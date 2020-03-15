import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	margin-top: 140px;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const CoverDiv = styled.div`
	background: black;
	width: 90vw;
	height: 90vw;
	display: grid;
	grid-template-columns: 24px 1fr 1fr 1fr 1fr 24px;
	grid-template-rows: 24px 1fr 1fr 24px;
`;

const CoverIntro = styled.div`
	color: white;
	grid-column: 2;
	grid-row: 2;
	& > h2 {
		margin: -2px 0;
		font-size: 1.5rem;
	}
`;

const CoverTextOutline = styled.div`
	background: black;
	color: white;
	outline: 1px solid white;
	grid-row: 3;
	grid-column: 3 / 6;
	& > h2 {
		margin-left: -40px;
		font-weight: bold;
	}
`;

const Creative = styled.h2`
	padding-top: 16px;
	font-size: 1.6rem;
`;

export default function Cover() {
	return (
		<Container>
			<CoverDiv>
				<CoverIntro>
					<h2>hi,</h2>
					<h2>i'm</h2>
					<h2>austin</h2>
					<h2>ftacnik</h2>
				</CoverIntro>
				<CoverTextOutline>
					<Creative>creative</Creative>
					<h2>front-end</h2>
					<h2>developer</h2>
				</CoverTextOutline>
			</CoverDiv>
		</Container>
	);
}
