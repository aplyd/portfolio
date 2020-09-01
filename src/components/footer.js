import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	background-color: var(--dark-color);
	height: 60px;
	text-align: center;
	color: var(--accent-light);
`;

const TM = styled.p`
	float: left;
	padding: 1.6rem 2.4rem 1.6rem 2.4rem;
`;

export default function Footer() {
	return (
		<Container>
			<TM>© 2020 Austin Ftacnik</TM>
		</Container>
	);
}
