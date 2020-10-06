import React from 'react';
import SEO from '../components/seo';

import Layout from '../components/layout';
import Projects from '../components/projects';
import Contact from '../components/contact';
import Cover from '../components/cover';
import About from '../components/about';
import Footer from '../components/footer';

export default function Index() {
	return (
		<Layout homepage={true}>
			<SEO title='Home' />
			<Cover />
			<About />
			<Projects />
			<Contact />
			<Footer />
		</Layout>
	);
}
