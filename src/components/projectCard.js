import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { GiCircle } from 'react-icons/gi';
import { Spacer, BtnSmall } from './globalStyle';

const ProjectContainer = styled.div`
	width: 100%;
	position: relative;
	max-width: 80rem;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr;
	@media screen and (max-width: 750px) {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr;
	}
`;

const Words = styled.div`
	height: 100%;
	/* min-height: 532px; */
	width: 100%;
	margin: 0 auto;
	grid-column: 1;
	@media screen and (max-width: 750px) {
		grid-row: 2;
	}
`;

const PTitle = styled.h3`
	font-weight: 500;
	color: var(--accent-light);
	text-transform: uppercase;
`;

const PAbout = styled.p`
	color: var(--accent-light);
	line-height: 1.3em;
	min-height: 70px;
`;

const LIicon = styled.svg`
	color: var(--accent-light);
	position: relative;
	top: 4px;
	margin-right: 4px;
	margin-left: 24px;
	/* font-weight: 500; */
`;

const ToolsTitle = styled.p`
	color: var(--accent-light);
	text-transform: uppercase;
	padding-bottom: 24px;
	/* padding-left: 24px; */
	font-weight: bold;
`;

const Tool = styled.div`
	padding: 0 16px 8px 0;
	font-size: 1.8rem;
	display: flex;
	flex-direction: row;
`;

const ToolP = styled.p`
	color: var(--accent-light);
`;

const BtnsContainer = styled.div`
	max-width: 26rem;
	margin-left: auto;
	display: flex;
	justify-content: space-between;
`;

const ProjectPreviewContainer = styled.div`
	grid-column: 2;
	background: blue;
	@media screen and (max-width: 750px) {
		grid-column: 1;
		grid-row: 1;
	}
`;

const ProjectCard = ({ title, about, tools, repo, demo }) => {
	return (
		<ProjectContainer>
			<Words>
				<PTitle>{title}</PTitle>

				<Spacer height={'medium'} />
				<PAbout>{about}</PAbout>

				<Spacer height={'medium'} />
				<ToolsTitle>DEVELOPMENT TOOLS</ToolsTitle>

				{tools.map((t, i) => {
					return (
						<Tool key={i}>
							<LIicon as={GiCircle} />
							<ToolP>{t}</ToolP>
						</Tool>
					);
				})}
				<Spacer height={'large'} />
				<BtnsContainer>
					<a href={repo} target='_blank' rel='noopener noreferrer'>
						<BtnSmall
							backgroundColor={'rgba(255, 255, 255, 0)'}
							color={'var(--accent-light)'}
							borderColor={'var(--accent-light)'}
							aria-label='link to project repository'
						>
							Code
						</BtnSmall>
					</a>
					<a href={demo} target='_blank' rel='noopener noreferrer'>
						<BtnSmall
							backgroundColor={'var(--accent-light)'}
							color={'var(--color-light)'}
							borderColor={'var(--accent-light)'}
							aria-label='link to project demo'
						>
							Demo
						</BtnSmall>
					</a>
				</BtnsContainer>
			</Words>
			<ProjectPreviewContainer></ProjectPreviewContainer>
		</ProjectContainer>
	);
};

ProjectCard.propTypes = {
	about: PropTypes.any,
	image: PropTypes.any,
	title: PropTypes.any,
	right: PropTypes.bool,
	tools: PropTypes.any,
	borderRight: PropTypes.string,
	borderLeft: PropTypes.string,
	paddingLeft: PropTypes.bool,
	repo: PropTypes.string,
	demo: PropTypes.string
};

export default ProjectCard;
