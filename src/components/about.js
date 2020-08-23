import React from 'react';
import styled from 'styled-components';
import { Spacer, SectionTitle, BtnLg } from './globalStyle';
import { useViewportScroll, useTransform, motion } from 'framer-motion';

const Background = styled.div`
	margin-top: -8px;
	background-color: var(--main-fg-color);
	/* color: var(--main-bg-color); */
`;

const Container = styled(motion.div)`
	max-width: 70rem;
	margin: 0 auto;
	position: relative;
`;

const P = styled(motion.p)`
	color: white;
	font-size: 1.9rem;
`;

const BoldTitle = styled(motion.h1)`
	color: white;
	text-transform: uppercase;
	font-weight: 500;
`;

const SubTitle = styled(motion.h3)`
	font-weight: 300;
	margin-top: -4px;
	color: var(--main-bg-color);
	text-transform: uppercase;
`;

const CTAbtn = styled(motion.button)`
	border-radius: 50px;
	/* border: solid 3px black; */
	border: none;
	padding: 28px 48px;
	font-weight: bold;
	text-transform: uppercase;
	background-color: white;
	color: black;
`;

const SlantedSVG = styled.svg`
	width: 100%;
	transform: scale(-1, 1);
`;

// const UpsideDownSlantedSVG = styled(SlantedSVG)`
// 	transform: scale(-1, -1);
// 	margin-top: -2px;
// `;

const About = () => {
	const { scrollY } = useViewportScroll();
	// const yRange = [0, 900, 1300];
	const opacRange = [0, 0, 1];
	const transformRange = [100, 100, 0];
	// const opacityVal = useTransform(scrollY, yRange, opacityRange);
	// const yTransformVal = useTransform(scrollY, yRange, transformRange);

	const yRange1 = [0, 800, 1300];
	const yRange2 = [0, 900, 1300];
	const yRange3 = [0, 1000, 1300];
	const yRange4 = [0, 1100, 1300];

	const y1 = useTransform(scrollY, yRange1, transformRange);
	const opac1 = useTransform(scrollY, yRange1, opacRange);

	const y2 = useTransform(scrollY, yRange2, transformRange);
	const opac2 = useTransform(scrollY, yRange2, opacRange);

	const y3 = useTransform(scrollY, yRange3, transformRange);
	const opac3 = useTransform(scrollY, yRange3, opacRange);

	const y4 = useTransform(scrollY, yRange4, transformRange);
	const opac4 = useTransform(scrollY, yRange4, opacRange);

	return (
		<>
			{[...Array(3)].map((_, i) => (
				<Spacer height={'large'} key={i} />
			))}
			<SlantedSVG
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 1440 320'
			>
				<path
					fill='#00000'
					fillOpacity='1'
					d='M0,288L1440,160L1440,320L0,320Z'
				></path>
			</SlantedSVG>
			<Background>
				<Spacer height={'xlarge'} />

				<Container
				// style={{ opacity: opacityVal, y: yTransformVal }}
				>
					<BoldTitle style={{ y: y1, opacity: opac1 }}>
						Austin Ftacnik
					</BoldTitle>
					<SubTitle style={{ y: y2, opacity: opac2 }}>
						Front-End Developer
					</SubTitle>
					<Spacer height={'medium'} />
					<P style={{ y: y3, opacity: opac3 }}>
						{/* Labore sit esse occaecat occaecat proident veniam. Esse
						minim sit tempor sint laborum duis magna mollit
						reprehenderit. Adipisicing aliquip laborum cillum
						voluptate. Cupidatat et elit laboris ea commodo
						adipisicing occaecat ad pariatur cupidatat laborum
						eiusmod. In adipisicing exercitation amet duis amet qui
						laboris culpa exercitation do proident velit occaecat
						voluptate. Ut cillum adipisicing excepteur elit qui
						commodo commodo proident cupidatat. */}
						I began playing guitar a piano in my early teens and
						shortly after picked photography and filmmaking. I guess
						you could say I&apos;ve always picked up hobbies that
						allowed me to express myself. Although I&apos;ve only
						recently started coding, it&apos;s quickly become my
						favorite medium. There&apos;s nothing quite like being
						able to bring ideas to life through design and code.
					</P>
					<Spacer height={'large'} />
					<CTAbtn
						onClick={() => console.log('click')}
						style={{ y: y4, opacity: opac4 }}
					>
						Get in touch
					</CTAbtn>
					<Spacer height={'xlarge'} />
					<Spacer height={'large'} />
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
		</>
	);
};

export default About;
