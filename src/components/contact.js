import React, { useState } from 'react';
import styled from 'styled-components';
import { Spacer } from './globalStyle';
import ScrollText from './scrollText';
import TextareaAutosize from 'react-textarea-autosize';

const Container = styled.div`
	background-color: var(--dark-color);
	&& > div {
		margin: 0 auto;
		max-width: 70rem;
	}
`;

const Title = styled.h2`
	/* max-width: 50rem;
	margin: 0 auto; */
	color: var(--accent-light);
	text-transform: uppercase;
`;

const FormContainer = styled.div`
	max-width: 50rem;
`;

const Form = styled.form``;

const Input = styled.input`
	border: none;
	outline: none;
	color: white;
	background-color: var(--dark-color);
	border-bottom: 1px solid white;
	width: 100%;
	font-size: 2rem;
	padding-bottom: 2rem;
	&& ::placeholder,
	::-webkit-input-placeholder {
		color: var(--medium-color);
		opacity: 1;
	}
`;

const NameInput = styled(Input)``;

const EmailInput = styled(Input)`
	margin-top: 48px;
`;

const MessageInput = styled(TextareaAutosize)`
	color: white;
	border: none;
	outline: none;
	border-bottom: 1px solid white;
	background-color: var(--dark-color);
	width: 100%;
	margin-top: 64px;
	padding-bottom: 2rem;
	font-size: 2rem;
	line-height: 2.4rem;
	&& ::placeholder,
	::-webkit-input-placeholder {
		color: var(--medium-color);
		opacity: 1;
	}
`;
const SendBtn = styled.button`
	border-radius: 50px;
	border: solid 2px var(--accent-light);
	padding: 20px 52px;
	text-transform: uppercase;
	background-color: var(--accent-light);
	color: var(--dark-color);
	margin-top: 48px;
	/* float: right; */
`;

// const ArtContainer = styled.div`
// 	display: grid;
// 	grid-template-columns: 220px 1fr 220px;
// 	grid-template-rows: 1fr;
// 	max-width: 680px;
// 	margin: 0 auto;
// `;

// const ScrollTextContainer = styled.div`
// 	display: flex;
// 	flex-direction: row;
// 	overflow: hidden;
// `;

// const SlantedLine = styled.div`
// 	width: 50px;
// 	height: 100px;
// 	&& > div {
// 		width: 180px;
// 		height: 47px;
// 		border-bottom: 2px solid black;
// 		transform: translateY(120px) translateX(56px) rotate(120deg);
// 	}
// `;

export default function Contact() {
	// const [name, setName] = useState(null);
	// const [email, setEmail] = useState(null)
	// const [message, setMessage] = useState(null);

	return (
		<Container>
			{/* <Spacer height={'xlarge'} />
			<ArtContainer>
				<ScrollTextContainer>
					<ScrollText />
				</ScrollTextContainer>
				<SlantedLine>
					<div></div>
				</SlantedLine>
				<ScrollTextContainer>
					<ScrollText />
				</ScrollTextContainer>
			</ArtContainer> */}

			<div>
				<Spacer height={'xlarge'} />
				<Title>Say Hello</Title>
				<FormContainer id='contact'>
					<Spacer height={'large'} />
					<Form>
						<NameInput placeholder='Your Name'></NameInput>
						<EmailInput placeholder='You Email'></EmailInput>

						<MessageInput
							placeholder='Your Message'
							maxLength='375'
							// value={message}
							// onChange={e => setMessage(e.target.value)}
						></MessageInput>

						<SendBtn>Send</SendBtn>
					</Form>
				</FormContainer>
				<Spacer height={'xlarge'} />
				<Spacer height={'large'} />
			</div>
		</Container>
	);
}
