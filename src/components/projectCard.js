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
	color: var(--main-fg-color);
	text-transform: uppercase;
`;

const PAbout = styled.p`
	color: var(--main-fg-color);
	line-height: 1.3em;
	min-height: 70px;
`;

const LIicon = styled.svg`
	color: black;
	position: relative;
	top: 4px;
	margin-right: 4px;

	/* font-weight: 500; */
`;

const ToolsTitle = styled.p`
	color: var(--accent-light);
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
		color: black;
		/* font-weight: 300; */
	}
`;

const BtnsContainer = styled.div`
	float: right;
`;

const Btn = styled.button`
	border-radius: 50px;
	border: solid 3px black;
	padding: 14px 48px;
	font-weight: bold;
	text-transform: uppercase;
`;

const RepoBtn = styled(Btn)`
	border-color: var(--accent-light);
	color: var(--accent-light);
	font-weight: 700;
	background-color: var(--main-bg-color);
`;
const DemoBtn = styled(Btn)`
	font-weight: 700;
	margin-left: 12px;
	background-color: var(--accent-color);
	color: var(--accent-light);
	border-color: var(--accent-color);
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
