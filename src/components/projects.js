import React from 'react';
import styled from 'styled-components';
import { Spacer } from './globalStyle';
import ProjectCard from './projectCard';
import { useWindowWidth } from '../hooks/useWindowWidth';

const Container = styled.div`
	position: relative;
	margin: 0 auto;
`;

const ProjectCardsContainer = styled.div`
	margin: 0 auto;
	max-width: 960px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr;
	@media screen and (max-width: 975px) {
		padding: 0 16px;
	}
	@media screen and (max-width: 800px) {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr;
	}
`;

const BorderLine = styled.div`
	height: 2px;
	background-color: var(--main-fg-color);
	width: 100%;
`;

export default function Projects() {
	const [width, setWidth] = useState();
	useWindowWidth(setWidth);
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
		<Container>
			<BorderLine></BorderLine>
			{width > 800 ? (
				<>
					<ProjectCardsContainer>
						<ProjectCard
							{...fpotfp}
							borderRight={'solid 1px black'}
						/>
						<ProjectCard
							{...wheresWaldo}
							borderLeft={'solid 1px black'}
						/>
					</ProjectCardsContainer>
					<BorderLine></BorderLine>
					<ProjectCardsContainer>
						<ProjectCard
							{...battleship}
							borderRight={'solid 2px black'}
						/>
					</ProjectCardsContainer>
				</>
			) : (
				<ProjectCardsContainer>
					{/* TODO mobile layout */}
				</ProjectCardsContainer>
			)}
		</Container>
	);
}
