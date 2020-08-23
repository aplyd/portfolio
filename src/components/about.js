import React from 'react';
import styled from 'styled-components';
import { Spacer, SectionTitle, BtnLg } from './globalStyle';
import ScrollText from './scrollText';
import {
	useViewportScroll,
	useTransform,
	useAnimation,
	motion
} from 'framer-motion';

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

const P = styled.p`
	color: white;
`;

const BoldTitle = styled.h1`
	color: white;
	text-transform: uppercase;
	font-weight: 500;
`;

const SubTitle = styled.h3`
	font-weight: 300;
	margin-top: -4px;
	color: var(--main-bg-color);
	text-transform: uppercase;
`;

const CTAbtn = styled.button`
	border-radius: 50px;
	/* border: solid 3px black; */
	border: none;
	padding: 20px 48px;
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
	// const mv = useMotionValue(0);
	const yRange = [0, 850, 1100];
	const opacityRange = [0, 0, 1];
	const transformRange = [100, 100, 0];
	const opacityVal = useTransform(scrollY, yRange, opacityRange);
	const yTransformVal = useTransform(scrollY, yRange, transformRange);
	const controls = useAnimation();

	return (
		<motion.div
		// style={{ opacity: opacityVal, y: yTransformVal }}
		>
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
				// animate={{ y: [200, -200, 0] }}
				// animate={{ y: yTransformVal }}
				>
					<BoldTitle>Austin Ftacnik</BoldTitle>
					<SubTitle>Front-End Developer</SubTitle>
					<Spacer height={'medium'} />
					<P>
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
					<CTAbtn mode={'dark'} onClick={() => console.log('click')}>
						Get in touch
					</CTAbtn>
					<Spacer height={'xlarge'} />
					<Spacer height={'medium'} />
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
	);
};

export default About;
