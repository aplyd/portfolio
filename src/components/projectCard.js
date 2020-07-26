import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { GiCircle } from 'react-icons/gi';
import { Spacer, BtnLg } from './globalStyle';

const ProjectContainer = styled.div`
	width: 100%;
	position: relative;
`;

const Words = styled.div`
	height: 480px;
	width: 100%;
	padding: 48px 24px 0 24px;
	float: ${props => (props.right ? 'right' : null)};
	max-width: 504px;

	@media screen and (max-width: 800px) {
		float: none;
		padding: 24px 0;
		margin: 0 auto;
	}
`;

const PTitle = styled.h1`
	font-weight: bold;
	color: var(--main-fg-color);
	text-transform: uppercase;
`;

const PAbout = styled.p`
	color: var(--main-fg-color);
	line-height: 1.3em;
	min-height: 70px;
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
	padding: 0 16px 8px 0;
	font-size: 18px;
	display: flex;
	flex-direction: row;
	&& > p {
		color: var(--main-fg-color);
		font-weight: 300;
	}
`;

const BtnsContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
`;

const Btn = styled.button`
	border-radius: 50px;
	border: solid 3px black;
	padding: 6px 44px;
	font-weight: bold;
	text-transform: uppercase;
`;

const RepoBtn = styled(Btn)`
	font-weight: 700;
`;
const DemoBtn = styled(Btn)`
	font-weight: 700;
	margin-left: 12px;
	background-color: var(--main-fg-color);
	color: var(--main-bg-color);
`;

const ProjectCard = ({ right, title, about, tools, paddingLeft }) => {
	return (
		<ProjectContainer>
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
