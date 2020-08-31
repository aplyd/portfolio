import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { GiCircle } from 'react-icons/gi';
import { Spacer, BtnLg } from './globalStyle';
import VisibilitySensor from 'react-visibility-sensor';
import { useAnimation, motion } from 'framer-motion';

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

const PTitle = styled(motion.h3)`
	font-weight: 500;
	color: var(--accent-light);
	text-transform: uppercase;
`;

const PAbout = styled(motion.p)`
	color: var(--accent-light);
	line-height: 1.3em;
	min-height: 70px;
`;

const LIicon = styled.svg`
	color: var(--accent-light);
	position: relative;
	top: 4px;
	margin-right: 4px;

	/* font-weight: 500; */
`;

const ToolsTitle = styled(motion.p)`
	color: var(--accent-light);
	text-transform: uppercase;
	padding-bottom: 16px;
	font-weight: bold;
`;

const Tool = styled(motion.div)`
	padding: 0 16px 8px 0;
	font-size: 1.8rem;
	display: flex;
	flex-direction: row;
`;

const ToolP = styled.p`
	color: var(--accent-light);
`;

const BtnsContainer = styled(motion.div)`
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
	border: solid 1px var(--accent-light);
	color: var(--accent-light);
	background-color: var(--light-color);
	&&:hover {
		border: solid 1px var(--accent-light);
		color: var(--accent-light);
		background-color: var(--light-color);
	}
`;
const DemoBtn = styled(Btn)`
	background-color: var(--accent-light);
	color: var(--light-color);
	border: solid 1px var(--accent-light);
	&&:hover {
		background-color: var(--accent-light);
		color: var(--light-color);
		border: solid 1px var(--accent-light);
	}
`;

const ProjectCard = ({ title, about, tools, repo, demo }) => {
	const controls = useAnimation();
	const handleScroll = isVisible => {
		if (isVisible) {
			controls.start(i => ({
				opacity: 1,
				y: 0,
				transition: {
					delay: i * 0.3,
					duration: 1
				}
			}));
		}
	};
	return (
		<VisibilitySensor onChange={handleScroll} partialVisibility={true}>
			<ProjectContainer>
				<Spacer height={'large'} />
				<Words>
					{/* <Spacer height={'medium'} /> */}
					<PTitle
						animate={controls}
						custom={0}
						initial={{ opacity: 0, y: 100 }}
					>
						{title}
					</PTitle>

					<Spacer height={'medium'} />
					<PAbout
						animate={controls}
						custom={1}
						initial={{ opacity: 0, y: 100 }}
					>
						{about}
					</PAbout>

					<Spacer height={'medium'} />

					<ToolsTitle
						animate={controls}
						custom={2}
						initial={{ opacity: 0, y: 100 }}
					>
						DEVELOPMENT TOOLS
					</ToolsTitle>

					{tools.map((t, i) => {
						return (
							<Tool
								key={i}
								animate={controls}
								custom={3}
								initial={{ opacity: 0, y: 100 }}
							>
								<LIicon as={GiCircle} />
								<ToolP>{t}</ToolP>
							</Tool>
						);
					})}
					<Spacer height={'medium'} />
					<BtnsContainer
						animate={controls}
						custom={4}
						initial={{ opacity: 0, y: 100 }}
					>
						<a
							href={repo}
							target='_blank'
							rel='noopener noreferrer'
						>
							<RepoBtn>Repo</RepoBtn>
						</a>
						<a
							href={demo}
							target='_blank'
							rel='noopener noreferrer'
						>
							<DemoBtn>Demo</DemoBtn>
						</a>
					</BtnsContainer>
				</Words>
				<Spacer height={'large'} />
			</ProjectContainer>
		</VisibilitySensor>
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
