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
			<Spacer height={'10px'} />
			<ContentContainer>
				<Logo />
			</ContentContainer>

			<Spacer height={'20px'} />
			<ContentContainer>
				<Cover />
			</ContentContainer>

			<Spacer height={'80px'} />
			<ContentContainer>
				<About />
			</ContentContainer>

			<Spacer height={'80px'} />

			<SectionWrapper bgColor={'black'}>
				<ContentContainer id='projects'>
					<Projects />
				</ContentContainer>
			</SectionWrapper>

			<Spacer height={'80px'} />
			<ContentContainer id='contact'>
				<Contact />
			</ContentContainer>
		</Layout>
	);
}
