import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout';
import { Box, Text } from '@chakra-ui/core'
// import Logo from '../components/logo';
// import {
// 	ContentContainer,
// 	SectionWrapper
// } from '../components/globalStyle';
// import Projects from '../components/projects';
// import Contact from '../components/contact';
// import Cover from '../components/cover';
// import About from '../components/about';
// import Footer from '../components/footer';
// import SpinningText from '../components/spinningText'

export default function Index() {
	return (
		<Layout>
			<Box p={8} bgColor="red.800">
				<Text fontSize="xl" color="brand.700">HLLLEOO</Text>
			</Box>
			<h1>fjmdkslfjkdsl</h1>
			{/* <SEO title='Home' />

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
			</SectionWrapper> */}

		</Layout>
	);
}
