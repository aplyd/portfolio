import React from 'react';
import styled from 'styled-components';
import { Spacer } from './globalStyle';
import ProjectCard from './projectCard';
import ScrollText from './scrollText';

const Container = styled.div`
	position: relative;
	margin: -260px auto 0 auto;
	max-width: 80%;
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

// const HorizontalLine = styled.div`
// 	height: 6px;
// 	border-radius: 50px;
// 	background-color: var(--accent-light);
// 	width: 100%;
// `;

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
		<>
			<Container id='projects'>
				<Spacer height={'large'} />
				{/* <HorizontalLine /> */}
				{/* <Spacer height={'large'} /> */}
				<Spacer height={'large'} />
				<ProjectCardContainer>
					<ProjectCard {...fpotfp} />
					{/* <VerticalLine /> */}
					{/* <MobileHorizontalLine /> */}
				</ProjectCardContainer>

				<Spacer height={'large'} />
				<ProjectCardContainer>
					<ProjectCard {...battleship} />
				</ProjectCardContainer>

				{/* <HorizontalLine /> */}
				<Spacer height={'large'} />
				<ProjectCardContainer>
					<ProjectCard {...wheresWaldo} />
					{/* <VerticalLine /> */}
				</ProjectCardContainer>
				<Spacer height={'large'} />
			</Container>
		</>
	);
}
