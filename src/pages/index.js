import React from 'react';
import SEO from '../components/seo';

import Layout from '../components/Layout';
import Logo from '../components/Logo';
import { ContentContainer, HomeSectionTitle } from '../components/GlobalStyle';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Cover from '../components/Cover';
// import ArrowDown from '../components/arrowDown';
// import BioShort from '../components/bio-short';
// import ScrollText from '../components/scrollText';
// import Canvas3D from '../components/Canvas3D';
import styled from 'styled-components';

const Spacing = styled.div`
	background: var(--main-bg-color);
	height: 120px;
`;

export default function index() {
	return (
		<Layout>
			<SEO title='Home' />
			<ContentContainer>
				<Logo />
			</ContentContainer>
			<Spacing />
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
			<Spacing />
			<ContentContainer>
				<Projects />
			</ContentContainer>
			<Spacing />
			<ContentContainer>
				<Contact />
			</ContentContainer>
		</Layout>
	);
}
