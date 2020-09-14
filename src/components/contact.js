import React from 'react';
import styled from 'styled-components';
import { Spacer, BtnSmall } from './globalStyle';
import TextareaAutosize from 'react-textarea-autosize';
import { FaTwitter, FaGithub, FaDev, FaLinkedin } from 'react-icons/fa';

const Container = styled.div`
	background-color: var(--color-dark);
	@media screen and (max-width: 800px) {
		padding: 0 16px;
	}
	&& > div {
		margin: 0 auto;
		max-width: 80rem;
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
	position: relative;
`;

const Form = styled.form``;

const Input = styled.input`
	border: none;
	outline: none;
	color: white;
	background-color: var(--color-dark);
	border-bottom: 1px solid white;
	width: 100%;
	font-size: 2rem;
	padding-bottom: 2rem;
	&& ::placeholder,
	::-webkit-input-placeholder {
		color: var(--color-medium);
		opacity: 1;
	}
`;

const NameInput = styled(Input)``;

const EmailInput = styled.input`
	border: none;
	outline: none;
	color: white;
	background-color: var(--color-dark);
	border-bottom: 1px solid white;
	width: 100%;
	font-size: 2rem;
	padding-bottom: 2rem;
	&& ::placeholder,
	::-webkit-input-placeholder {
		color: var(--color-medium);
		opacity: 1;
	}
	margin-top: 48px;
`;

const MessageInput = styled(TextareaAutosize)`
	color: white;
	border: none;
	outline: none;
	border-bottom: 1px solid white;
	background-color: var(--color-dark);
	width: 100%;
	margin-top: 64px;
	padding-bottom: 2rem;
	font-size: 2rem;
	line-height: 2.4rem;
	&& ::placeholder,
	::-webkit-input-placeholder {
		color: var(--color-medium);
		opacity: 1;
	}
`;
const SendBtn = styled(BtnSmall)`
	margin-top: 64px;
`;

const IconContainer = styled.div`
	margin-top: 64px;
	display: inline-block;
	position: absolute;
	right: 0;
	bottom: 0;
`;

const Icon = styled.svg`
	fill: var(--accent-light);
	width: 4.8rem;
	height: 4.8rem;
	margin-left: 2.4rem;
`;

export default function Contact() {
	const honeypotForm = () => {
		return (
			<form name='contact' netlify netlify-honeypot='bot-field' hidden>
				<input type='text' name='name' />
				<input type='email' name='email' />
				<textarea name='message'></textarea>
			</form>
		);
	};

	return (
		<Container id='contact'>
			<div>
				<Spacer height={'xlarge'} />
				<Spacer height={'medium'} />
				<Title>Contact</Title>
				{honeypotForm()}
				<FormContainer id='contact'>
					<Spacer height={'large'} />
					<Form name='contact' method='POST' data-netlify='true'>
						<input type='hidden' name='form-name' value='contact' />
						<NameInput
							placeholder='Your Name'
							name='name'
							type='text'
							required
						></NameInput>

						<EmailInput
							placeholder='Your Email'
							name='email'
							type='text'
							required
						></EmailInput>

						<MessageInput
							placeholder='Your Message'
							maxLength='375'
							name='message'
							required
						></MessageInput>

						<SendBtn
							backgroundColor={'var(--accent-light)'}
							color={'var(--color-dark)'}
							borderColor={'var(--accent-light)'}
							type='submit'
						>
							Send
						</SendBtn>
						<IconContainer>
							<a
								href='https://twitter.com/austinftacnik'
								rel='noopener noreferrer'
							>
								<Icon as={FaTwitter}></Icon>
							</a>
							<a
								href='https://github.com/aplyd'
								rel='noopener noreferrer'
							>
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
					</Form>
				</FormContainer>
				<Spacer height={'xlarge'} />
			</div>
		</Container>
	);
}
