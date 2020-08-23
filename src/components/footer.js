import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	background-color: black;
	height: 60px;
	text-align: center;
	color: var(--main-bg-color);
`;

const TM = styled.p`
	float: left;
	padding: 1.6rem;
`;

const Location = styled.p`
	float: right;
	padding: 1.6rem;
`;

export default function Footer() {
	return (
		<Container>
			<TM>© 2020 Austin Ftacnik</TM>
			<Location>Seattle, WA</Location>
		</Container>
	);
}
