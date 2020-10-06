import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { GiCircle } from 'react-icons/gi';
import { Spacer, BtnSmall } from './globalStyle';
import VisibilitySensor from 'react-visibility-sensor';
import { useAnimation, motion } from 'framer-motion';

const ProjectContainer = styled.div`
	width: 100%;
	position: relative;
	max-width: 80rem;
	margin: 0 auto;
`;

const Words = styled.div`
	height: 100%;
	/* min-height: 532px; */
	width: 100%;
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
	margin-left: 24px;
	/* font-weight: 500; */
`;

const ToolsTitle = styled(motion.p)`
	color: var(--accent-light);
	text-transform: uppercase;
	padding-bottom: 24px;
	/* padding-left: 24px; */
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
	max-width: 26rem;
	margin-left: auto;
	display: flex;
	justify-content: space-between;
`;

const ProjectCard = ({ title, about, tools, repo, demo }) => {
	const controls = useAnimation();
	const handleScroll = isVisible => {
		if (isVisible) {
			controls.start(i => ({
				opacity: 1,
				y: 0,
				transition: {
					delay: i * 0.1,
					duration: 0.4
				}
			}));
		}
	};
	return (
		<ProjectContainer>
			<Words>
				<VisibilitySensor onChange={handleScroll}>
					<PTitle
						animate={controls}
						custom={0}
						initial={{ opacity: 0, y: 100 }}
					>
						{title}
					</PTitle>
				</VisibilitySensor>

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
				<Spacer height={'large'} />
				<BtnsContainer
					animate={controls}
					custom={4}
					initial={{ opacity: 0, y: 100 }}
				>
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
