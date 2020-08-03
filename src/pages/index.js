import React from 'react';
import SEO from '../components/seo';
import styled from 'styled-components';

import Layout from '../components/layout';
import Logo from '../components/logo';
import {
	ContentContainer,
	Spacer,
	SectionWrapper
} from '../components/globalStyle';
import Projects from '../components/projects';
import Contact from '../components/contact';
import Cover from '../components/cover';
import About from '../components/about';
import Footer from '../components/footer';
import SpinningText from '../components/spinningText'

const ProjectsTitle = styled.h1`
	color: var(--main-bg-color);
	text-transform: uppercase;
	font-size: 64px;
	font-weight: bold;
	text-shadow: -1px -1px 0 var(--main-fg-color),
		1px -1px 0 var(--main-fg-color), -1px 1px 0 var(--main-fg-color),
		1px 1px 0 var(--main-fg-color);
`;

export default function Index() {
	return (
		<Layout>
			<SEO title='Home' />

			<ContentContainer>
				<Logo />
			</ContentContainer>

			<Cover />


			<SectionWrapper>
				<ContentContainer>
					<About />
				</ContentContainer>
			</SectionWrapper>

			<SectionWrapper>
				<ContentContainer>
					<SpinningText />
				</ContentContainer>
			</SectionWrapper>


			<SectionWrapper id='projects'>
				<Projects />
			</SectionWrapper>


			<Contact />
			<ContentContainer>
			</ContentContainer>

			<SectionWrapper>
				<Footer></Footer>
			</SectionWrapper>
		</Layout>
	);
}
