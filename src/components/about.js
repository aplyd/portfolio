import React from 'react';
import styled from 'styled-components';
import { Spacer, SectionTitle, BtnLg } from './globalStyle';

const Background = styled.div`
	margin-top: -8px;
	background-color: var(--main-fg-color);
	/* color: var(--main-bg-color); */
`;

const Container = styled.div`
	max-width: 50em;
	margin: 0 auto;
`;

const P = styled.p`
	color: var(--main-bg-color);
`;

const BoldTitle = styled.h1`
	color: var(--main-bg-color);
	text-transform: uppercase;
	font-weight: bold;
	font-size: 3.5em;
`;

const SubTitle = styled.h2`
	margin-top: -4px;
	color: var(--main-bg-color);
	text-transform: uppercase;
	font-size: 1.8em;
`;

const CTAbtn = styled.button`
	border-radius: 50px;
	border: solid 3px black;
	padding: 20px 48px;
	font-weight: bold;
	text-transform: uppercase;
	background-color: var(--main-bg-color);
	color: var(--main-fg-color);
`;

const SlantedSVG = styled.svg`
	width: 100%;
	transform: scale(-1, 1);
`;

const UpsideDownSlantedSVG = styled(SlantedSVG)`
	transform: scale(-1, -1);
	margin-top: -2px;
`;

const About = () => {
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
				<Container>
					<BoldTitle>Austin Ftacnik</BoldTitle>
					<SubTitle>Front-End Developer</SubTitle>
					<Spacer height={'medium'} />
					<P>
						Labore sit esse occaecat occaecat proident veniam. Esse
						minim sit tempor sint laborum duis magna mollit
						reprehenderit. Adipisicing aliquip laborum cillum
						voluptate. Cupidatat et elit laboris ea commodo
						adipisicing occaecat ad pariatur cupidatat laborum
						eiusmod. In adipisicing exercitation amet duis amet qui
						laboris culpa exercitation do proident velit occaecat
						voluptate. Ut cillum adipisicing excepteur elit qui
						commodo commodo proident cupidatat.
					</P>
					<Spacer height={'medium'} />
					<CTAbtn mode={'dark'} onClick={() => console.log('click')}>
						Get in touch
					</CTAbtn>
					<Spacer height={'xlarge'} />
				</Container>
			</Background>
			<UpsideDownSlantedSVG
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 1440 320'
			>
				<path
					fill='#00000'
					fillOpacity='1'
					d='M0,288L1440,160L1440,320L0,320Z'
				></path>
			</UpsideDownSlantedSVG>
		</>
	);
};

export default About;
