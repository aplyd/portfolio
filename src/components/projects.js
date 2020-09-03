import React from 'react';
import styled from 'styled-components';
import { Spacer } from './globalStyle';
import ProjectCard from './projectCard';
import ScrollText from './scrollText';

const Container = styled.div`
	position: relative;
	margin: -260px auto 0 auto;
	max-width: 80%;
	@media screen and (max-width: 700px) {
		max-width: 100%;
		padding: 0 16px;
	}
`;

const Title = styled.h2`
	text-transform: uppercase;
	font-weight: 700;
	/* font-size: 3.6rem; */
	margin: 0 auto;
	max-width: 70rem;
	color: var(--accent-light);
`;

const ProjectCardContainer = styled.div`
	margin: 0 auto;
	width: 100%;
`;

// const LowerProjectCardsContainer = styled(ProjectCardsContainer)`
// 	grid-template-rows: 1fr;
// `;

const HorizontalLine = styled.div`
	height: 2px;
	border-radius: 50px;
	background-color: var(--accent-light);
	width: 100%;
`;

// const MobileHorizontalLine = styled(HorizontalLine)`
// 	display: none;
// 	display: block;
// `;

// const VerticalLine = styled.div`
// 	width: 2px;
// 	background-color: black;
// 	height: 100%;
// 	display: none;
// `;

export default function Projects() {
	const battleship = {
		title: 'Battleship',
		location: '/battleship',
		about:
			'A single player, digital version of the popular board game, Battleship. I learned a lot from this project and plan to improve the UI. Randomly generating ship placement on the board was easily the most difficult part of this project.',
		tools: ['React', 'Styled Components'],
		repo: 'https://github.com/aplyd/battleship',
		demo: 'https://aplyd.github.io/battleship/'
	};

	const wheresWaldo = {
		title: "Where's Waldo",
		location: '/wheres-waldo',
		about:
			"A timed, digital version of one of my favorite childhood games, Where's Waldo. The timer is done using Firebase Functions on the backend to prevent users from being able to edit their time.",
		tools: [
			'React',
			'React Router',
			'Styled Components',
			'Firebase Firestore',
			'Firebase Functions'
		],
		repo: 'https://github.com/aplyd/wheres-waldo',
		demo: 'https://aplyd.github.io/wheres-waldo/'
	};

	const fpotfp = {
		title: 'Front Page',
		location: '/fpotfp',
		about:
			'A simplified Reddit clone without subreddits. Users are able to create accounts via email and and password, post photos and videos, comment on posts as well as vote on posts and other comments. Some of the more challenging parts of this project were validating media uploads and displaying posts/comments.',
		tools: [
			'React',
			'React Router',
			'Styled Components',
			'Firebase Firestore',
			'Firebase Authentication'
		],
		image: 'image',
		repo: 'https://github.com/aplyd/front-page-of-the-front-page',
		demo: 'https://aplyd.github.io/front-page-of-the-front-page/'
	};

	return (
		<>
			<Container id='projects'>
				<Spacer height={'small'} />

				<ProjectCardContainer>
					<ProjectCard {...fpotfp} />
				</ProjectCardContainer>

				<ProjectCardContainer>
					<ProjectCard {...battleship} />
				</ProjectCardContainer>

				<ProjectCardContainer>
					<ProjectCard {...wheresWaldo} />
				</ProjectCardContainer>
				<Spacer height={'xlarge'} />
			</Container>
		</>
	);
}
