import React, { useState } from 'react';
import styled from 'styled-components';
import { Spacer } from './globalStyle';
import ScrollText from './ScrollText';

const Container = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 360px;
	@media screen and (max-width: 800px) {
		grid-template-columns: 1fr;
		grid-template-rows: 360px 360px;
	}
	box-shadow: -1px -1px var(--main-fg-color), -2px -2px black,
		-3px -3px var(--main-fg-color), -4px -4px var(--main-fg-color),
		-5px -5px var(--main-fg-color), -6px -6px var(--main-fg-color),
		-7px -7px var(--main-fg-color), -8px -8px var(--main-fg-color);
	background-color: var(--main-bg-color);
	border: solid 2px var(--main-fg-color);
`;

const FormContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const ArtContainer = styled.div`
	display: flex;
	flex-direction: row;
`;

const Input = styled.input`
	border: none;
	outline: none;
	color: var(--main-fg-color);
	background-color: var(--main-bg-color);
	border-bottom: 2px solid var(--main-fg-color);
	width: 100%;
	max-width: 320px;
	margin-top: 24px;
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
	max-width: 320px;
	margin-top: 24px;
	&&::placeholder {
		color: var(--main-fg-color);
	}
`;

const ScrollTextContainer = styled.div`
	display: flex;
	flex-direction: row;
	height: 204px;
`;

export default function Contact() {
	const [name, setName] = useState();
	const [message, setMessage] = useState();

	return (
		<Container>
			<FormContainer>
				<NameInput placeholder='Your Name'></NameInput>
				<EmailInput placeholder='You Email'></EmailInput>
				<MessageInput placeholder='Share Your Thoughts'></MessageInput>
			</FormContainer>
			<ArtContainer>
				<ScrollTextContainer>
					<ScrollText />
				</ScrollTextContainer>
			</ArtContainer>
		</Container>
	);
}
