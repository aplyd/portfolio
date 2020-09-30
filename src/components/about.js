import React from 'react';
import styled from 'styled-components';
import { Spacer, BtnLarge } from './globalStyle';
import { Link } from 'gatsby';
import { motion, useAnimation } from 'framer-motion';
import AnimateVisWrapper from './animateVisWrapper';

const Container = styled.div`
	position: relative;
	width: 100%;
`;

const Background = styled.div`
	margin-top: -8px;
	background-color: var(--color-dark);
	z-index: 1000;
	position: relative;
`;

const ContentContainer = styled(motion.div)`
	width: 100%;
	max-width: 80rem;
	margin: 0 auto;
	position: relative;
	@media screen and (max-width: 816px) {
		padding: 0 16px;
	}
`;

const P = styled(motion.p)`
	color: var(--accent-light);
	font-size: 1.9rem;
`;

const BoldTitle = styled(motion.h1)`
	color: var(--accent-light);
	text-transform: uppercase;
	font-weight: 500;
	z-index: 1000;
	line-height: 5rem;
	padding-bottom: 0.8rem;
`;

const SubTitle = styled(motion.h3)`
	font-weight: 300;
	margin-top: -4px;
	color: var(--color-medium);
	text-transform: uppercase;
`;

const SlantedSVG = styled.svg`
	width: 100%;
	transform: scale(-1, 1);
	/* z-index: 9999; */
	&& > path {
		fill: var(--color-dark);
	}
`;

const About = () => {
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
		<Container>
			<SlantedSVG
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 1440 320'
			>
				<path
					// fill='#00000'
					fillOpacity='1'
					d='M0,288L1440,160L1440,320L0,320Z'
				></path>
			</SlantedSVG>
			<Background>
				<Spacer height={'xlarge'} />

				<ContentContainer>
					<AnimateVisWrapper
						initial={{ opacity: 0, y: 100 }}
						animation={{
							opacity: 1,
							y: 0,
							transition: {
								duration: 0.4
							}
						}}
						partial={true}
					>
						<BoldTitle>Austin Ftacnik</BoldTitle>
					</AnimateVisWrapper>
					<AnimateVisWrapper
						initial={{ opacity: 0, y: 100 }}
						animation={{
							opacity: 1,
							y: 0,
							transition: {
								delay: 0.1,
								duration: 0.4
							}
						}}
						partial={true}
					>
						<SubTitle>Front-End Developer</SubTitle>
					</AnimateVisWrapper>

					<Spacer height={'medium'} />
					<AnimateVisWrapper
						initial={{ opacity: 0, y: 100 }}
						animation={{
							opacity: 1,
							y: 0,
							transition: {
								delay: 0.2,
								duration: 0.4
							}
						}}
						partial={true}
					>
						<P>
							Hi, I&apos;m Austin Ftacnik. I&apos;m a self-taught,
							web developer. I specialize in working on the client
							side of applications, most often with React. When
							I&apos;m not coding you can find me reading a good
							book, playing an instrument or hanging out in the
							gym. Thanks for stopping by, feel free to shoot me a
							message.
						</P>
					</AnimateVisWrapper>
					<Spacer height={'large'} />
					<AnimateVisWrapper
						initial={{ opacity: 0, y: 100 }}
						animation={{
							opacity: 1,
							y: 0,
							transition: {
								delay: 0.3,
								duration: 0.4
							}
						}}
						partial={true}
					>
						<Link to='/#contact'>
							<BtnLarge
								backgroundColor={'var(--accent-light)'}
								color={'var(--color-dark)'}
								borderColor={'var(--accent-light)'}
							>
								Get in touch
							</BtnLarge>
						</Link>
					</AnimateVisWrapper>
					<Spacer height={'xlarge'} />
				</ContentContainer>
			</Background>
		</Container>
	);
};

export default About;
