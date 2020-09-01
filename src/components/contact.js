import React from 'react';
import styled from 'styled-components';
import { Spacer, BtnSmall } from './globalStyle';
import ScrollText from './scrollText';
import TextareaAutosize from 'react-textarea-autosize';

const Container = styled.div`
	background-color: var(--dark-color);
	@media screen and (max-width: 700px) {
		padding: 0 16px;
	}
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
const SendBtn = styled(BtnSmall)`
	margin-top: 48px;
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
	return (
		<Container>
			<div>
				<Spacer height={'xlarge'} />
				<Title>Say Hello</Title>
				<FormContainer id='contact'>
					<Spacer height={'large'} />
					<Form name='contact' method='POST' data-netlify='true'>
						<NameInput
							placeholder='Your Name'
							name='name'
						></NameInput>

						<EmailInput
							placeholder='You Email'
							name='email'
						></EmailInput>

						<MessageInput
							placeholder='Your Message'
							maxLength='375'
							name='message'
						></MessageInput>

						<SendBtn
							backgroundColor={'var(--accent-light)'}
							color={'var(--dark-color)'}
							borderColor={'var(--accent-light)'}
							type='submit'
						>
							Send
						</SendBtn>
					</Form>
				</FormContainer>
				<Spacer height={'xlarge'} />
				<Spacer height={'large'} />
			</div>
		</Container>
	);
}
