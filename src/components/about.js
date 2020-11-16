import React from 'react';
import styled from 'styled-components';
import { Spacer, BtnLarge } from './globalStyle';
import { Link } from 'gatsby';

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

const ContentContainer = styled.div`
	width: 100%;
	max-width: 80rem;
	margin: 0 auto;
	position: relative;
	@media screen and (max-width: 816px) {
		padding: 0 16px;
	}
`;

const P = styled.p`
	color: var(--accent-light);
	font-size: 1.9rem;
`;

const BoldTitle = styled.h1`
	color: var(--accent-light);
	text-transform: uppercase;
	font-weight: 500;
	z-index: 1000;
	line-height: 5rem;
	padding-bottom: 0.8rem;
`;

const SubTitle = styled.h3`
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
					<BoldTitle>Austin Ftacnik</BoldTitle>
					<SubTitle>Front-End Developer</SubTitle>
					<Spacer height={'medium'} />
					<P>
						Hello, my name is Austin Ftacnik. I&apos;m a software
						developer working on the client side of the web. I
						specialize in building creative user interfaces and
						maintanable applications, most often with React. With a
						background in photography, I view coding as an art form
						and am constantly working towards improving my craft.
						Some call it passion but I genuinely enjoy writing code
						and solving problems. Thanks for stopping by, feel free
						to contact me.
					</P>
					<Spacer height={'large'} />
					<Link to='/#contact' aria-label='go to contact form'>
						<BtnLarge
							backgroundColor={'var(--accent-light)'}
							color={'var(--color-dark)'}
							borderColor={'var(--accent-light)'}
						>
							Get in touch
						</BtnLarge>
					</Link>
					<Spacer height={'xlarge'} />
				</ContentContainer>
			</Background>
		</Container>
	);
};

export default About;
