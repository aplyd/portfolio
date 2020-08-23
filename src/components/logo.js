import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Spacer } from './globalStyle';
import { useViewportScroll, useTransform, motion } from 'framer-motion';

const Container = styled(motion.div)`
	position: absolute;
	top: 124px;
	left: -145px;
	text-align: center;
	/* @media screen and (max-width: 960px) {
		padding-right: 16px;
	} */
	/* background: red; */
	z-index: 1004;
`;

const LogoContainer = styled.div``;

const LogoText = styled.h2`
	text-transform: uppercase;
	font-size: 12rem;
	line-height: 105px;
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
	transform: ${props => `skewX(${props.vals})`};
`;

const MainLogo = styled(LogoText)`
	font-weight: bold;
	padding-left: 12px;
	/* color: var(--main-fg-color); */
`;

const Italic = styled(Outline)`
	padding-left: 0;
`;

export default function Logo() {
	const [val, setVal] = useState();
	const { scrollY } = useViewportScroll();
	const pageY = [0, 300];
	const warps = [0, 100];
	const tVal = useTransform(scrollY, pageY, warps);

	useEffect(() => {
		setVal(tVal);
	}, [tVal, scrollY]);

	return (
		<Container>
			<motion.div animate={{ rotate: val }}>
				<LogoContainer>
					<Outline>Ftacnik</Outline>
					<MainLogo>Ftacnik</MainLogo>
					<Italic>Ftacnik</Italic>
				</LogoContainer>
			</motion.div>
		</Container>
	);
}
