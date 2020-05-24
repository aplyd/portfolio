import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	background: var(--main-bg-color);
`;

const GridContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 40px;
	@media only screen and (max-width: 600px) {
		grid-template-columns: 1fr;
	}
`;

const SplitContainer = styled.div`
	height: 400px;
	&& > h2 {
		padding-top: 8px;
		padding-bottom: 16px;
	}
`;
const AboutContainer = styled(SplitContainer)``;
const FormContainer = styled(SplitContainer)``;

const NameInput = styled.input`
	display: block;
	width: 100%;
	margin-bottom: 8px;
	border: solid 2px black;
`;
const MessageInput = styled.textarea`
	display: block;
	width: 100%;
	margin-bottom: 8px;
	border: solid 2px black;
`;

const SubmitBtn = styled.button`
	border: solid 2px black;
	background-color: var(--main-fg-color);
	color: var(--main-bg-color);
	transition: transform 0.3s ease-in-out;
	&&:hover {
		transform: translateY(2px);
		transition: transform 0.3s ease-in-out;
	}
`;

export default function Contact() {
	const [name, setName] = useState();
	const [message, setMessage] = useState();

	return (
		<Container>
			{/* <HomeSectionTitle>Contact</HomeSectionTitle> */}
			<GridContainer>
				<AboutContainer>
					<h2>Hi, I&apos;m Austin Ftacnik</h2>
					<p>
						Laboris cupidatat amet aute aliquip anim est.
						Consectetur veniam deserunt minim nisi qui et excepteur.
						Proident veniam Lorem dolore esse anim. Est culpa culpa
						occaecat in dolor et laboris sint.
					</p>
				</AboutContainer>
				<FormContainer>
					<h2>Contact</h2>
					<form>
						<NameInput
							type='text'
							placeholder='name'
							onChange={e => setName(e.target.value)}
							value={name}
						></NameInput>
						<MessageInput
							placeholder='message'
							onChange={e => setMessage(e.target.value)}
							value={message}
						></MessageInput>
						<SubmitBtn type='submit'>Send</SubmitBtn>
					</form>
				</FormContainer>
			</GridContainer>
		</Container>
	);
}
