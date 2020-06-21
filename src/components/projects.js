import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Spacer } from './globalStyle';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { GiCircle } from 'react-icons/gi';

const ProjectCardsContainer = styled.div`
	display: grid;
	padding: 0 16px;
	grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
	grid-gap: 16px;
`;

const ProjectContainer = styled.div`
	background-color: white;
	border: solid 2px black;

	-webkit-animation: box-shadow-pop-tl 0.6s both;
	animation: box-shadow-pop-tl 0.6s both;

	@-webkit-keyframes box-shadow-pop-tl {
		0% {
			box-shadow: 0 0 black, 0 0 black, 0 0 black, 0 0 black, 0 0 black,
				0 0 black, 0 0 black, 0 0 black;
			-webkit-transform: translateX(0) translateY(0);
			transform: translateX(0) translateY(0);
		}
		100% {
			box-shadow: -1px -1px black, -2px -2px black, -3px -3px black,
				-4px -4px black, -5px -5px black, -6px -6px black,
				-7px -7px black, -8px -8px black;
			-webkit-transform: translateX(8px) translateY(8px);
			transform: translateX(8px) translateY(8px);
		}
	}
	@keyframes box-shadow-pop-tl {
		0% {
			box-shadow: 0 0 black, 0 0 black, 0 0 black, 0 0 black, 0 0 black,
				0 0 black, 0 0 black, 0 0 black;
			-webkit-transform: translateX(0) translateY(0);
			transform: translateX(0) translateY(0);
		}
		100% {
			box-shadow: -1px -1px black, -2px -2px black, -3px -3px black,
				-4px -4px black, -5px -5px black, -6px -6px black,
				-7px -7px black, -8px -8px black;
			-webkit-transform: translateX(8px) translateY(8px);
			transform: translateX(8px) translateY(8px);
		}
	}
`;

const ProjectsTitle = styled.h1`
	color: white;
	text-transform: uppercase;
	text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
		1px 1px 0 black;
`;

const Words = styled.div`
	height: 100%;
`;

const Preview = styled.div`
	background-color: black;
	color: black;
	height: 100%;
`;

const PTitle = styled.h1`
	font-weight: bold;
	color: black;
	text-transform: uppercase;
`;

const PAbout = styled.p`
	color: black;
	font-size: 24px;
	line-height: 1.3em;
`;

const LIicon = styled.svg`
	color: black;
	position: relative;
	top: 2px;
`;

const ToolsTitle = styled.p`
	color: black;
	text-transform: uppercase;
	padding-bottom: 16px;
	font-weight: bold;
`;

const Tool = styled.div`
	padding: 0 16px 8px 32px;
	font-size: 18px;
	display: flex;
	flex-direction: row;
	&& > p {
		color: black;
	}
`;

const Test = styled.div`
	height: 50px;
	width: 50px;
	margin-top: 50px;
	background-color: tan;
`;

const Project = ({ location, title, about, tools, image }) => {
	return (
		<AnchorLink to={location} title={title}>
			<ProjectContainer>
				<Words>
					<Spacer height={'medium'} />
					<PTitle>{title}</PTitle>

					<Spacer height={'medium'} />
					<PAbout>{about}</PAbout>

					<Spacer height={'medium'} />

					<ToolsTitle>DEVELOPMENT TOOLS</ToolsTitle>

					{tools.map((t, i) => {
						return (
							<Tool key={i}>
								<LIicon as={GiCircle} />
								<p>{t}</p>
							</Tool>
						);
					})}
					<Spacer height={'medium'} />
				</Words>
				<Preview></Preview>
			</ProjectContainer>
		</AnchorLink>
	);
};

Project.propTypes = {
	about: PropTypes.any,
	image: PropTypes.any,
	title: PropTypes.any,
	location: PropTypes.any,
	tools: PropTypes.any
};

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

	const projectsArr = [1, 2, 3];

	return (
		<>
			<Spacer height={'medium'} />
			<ProjectsTitle>Recent Projects</ProjectsTitle>
			<ProjectCardsContainer>
				<Project {...battleship} />
				<Project {...wheresWaldo} />
				<Project {...fpotfp} />
			</ProjectCardsContainer>
			<Test />
		</>
	);
}
