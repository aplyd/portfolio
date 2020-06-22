import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { GiCircle } from 'react-icons/gi';
import { Spacer } from './globalStyle';

const ProjectContainer = styled.div`
	background-color: var(--main-bg-color);
	border: solid 2px var(--main-fg-color);

	/* box-shadow: -1.5px -1.5px var(--main-fg-color),
		-3px -3px var(--main-fg-color), -4.5px -4.5px var(--main-fg-color),
		-6px -6px var(--main-fg-color), -7.5px -7.5px var(--main-fg-color),
		-9px -9px var(--main-fg-color), -10.5px -10.5px var(--main-fg-color),
		-12px -12px var(--main-fg-color); */

	box-shadow: -1px -1px var(--main-fg-color), -2px -2px black,
		-3px -3px var(--main-fg-color), -4px -4px var(--main-fg-color),
		-5px -5px var(--main-fg-color), -6px -6px var(--main-fg-color),
		-7px -7px var(--main-fg-color), -8px -8px var(--main-fg-color);
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
	color: var(--main-fg-color);
	text-transform: uppercase;
`;

const PAbout = styled.p`
	color: var(--main-fg-color);
	font-size: 24px;
	line-height: 1.3em;
`;

const LIicon = styled.svg`
	color: var(--main-fg-color);
	position: relative;
	top: 2px;
`;

const ToolsTitle = styled.p`
	color: var(--main-fg-color);
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
		color: var(--main-fg-color);
	}
`;

const ProjectCard = ({ location, title, about, tools, image }) => {
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

ProjectCard.propTypes = {
	about: PropTypes.any,
	image: PropTypes.any,
	title: PropTypes.any,
	location: PropTypes.any,
	tools: PropTypes.any
};

export default ProjectCard;