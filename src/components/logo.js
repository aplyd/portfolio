import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Spacer } from './globalStyle';
import useWindowWidth from '../hooks/useWindowWidth';
import {
	useViewportScroll,
	useTransform,
	motion,
	useMotionValue
} from 'framer-motion';

const Container = styled(motion.div)`
	position: absolute;
	top: 17%;
	left: -26%;
	text-align: center;
	transform: ${props => `scale(${props.scaleTran})`};
	/* transform: scale(0.6); */
	/* @media screen and (max-width: 960px) {
		padding-right: 16px;
	} */
	/* background: red; */
	/* z-index: 1004; */
`;

const LogoContainer = styled.div``;

const LogoText = styled.h2`
	text-transform: uppercase;
	font-size: 12rem;
	line-height: 10.5rem;
	margin: -12px 0;
	color: var(--accent-color);
	font-weight: bold;
`;

const Outline = styled(LogoText)`
	/* color: var(--main-bg-color); */
	/* text-shadow: -3px -3px 0 var(--main-fg-color),
		3px -3px 0 var(--main-fg-color), -3px 3px 0 var(--main-fg-color),
		3px 3px 0 var(--main-fg-color); */
	/* font-weight: bold; */
	font-style: italic;
	padding-left: 32px;
`;

const MainLogo = styled(LogoText)`
	font-weight: bold;
	padding-left: 12px;
`;

const Italic = styled(Outline)`
	padding-left: 0;
`;

export default function Logo() {
	const { scrollY } = useViewportScroll();
	const pageY = [0, 800];
	const skews = [0, -28];
	const skews2 = [0, -14];
	const xs = [0, -18];
	const xs2 = [0, -10];
	const skewTran = useTransform(scrollY, pageY, skews);
	const skewTran2 = useTransform(scrollY, pageY, skews2);
	const xTran = useTransform(scrollY, pageY, xs);
	const xTran2 = useTransform(scrollY, pageY, xs2);

	// super complicated way of scaling the logo via window width
	const [windowWidth] = useWindowWidth();
	const motionVal = useMotionValue(windowWidth);
	const scaleTran = useTransform(motionVal, [320, 850, 4000], [0.5, 1, 1]);

	useEffect(() => {
		motionVal.set(windowWidth);
	}, [windowWidth, motionVal]);

	return (
		<Container style={{ scale: scaleTran }}>
			<LogoContainer>
				<motion.div style={{ skewX: skewTran }}>
					<Outline>Ftacnik</Outline>
				</motion.div>
				<motion.div style={{ x: xTran }}>
					<MainLogo>Ftacnik</MainLogo>
					<motion.div style={{ skewX: skewTran2, x: xTran2 }}>
						<Italic>Ftacnik</Italic>
					</motion.div>
				</motion.div>
			</LogoContainer>
		</Container>
	);
}
