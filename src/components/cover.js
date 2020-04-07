import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	background: black;
`;

const CoverContainer = styled.div`
	width: 80%;
	max-width: 960px;
	margin: 0 auto;
`;

const CoverDiv = styled.div`
	width: 100%;
	height: 560px;
	display: grid;
	grid-template-columns: repeat(8, 1fr);
	grid-template-rows: 1fr 1fr;
`;

const CoverIntro = styled.div`
	color: white;
	grid-column: 1;
	grid-row: 1;
	& > h2 {
		margin: -2px 0;
		font-size: 1.5rem;
	}
`;

const CoverTextOutline = styled.div`
	background: black;
	color: white;
	outline: 1px solid white;
	grid-row: 2;
	grid-column: 4 / 9;
	margin-bottom: 20px;
	@media (max-width: 425px) {
		grid-column: 3 /9;
	}
	& > h2 {
		margin-left: -40px;
		font-weight: bold;
	}
`;

const Creative = styled.h2`
	padding-top: 36px;
	font-size: 1.6rem;
`;

const Highlight = styled.h2`
	& > mark {
		background-color: white;
		color: black;
	}
`;

const My = styled.h2`
	padding-top: 20px;
`;

export default function Cover() {
	return (
		<Container>
			<CoverContainer>
				<CoverDiv>
					<CoverIntro>
						<My>my</My>
						<h2>name</h2>
						<h2>is</h2>
						<Highlight>
							<mark>austin</mark>
						</Highlight>
						<Highlight>
							<mark>ftacnik</mark>
						</Highlight>
					</CoverIntro>
					<CoverTextOutline>
						<Creative>creative</Creative>
						<h2>front-end</h2>
						<h2>developer</h2>
					</CoverTextOutline>
				</CoverDiv>
			</CoverContainer>
		</Container>
	);
}
