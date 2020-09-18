import React from 'react';
import styled from 'styled-components';
import { FaTwitter, FaGithub, FaDev, FaLinkedin } from 'react-icons/fa';

const Container = styled.div`
	width: 100%;
	background-color: var(--color-dark);
	/* height: 60px; */
	text-align: center;
	color: var(--accent-light);
	position: relative;
	@media screen and (max-width: 660px) {
		text-align: center;
	}
`;

const TM = styled.p`
	position: absolute;
	bottom: 8px;
	left: 16px;
	/* font-size: 1.4rem; */
	@media screen and (max-width: 660px) {
		font-size: 1.4rem;
		position: relative;
		left: 0;
		bottom: 12px;
	}
	/* padding: 1.6rem 2.4rem 1.6rem 1.6rem; */
`;

const IconContainer = styled.div`
	text-align: right;
	padding-right: 13px;
	padding-bottom: 9px;
	@media screen and (max-width: 660px) {
		text-align: center;
		padding-right: 0;
		padding-bottom: 17px;
	}
`;

const Icon = styled.svg`
	fill: var(--accent-light);
	width: 3.6rem;
	height: 3.6rem;
	margin-left: 2.4rem;
	@media screen and (max-width: 660px) {
		margin-left: 1.2rem;
		margin-right: 1.2rem;
	}
`;

export default function Footer() {
	return (
		<Container>
			<TM>© 2020 Austin Ftacnik — Seattle, WA</TM>
			<IconContainer>
				<a
					href='https://twitter.com/austinftacnik'
					rel='noopener noreferrer'
				>
					<Icon as={FaTwitter}></Icon>
				</a>
				<a href='https://github.com/aplyd' rel='noopener noreferrer'>
					<Icon as={FaGithub}></Icon>
				</a>
				<a
					href='https://dev.to/austinftacnik'
					rel='noopener noreferrer'
				>
					<Icon as={FaDev}></Icon>
				</a>
				<a
					href='https://www.linkedin.com/in/austin-ftacnik-3b91b7162'
					rel='noopener noreferrer'
				>
					<Icon as={FaLinkedin}></Icon>
				</a>
			</IconContainer>
		</Container>
	);
}
