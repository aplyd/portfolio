import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Spacer } from './globalStyle';
import Logo from '../components/logo';
import SpinningText from '../components/spinningText';
import useWindowWidth from '../hooks/useWindowWidth';

const Container = styled.div`
	position: relative;
	margin: 0 auto;
	width: 100%;
	max-width: 85rem;
	/* min-width: 600px; */
	/* @media screen and (max-width: 600px) {
		overflow: hidden;
	} */
`;

const ArtContainer = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	margin: 0 auto;
	max-width: 56.2rem;
	padding: 0 1.2rem;
	&& > svg {
	}
	&& path,
	g {
	}
`;

const ProfileSVG = styled.svg`
	border-radius: 50px;
	height: 100%;
	width: 100%;
	background-color: var(--light-color);
	display: block;
	margin: 0 auto;
	&& > path,
	g {
		fill: var(--dark-color);
	}
`;

const ProfileBackground = styled.div`
	/* box-shadow: 40px 40px 80px #a0a0a0, -40px -40px 80px #d8d8d8; */
	box-shadow: 24px 24px 48px #a0a0a0, -24px -24px 48px #d8d8d8;
	background-color: var(--light-color);
	border-radius: 50px;
	padding: 50px;
`;

const MobileSpacer = styled(Spacer)`
	display: none;
	@media screen and (max-width: 850px) {
		display: block;
	}
`;

export default function Cover() {
	const [windowWidth] = useWindowWidth();
	return (
		<Container>
			<Spacer height={'xlarge'} />
			<Spacer height={'large'} />
			{/* <MobileSpacer height={'large'} /> */}
			<Logo />
			<ArtContainer windowWidth={windowWidth}>
				<SpinningText />
				<ProfileBackground>
					<ProfileSVG
						version='1.0'
						xmlns='http://www.w3.org/2000/svg'
						width='100%'
						height='100%'
						viewBox='0 0 944.000000 1280.000000'
						preserveAspectRatio='xMidYMid meet'
					>
						<g
							transform='translate(0.000000,1280.000000) scale(0.100000,-0.100000)'
							fill='#000000'
							stroke='none'
						>
							<path
								d='M4425 12789 c-413 -38 -882 -147 -1240 -289 -549 -217 -1170 -697
-1437 -1110 -249 -385 -415 -1109 -395 -1720 17 -507 106 -966 254 -1310 113
-262 359 -667 568 -935 69 -88 283 -300 443 -439 l102 -89 2 -56 c18 -661
-141 -1513 -392 -2095 -93 -218 -518 -1009 -990 -1846 -637 -1129 -924 -1697
-1142 -2258 -81 -210 -188 -536 -195 -594 l-6 -48 4122 0 c3405 0 4121 2 4114
13 -4 7 -66 83 -136 168 -175 212 -227 287 -418 602 -306 507 -328 536 -630
828 -189 183 -250 249 -316 341 -167 234 -268 425 -299 568 -26 114 -19 152
104 545 34 108 40 314 17 545 -51 520 -25 725 110 848 138 126 358 238 610
311 115 33 176 40 449 56 144 8 277 18 296 21 162 27 407 77 461 93 153 48
239 170 268 384 24 174 10 275 -70 486 -21 58 -39 118 -39 135 0 66 126 276
165 276 8 0 23 12 35 27 34 43 18 98 -62 217 -22 32 -36 61 -31 65 4 4 35 15
68 25 106 33 166 120 150 220 -4 22 -23 90 -41 149 -38 122 -43 186 -16 209 9
9 51 26 92 38 41 12 132 51 202 86 101 52 137 76 176 119 71 77 79 136 36 263
-36 109 -59 140 -208 287 -135 134 -254 287 -399 515 -69 110 -157 286 -176
355 -6 22 -18 150 -26 285 -41 687 -69 945 -135 1272 -114 555 -334 995 -681
1362 -202 214 -408 361 -724 516 -592 291 -1224 469 -1935 545 -177 19 -569
27 -705 14z'
							/>
						</g>
					</ProfileSVG>
				</ProfileBackground>
			</ArtContainer>
		</Container>
	);
}
