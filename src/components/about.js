import React from 'react';
import styled from 'styled-components';
import { Spacer, SectionTitle, BtnLg } from './globalStyle';

const Container = styled.div`
	margin: 0 auto;
	max-width: 50em;
`;

const P = styled.p`
	color: var(--main-fg-color);
	
`;

const BoldTitle = styled.h1`
	color: var(--main-fg-color);
	text-transform: uppercase;
	font-weight: bold;
	font-size: 3.5em;
`;

const SubTitle = styled.h2`
	margin-top: -4px;
	color: var(--main-fg-color);
	text-transform: uppercase;
	font-size: 1.8em;
`;

const CTAbtn = styled.button`
	border-radius: 50px;
	border: solid 3px black;
	padding: 20px 48px;
	font-weight: bold;
	text-transform: uppercase;
	background-color: var(--main-fg-color);
	color: var(--main-bg-color);
`;

const About = () => {
	return (
		<>
			<Container>
				{[...Array(6)].map((_, i) => <Spacer height={'large'} key={i} />)}
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

			</Container>
		</>
	);
};

export default About;
