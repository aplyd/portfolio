import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	height: 360px;
`;

const ItemContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 40px;
	@media only screen and (max-width: 600px) {
		grid-template-columns: 1fr;
	}
`;

const Item = styled.div`
	background-color: var(--main-fg-color);
	height: 260px;
	cursor: pointer;
	transition: transform 1s ease-in-out;
	&&:hover {
		transform: translateY(5px);
		transition: transform 0.3s ease-in-out;
	}
	&& > h2,
	p {
		padding: 8px;
		color: var(--main-bg-color);
	}
`;

const ItemImage = styled.div`
	background: lightgray;
	height: 120px;
`;

const Title = styled.h1`
	padding-top: 8px;
	padding-bottom: 24px;
	color: var(--main-fg-color);
`;

export default function Projects() {
	return (
		<Container>
			<Title>Recent Projects</Title>
			<ItemContainer>
				<Item>
					<ItemImage />
					<h2>Battleship</h2>
					<p>
						A digital remake of the classic boardgame. Technologies
						used: React
					</p>
				</Item>
				<Item>
					<ItemImage />
					<h2>Front Page of The Front Page</h2>
					<p>
						A simplified clone of a popular website (Reddit).
						Technologies used: React, Firebase
					</p>
				</Item>
			</ItemContainer>
		</Container>
	);
}
