import React from 'react';
import styled from 'styled-components';
import { Spacer } from './globalStyle';
import ProjectCard from './projectCard';
import ScrollText from './scrollText';

const Container = styled.div`
	position: relative;
	margin: 0 auto;
	max-width: 80%;
`;

const Title = styled.h2`
	text-transform: uppercase;
	font-weight: 700;
	/* font-size: 3.6rem; */
	margin: 0 auto;
`;

const ProjectCardsContainer = styled.div`
	margin: 0 auto;
	width: 100%;
	display: grid;
`;

const LowerProjectCardsContainer = styled(ProjectCardsContainer)`
	grid-template-rows: 1fr;
`;

const HorizontalLine = styled.div`
	height: 2px;
	background-color: var(--main-fg-color);
	width: 100%;
`;

const MobileHorizontalLine = styled(HorizontalLine)`
	display: none;
	display: block;
`;

const VerticalLine = styled.div`
	width: 2px;
	background-color: black;
	height: 100%;
	display: none;
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
		tools: ['React', 'Styled-components', 'firebase firestore'],
		image: 'imgae url'
	};

	const fpotfp = {
		title: 'Front Page',
		location: 'fpotfp',
		about: 'Velit officia sunt sunt do.',
		tools: ['React', 'Styled-components', 'firebase firestore'],
		image: 'image'
	};

	return (
		<Container name='projects'>
			{/* <Spacer height={'xlarge'} /> */}

			{/* <Title>Projects</Title>
			<Spacer height={'medium'} />
			<HorizontalLine /> */}
			<Spacer height={'large'} />
			<ProjectCardsContainer>
				<ProjectCard {...fpotfp} right={true} />
				<VerticalLine />
				<MobileHorizontalLine />
				<ProjectCard {...battleship} paddingLeft={true} />
			</ProjectCardsContainer>

			<HorizontalLine />
			<LowerProjectCardsContainer>
				<ProjectCard {...wheresWaldo} right={true} />
				<VerticalLine />
			</LowerProjectCardsContainer>
			<Spacer height={'large'} />
		</Container>
	);
}
