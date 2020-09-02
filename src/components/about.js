import React, { useState } from 'react';
import styled from 'styled-components';
import { Spacer, BtnLarge } from './globalStyle';
import {
	useViewportScroll,
	useTransform,
	motion,
	useAnimation
} from 'framer-motion';
import VisibilitySensor from 'react-visibility-sensor';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const Background = styled.div`
	margin-top: -8px;
	background-color: var(--color-dark);
`;

const Container = styled(motion.div)`
	max-width: 70rem;
	margin: 0 auto;
	position: relative;
	@media screen and (max-width: 700px) {
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

const CTAbtn = styled(motion.button)`
	border-radius: 50px;
	border: none;
	padding: 28px 48px;
	text-transform: uppercase;
	background-color: var(--accent-light);
	color: var(--color-dark);
	/* font-weight: 500; */
`;

const SlantedSVG = styled.svg`
	width: 100%;
	transform: scale(-1, 1);
	/* z-index: 9999; */
	&& > path {
		fill: var(--color-dark);
	}
`;

const UpsideDownSlantedSVG = styled(SlantedSVG)`
	transform: scale(-1, -1);
	margin-top: -2px;
`;

const MobileSpacer = styled(Spacer)`
	@media screen and (max-width: 850px) {
		display: none;
	}
`;

const About = () => {
	const { scrollY } = useViewportScroll();
	const controls = useAnimation();
	const scrollRange = [0, 1150];
	const scrollTransformRange = [0, -350];
	const scrollTransform = useTransform(
		scrollY,
		scrollRange,
		scrollTransformRange
	);

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
		<>
			<motion.div style={{ y: scrollTransform }}>
				<Spacer height={'large'} />
				<Spacer height={'large'} />
				<Spacer height={'large'} />
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

					<Container
					// style={{ opacity: opacityVal, y: yTransformVal }}
					>
						<VisibilitySensor
							// scrollDelay={0}
							partialVisibility={true}
							onChange={handleScroll}
						>
							<>
								<BoldTitle
									// style={{ y: y1, opacity: opac1 }}
									// style={{ opacity: opacTransform }}
									initial={{ opacity: 0, y: 100 }}
									custom={0}
									animate={controls}
								>
									Austin Ftacnik
								</BoldTitle>
								<SubTitle
									// style={{ y: y2, opacity: opac2 }}
									initial={{ opacity: 0, y: 100 }}
									custom={1}
									animate={controls}
								>
									Front-End Developer
								</SubTitle>
								<Spacer height={'medium'} />
								<P
									// style={{ y: y3, opacity: opac3 }}
									initial={{ opacity: 0, y: 100 }}
									custom={2}
									animate={controls}
								>
									I began playing guitar a piano in my early
									teens and shortly after picked photography
									and filmmaking. I guess you could say
									I&apos;ve always picked up hobbies that
									allowed me to express myself. Although
									I&apos;ve only recently started coding,
									it&apos;s quickly become my favorite medium.
									There&apos;s nothing quite like being able
									to bring ideas to life through design and
									code.
								</P>
								<Spacer height={'large'} />
								<AnchorLink to='/#contact'>
									<BtnLarge
										initial={{ opacity: 0, y: 100 }}
										custom={3}
										animate={controls}
										backgroundColor={'var(--accent-light)'}
										color={'var(--color-dark)'}
										borderColor={'var(--accent-light)'}
									>
										Get in touch
									</BtnLarge>
								</AnchorLink>
								{/* <Spacer height={'xlarge'} /> */}
								<Spacer height={'xlarge'} />
							</>
						</VisibilitySensor>
					</Container>
				</Background>
				{/* <UpsideDownSlantedSVG
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 1440 320'
				>
					<path
						fill='#00000'
						fillOpacity='1'
						d='M0,288L1440,160L1440,320L0,320Z'
					></path>
				</UpsideDownSlantedSVG> */}
			</motion.div>
		</>
	);
};

export default About;
