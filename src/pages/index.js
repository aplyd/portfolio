import React from 'react';
import SEO from '../components/seo';

import Layout from '../components/Layout';
import Logo from '../components/Logo';
import {
	ContentContainer,
	HomeSectionTitle,
	VerticalSpacer
} from '../components/GlobalStyle';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Cover from '../components/Cover';
// import ArrowDown from '../components/arrowDown';
// import ScrollText from '../components/scrollText';
// import styled from 'styled-components';

export default function index() {
	return (
		<Layout>
			<SEO title='Home' />
			<ContentContainer>
				<Logo />
			</ContentContainer>
			<ContentContainer>
				<Cover />
			</ContentContainer>
			<VerticalSpacer height={'80px'} />
			<ContentContainer>
				<HomeSectionTitle>Lorem Ipsum</HomeSectionTitle>
				<p className='paragraph'>
					Enim consectetur ullamco non in et mollit in occaecat. Esse
					fugiat et fugiat aliqua proident sint est. Qui ullamco
					occaecat culpa est Lorem. Veniam commodo id anim voluptate
					aliquip et amet minim occaecat esse anim proident. Id ea est
					dolore ea elit sint sit pariatur laborum consectetur. Ipsum
					velit eiusmod ea aliquip minim labore laborum labore
					cupidatat ullamco dolore in ipsum laboris. Proident occaecat
					nulla et nostrud proident non ad consectetur aliqua laborum
					ad. Labore deserunt ad exercitation ipsum ex minim. Aute
					aliqua cillum eiusmod incididunt voluptate et anim non magna
					duis amet deserunt aliqua non. Est consequat officia
					occaecat velit consectetur. Velit sint aliquip sit duis ea
					id ea fugiat veniam fugiat qui.
				</p>
			</ContentContainer>

			<VerticalSpacer height={'80px'} />
			<ContentContainer>
				<Projects />
			</ContentContainer>

			<VerticalSpacer height={'80px'} />
			<ContentContainer>
				<Contact />
			</ContentContainer>
		</Layout>
	);
}
