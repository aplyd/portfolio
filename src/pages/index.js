import React from 'react';
import SEO from '../components/seo';
import styled from 'styled-components';

import Layout from '../components/layout';
import { ContentContainer, SectionWrapper } from '../components/globalStyle';
import Projects from '../components/projects';
import Contact from '../components/contact';
import Cover from '../components/cover';
import About from '../components/about';
import Footer from '../components/footer';
import SpinningText from '../components/spinningText';

const ProjectsTitle = styled.h1`
	color: var(--accent-light);
	max-width: 60rem;
	margin: 0 auto;
	transform: translateY(-200px);
	font-weight: 700;
	text-transform: uppercase;
	z-index: -1;
`;

export default function Index() {
	return (
		<Layout>
			<SEO title='Home' />
			<Cover />
			<About />
			<ProjectsTitle>Projects</ProjectsTitle>
			<Projects />
			<Contact />
			<Footer />
		</Layout>
	);
}
