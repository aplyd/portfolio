import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Spacer } from './globalStyle';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { GiCircle } from 'react-icons/gi';

const ProjectContainer = styled.div`
	display: grid;
	grid-template-columns: 40% 60%;
	grid-template-rows: 650px;
	@media screen and (max-width: 800px) {
		grid-template-columns: 1fr;
		grid-template-rows: 650px 1fr;
	}
`;

const Words = styled.div`
	height: 100%;

	&& > p {
		color: white;
	}
`;

const Preview = styled.div`
	color: white;
	height: 100%;
`;

const PTitle = styled.p`
	color: white;
	font-size: 48px;
`;

const PAbout = styled.p`
	color: white;
	font-size: 24px;
	line-height: 1.4em;
`;

const LIicon = styled.svg``;
const Tool = styled.div`
	font-size: 18px;
	display: flex;
	flex-direction: row;
	&& > p {
		color: white;
	}
`;

const Project = ({ location, title, about, tools, image }) => {
	return (
		<AnchorLink to={location} title={title}>
			<ProjectContainer>
				<Words>
					<Spacer height={'large'} />
					<PTitle>{title}</PTitle>

					<Spacer height={'medium'} />
					<PAbout>{about}</PAbout>

					<Spacer height={'medium'} />
					<p>DEVELOPMENT TOOLS</p>

					{tools.map((t, i) => {
						return (
							<Tool key={i}>
								<LIicon as={GiCircle} />
								<p>{t}</p>
							</Tool>
						);
					})}
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

	return (
		<>
			<Project {...battleship} />
		</>
	);
}
