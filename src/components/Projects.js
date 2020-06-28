import React from 'react';
import styled from 'styled-components';
import { Spacer } from './globalStyle';
import ProjectCard from './projectCard';

const ProjectCardsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
	grid-gap: 16px;
	margin-left: 9px;
	@media screen and (max-width: 975px) {
		padding: 0 16px;
	}
`;

const ProjectsTitle = styled.h1`
	color: var(--main-bg-color);
	text-transform: uppercase;
	text-shadow: -1px -1px 0 var(--main-fg-color),
		1px -1px 0 var(--main-fg-color), -1px 1px 0 var(--main-fg-color),
		1px 1px 0 var(--main-fg-color);
`;

export default function Projects() {
	const battleship = {
		title: 'Battleship',
		location: '/battleship',
		about:
			'Qui esse ut ipsum qui consequat culpa consectetur ex. Occaecat fugiat laboris non dolor consequat proident irure culpa.',
		tools: ['React', 'Styled-components', 'my brain'],
		image: 'image url'
	};

	const wheresWaldo = {
		title: "Where's Waldo",
		location: '/wheres-waldo',
		about: 'Est mollit cillum nulla quis elit consequat sit ullamco.',
		tools: [
			'React',
			'Styled-components',
			'firebase firestore',
			'firebase cloud functions',
			'resize observer'
		],
		image: 'imgae url'
	};

	const fpotfp = {
		title: 'Front Page of the Front Page',
		location: 'fpotfp',
		about: 'Velit officia sunt sunt do.',
		tools: [
			'React',
			'Styled-components',
			'firebase firestore',
			'custom hooks'
		],
		image: 'image'
	};

	return (
		<>
			<Spacer height={'large'} />
			<ProjectsTitle>Recent Projects</ProjectsTitle>
			<Spacer height={'medium'} />
			<ProjectCardsContainer>
				<ProjectCard {...battleship} />
				<ProjectCard {...wheresWaldo} />
				<ProjectCard {...fpotfp} />
			</ProjectCardsContainer>
		</>
	);
}
