import React from 'react';
import styled from 'styled-components';
import { Spacer } from './globalStyle';
import ProjectCard from './projectCard';

const Background = styled.div`
	width: 100%;
	height: 100%;
`;

const Container = styled.div`
	position: relative;
	margin: -260px auto 0 auto;
	width: 100%;
	max-width: 80rem;
	@media screen and (max-width: 816px) {
		padding: 0 16px;
	}
	@media screen and (max-width: 485px) {
		padding: 0;
	}
`;

const FrostedBackground = styled.div`
	background-color: rgba(255, 255, 255, 0.15);
	backdrop-filter: blur(5px);
	border-radius: 40px;
	padding: 24px;
	overflow: hidden;
	@media screen and (max-width: 485px) {
		padding: 24px 16px;
	}
`;

const ProjectCardContainer = styled.div`
	margin: 0 auto;
	width: 100%;
`;

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
			'A simplified Reddit clone without subreddits. Users are able to create accounts via email and password, post photos and videos, comment and vote on posts and other comments. Some of the more challenging parts of this project were validating media uploads and displaying posts/comments.',
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
		<Background>
			<Container>
				<Spacer height={'xlarge'} />
				<Spacer height={'xlarge'} />
				<Spacer height={'xlarge'} />
				<FrostedBackground id='projects'>
					<Spacer height={'medium'} />
					<ProjectCardContainer>
						<ProjectCard {...fpotfp} />
					</ProjectCardContainer>

					<Spacer height={'xlarge'} />
					<ProjectCardContainer>
						<ProjectCard {...battleship} />
					</ProjectCardContainer>

					<Spacer height={'xlarge'} />
					<ProjectCardContainer>
						<ProjectCard {...wheresWaldo} />
					</ProjectCardContainer>
					<Spacer height={'medium'} />
				</FrostedBackground>
				<Spacer height={'xlarge'} />
			</Container>
		</Background>
	);
}
