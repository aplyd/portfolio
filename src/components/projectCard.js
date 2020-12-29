import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { GiCircle } from 'react-icons/gi';
import { Spacer, BtnSmall } from './globalStyle';
import Image from './image';

const Container = styled.div`
	width: 100%;
	max-width: 100%;
	position: relative;
	display: grid;
	grid-template-columns: minmax(350px, 30%) minmax(auto, 70%);
	grid-template-rows: auto 1fr;
	@media screen and (max-width: 1024px) {
		grid-template-columns: 1fr;
		grid-template-rows: 60px auto 1fr;
	}
`;

const Words = styled.div`
	height: 100%;
	width: 100%;
	margin: 0 auto;
	grid-column: 1;
	@media screen and (max-width: 1024px) {
		grid-row: 3;
	}
	@media screen and (max-width: 485px) {
		padding: 0 16px;
	}
`;

const Title = styled.div`
	&& > h3 {
		padding-top: 0.2rem;
		font-weight: 500;
		color: var(--accent-light);
		text-transform: uppercase;
	}
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
	/* margin-left: auto; */
	display: flex;
	justify-content: space-between;
`;

const ProjectPreviewContainer = styled.div`
	grid-column: 2;
	grid-row: 1 / 3;
	@media screen and (max-width: 1024px) {
		grid-column: 1;
		grid-row: 2;
	}
`;

const PreviewImage = styled(Image)``;

const ProjectCard = ({ title, about, tools, repo, demo, image }) => {
	return (
		<Container>
			<Title>
				<h3>{title}</h3>
			</Title>
			<Words>
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
			<ProjectPreviewContainer>
				<a href={demo} target='_blank' rel='noopener noreferrer'>
					<PreviewImage fileName={image} />
				</a>
			</ProjectPreviewContainer>
		</Container>
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
