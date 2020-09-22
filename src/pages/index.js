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

const CoverBackground = styled.div`
	background-color: #4c606b;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='0' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23395b5c'/%3E%3Cstop offset='1' stop-color='%23395b5c' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='1200' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%237b9e8d'/%3E%3Cstop offset='1' stop-color='%237b9e8d' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='c' cx='600' cy='0' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23879270'/%3E%3Cstop offset='1' stop-color='%23879270' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='d' cx='600' cy='800' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%234c606b'/%3E%3Cstop offset='1' stop-color='%234c606b' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='e' cx='0' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23365445'/%3E%3Cstop offset='1' stop-color='%23365445' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='f' cx='1200' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ebd1a9'/%3E%3Cstop offset='1' stop-color='%23ebd1a9' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' width='1200' height='800'/%3E%3Crect fill='url(%23c)' width='1200' height='800'/%3E%3Crect fill='url(%23d)' width='1200' height='800'/%3E%3Crect fill='url(%23e)' width='1200' height='800'/%3E%3Crect fill='url(%23f)' width='1200' height='800'/%3E%3C/svg%3E");
	background-attachment: fixed;
	background-size: cover;
	width: 100%;
	height: 100%;
`;

export default function Index() {
	return (
		<Layout>
			<SEO title='Home' />
			{/* <CoverBackground> */}
			<Cover />
			<About />
			{/* </CoverBackground> */}
			<Projects />
			<Contact />
			<Footer />
		</Layout>
	);
}
