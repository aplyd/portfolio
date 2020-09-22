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
	@media screen and (max-width: 800px) {
		padding: 0 16px;
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
			<Container id='projects'>
				<Spacer height={'xlarge'} />
				<Spacer height={'xlarge'} />
				<Spacer height={'xlarge'} />
				{[fpotfp, battleship, wheresWaldo].map(project => {
					return (
						<React.Fragment key={project.title}>
							<ProjectCardContainer>
								<ProjectCard {...project} />
							</ProjectCardContainer>
							<Spacer height={'xlarge'} />
						</React.Fragment>
					);
				})}
			</Container>
		</Background>
	);
}
