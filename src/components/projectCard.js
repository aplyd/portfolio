import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { GiCircle } from 'react-icons/gi';
import { Spacer, BtnLg } from './globalStyle';

const ProjectContainer = styled.div`
	width: 100%;
	position: relative;
	max-width: 70rem;
	margin: 0 auto;
`;

const InnerContainer = styled.div`
	width: 100%;
	max-width: 60rem;
	margin: 0 auto;
`;

const Words = styled.div`
	height: 480px;
	width: 100%;
	padding: 48px 24px 0 24px;
	/* max-width: 50em; */
	float: none;
	padding: 24px 0;
	margin: 0 auto;
`;

const PTitle = styled.h3`
	font-weight: 500;
	color: var(--dark-color);
	text-transform: uppercase;
`;

const PAbout = styled.p`
	color: var(--dark-color);
	line-height: 1.3em;
	min-height: 70px;
`;

const LIicon = styled.svg`
	color: var(--dark-color);
	position: relative;
	top: 4px;
	margin-right: 4px;

	/* font-weight: 500; */
`;

const ToolsTitle = styled.p`
	color: var(--dark-color);
	text-transform: uppercase;
	padding-bottom: 16px;
	font-weight: bold;
`;

const Tool = styled.div`
	padding: 0 16px 8px 0;
	font-size: 1.8rem;
	display: flex;
	flex-direction: row;
	&& > p {
		color: var(--dark-color);
	}
`;

const BtnsContainer = styled.div`
	float: right;
	width: 100%;
	max-width: 26rem;
	display: flex;
	justify-content: space-between;
`;

const Btn = styled.button`
	border-radius: 5rem;
	border: none;
	height: 5rem;
	width: 12rem;
	text-transform: uppercase;
	/* color: var(--accent-light);
	background-color: var(--light-color);
	box-shadow: 16px 16px 32px #a0a0a0, -16px -16px 32px #d8d8d8; */
`;

const RepoBtn = styled(Btn)`
	border: solid 2px var(--dark-color);
	color: var(--dark-color);
	background-color: var(--light-color);
`;
const DemoBtn = styled(Btn)`
	background-color: var(--dark-color);
	color: var(--light-color);
	border: solid 2px var(--dark-color);
`;

const ProjectCard = ({ right, title, about, tools, paddingLeft }) => {
	return (
		<ProjectContainer>
			<Spacer height={'large'} />
			<Words right={right} paddingLeft={paddingLeft}>
				{/* <Spacer height={'medium'} /> */}
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
				<BtnsContainer>
					<RepoBtn>Repo</RepoBtn>
					<DemoBtn>Demo</DemoBtn>
				</BtnsContainer>
			</Words>
			<Spacer height={'large'} />
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
	paddingLeft: PropTypes.bool
};

export default ProjectCard;
