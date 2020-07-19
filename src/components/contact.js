import React, { useState } from 'react';
import styled from 'styled-components';
import { Spacer } from './globalStyle';
import ScrollText from './ScrollText';

const Container = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 700px;
	overflow: hidden;
	@media screen and (max-width: 800px) {
		grid-template-columns: 1fr;
		grid-template-rows: 360px 360px;
	}
`;

const FormContainer = styled.div`
	display: grid;
	grid-template-rows: 80px 360px;
	@media screen and (max-width: 800px) {
		grid-row: 1;
	}
`;

const Form = styled.form`
	grid-row: 2;
`;

const Input = styled.input`
	border: none;
	outline: none;
	color: var(--main-fg-color);
	background-color: var(--main-bg-color);
	border-bottom: 2px solid var(--main-fg-color);
	width: calc(100% - 24px);
	/* max-width: 320px; */
	margin-top: 48px;
	margin-left: 24px;
`;

const NameInput = styled(Input)``;

const EmailInput = styled(Input)``;

const MessageInput = styled.textarea`
	color: var(--main-fg-color);
	border: none;
	outline: none;
	border-bottom: 2px solid var(--main-fg-color);
	background-color: var(--main-bg-color);
	width: 100%;
	width: calc(100% - 24px);
	margin-left: 24px;
	margin-top: 24px;
	&&::placeholder {
		color: var(--main-fg-color);
	}
`;

const ArtContainer = styled.div`
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 800px) {
		grid-row: 2;
	}
	position: relative;
`;

const ScrollTextContainer = styled.div``;

const SendBtn = styled.button`
	border-radius: 50px;
	border: solid 3px black;
	padding: 12px 32px;
	font-weight: bold;
	text-transform: uppercase;
	background-color: var(--main-fg-color);
	color: var(--main-bg-color);
	margin-top: 48px;
	float: right;
`;

const BlobSVG = styled.svg`
	position: absolute;
	width: 150%;
	height: 150%;
	left: -90px;
	top: -100px;
	z-index: 3;
`;

const Cube = styled.div`
	position: absolute;
	z-index: 4;
	width: 280px;
	height: 200px;
	top: 120px;
	left: 7px;
	background-color: var(--main-bg-color);
	box-shadow: -1px -1px var(--main-fg-color), -2px -2px black,
		-3px -3px var(--main-fg-color), -4px -4px var(--main-fg-color),
		-5px -5px var(--main-fg-color), -6px -6px var(--main-fg-color),
		-7px -7px var(--main-fg-color), -8px -8px var(--main-fg-color);
	background-color: var(--main-bg-color);
	border: solid 3px var(--main-fg-color);
`;

export default function Contact() {
	// const [name, setName] = useState();
	// const [message, setMessage] = useState();

	const blob = () => {
		return (
			<BlobSVG viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
				<path
					fill='#000000'
					d='M25.9,-43.8C33.4,-35.5,39.2,-28,41,-20C42.8,-11.9,40.6,-3.2,42.7,8.5C44.8,20.3,51.1,35,47.6,44.2C44.2,53.3,31,57,18.3,59.1C5.7,61.3,-6.4,62.1,-15.5,57.3C-24.5,52.5,-30.6,42.1,-41.4,33.7C-52.3,25.2,-67.8,18.6,-71.8,8.7C-75.7,-1.2,-68,-14.4,-58.9,-23.8C-49.8,-33.2,-39.2,-38.9,-29.2,-46C-19.1,-53.1,-9.6,-61.6,-0.2,-61.3C9.2,-61.1,18.4,-52,25.9,-43.8Z'
					transform='translate(100 100)'
				/>
			</BlobSVG>
		);
	};

	return (
		<Container>
			<ArtContainer>
				<ScrollTextContainer>
					<ScrollText />
				</ScrollTextContainer>
				<ScrollTextContainer>
					<ScrollText />
				</ScrollTextContainer>
				<Cube>
					<p>hello</p>
				</Cube>
				{blob()}
			</ArtContainer>
			<FormContainer>
				<Form>
					<NameInput placeholder='Your Name'></NameInput>
					<EmailInput placeholder='You Email'></EmailInput>

					<MessageInput placeholder='Share Your Thoughts'></MessageInput>

					<SendBtn>Send</SendBtn>
				</Form>
			</FormContainer>
		</Container>
	);
}
