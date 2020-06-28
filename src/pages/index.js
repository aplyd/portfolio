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

			{/* <Spacer height={'large'} /> */}
			<SectionWrapper bgColor={'black'}>
				<ContentContainer>
					<About />
				</ContentContainer>
			</SectionWrapper>

			{/* <Spacer height={'large'} />
			<ContentContainer>
				<Contact></Contact>
			</ContentContainer> */}

			<SectionWrapper bgColor={'var(--main-bg-color)'}>
				<ContentContainer id='projects'>
					<Projects />
				</ContentContainer>
			</SectionWrapper>
		</Layout>
	);
}
