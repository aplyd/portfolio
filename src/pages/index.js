import React from 'react';
import SEO from '../components/seo';

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
// import ScrollText from '../components/scrollText';
// import styled from 'styled-components';

export default function Index() {
	return (
		<Layout>
			<SEO title='Home' />
			<Spacer height={'large'} />
			<ContentContainer>
				<Logo />
			</ContentContainer>

			<Spacer height={'medium'} />
			<Cover />

			<SectionWrapper bgColor={'black'}>
				<ContentContainer>
					<Spacer height={'large'} />
					<About />
				</ContentContainer>
			</SectionWrapper>

			<ContentContainer>
				<Contact></Contact>
			</ContentContainer>

			<Spacer height={'large'} />

			<SectionWrapper bgColor={'black'}>
				<ContentContainer id='projects'>
					<Projects />
				</ContentContainer>
			</SectionWrapper>

			<Spacer height={'large'} />
			<ContentContainer id='contact'>
				<Contact />
			</ContentContainer>
		</Layout>
	);
}
