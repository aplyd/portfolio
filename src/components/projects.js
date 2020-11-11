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
	border-radius: var(--circular);
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
			'Built in React using class components. The board states were stored as arrays and custom helper functions were used to convert the array indexes into coordinates. Randomly placing computer ships challenged my algorithm and data structure abilities.',
		tools: ['React', 'Styled Components'],
		repo: 'https://github.com/aplyd/battleship',
		demo: 'https://aplyd.github.io/battleship/'
	};

	const wheresWaldo = {
		title: "Where's Waldo",
		location: '/wheres-waldo',
		about:
			'An online, timed version of the classic Where’s Waldo books. How long each puzzle took was calculated on the backend using Firebase Functions to prevent users from altering their times. The code determining where users click on an image is reusable and works on images of any aspect ratio.',
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
			'A Reddit clone using React and Firebase. Users are able to create an account, make posts/ comments and vote on other user posts/comments. Since the number of posts and comments were unknown, I used recursion heavily throughout the project both in mutating data and rendering components. Styled-components were also used to leverage scoped css.',
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
