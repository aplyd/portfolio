import React, { useState } from 'react';
import styled from 'styled-components';
import { Spacer } from './globalStyle';
import ScrollText from './ScrollText';
import TextareaAutosize from 'react-textarea-autosize';


const FormContainer = styled.div`
	max-width: 680px;
	margin: 0 auto;
`;

const Form = styled.form`
`;

const Input = styled.input`
	border: none;
	outline: none;
	color: var(--main-fg-color);
	background-color: var(--main-bg-color);
	border-bottom: 2px solid var(--main-fg-color);
	width: 100%;
`;

const NameInput = styled(Input)`
`;

const EmailInput = styled(Input)`
	margin-top: 48px;

`;

const MessageInput = styled(TextareaAutosize)`
	/* color: var(--main-fg-color); */
	color: red;
	border: none;
	outline: none;
	border-bottom: 2px solid var(--main-fg-color);
	background-color: var(--main-bg-color);
	width: 100%;
	padding-top: 64px;
	&&::placeholder {
		color: var(--main-fg-color);
	}
`;
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

const ArtContainer = styled.div`
	display: grid;
	grid-template-columns: 220px 1fr 220px;
	grid-template-rows: 1fr;
	max-width: 680px;
	margin: 0 auto;
`

const ScrollTextContainer = styled.div`
	display: flex;
	flex-direction: row;
	overflow: hidden;
`;

const SlantedLine = styled.div`
	width: 50px;
	height: 100px;
	&& > div {
		width: 180px; 
		height: 47px; 
		border-bottom: 2px solid black; 
		transform:   translateY(120px) translateX(56px) rotate(120deg); 
	}
`

export default function Contact() {
	// const [name, setName] = useState();
	// const [message, setMessage] = useState();

	return (
		<>
			<Spacer height={'xlarge'} />
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
			</ArtContainer>

			<FormContainer>
				<Spacer height={'medium'} />
				<Form>
					<NameInput placeholder='Your Name'></NameInput>
					<EmailInput placeholder='You Email'></EmailInput>

					<MessageInput
						placeholder='Share Your Thoughts'
						maxLength='375'
					>
						{' '}
					</MessageInput>

					<SendBtn>Send</SendBtn>
				</Form>
			</FormContainer>
		</>
	);
}
