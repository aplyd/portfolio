import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
	position: relative;
	width: 100%;
	margin: 0 auto;
	padding: 24px 8px 0;
	display: flex;
	justify-content: flex-end;
`;

const LogoContainer = styled.div``;

const LogoText = styled.h2`
	text-transform: uppercase;
	font-size: 2.8rem;
	margin: -12px 0;
`;

const Outline = styled(LogoText)`
	color: white;
	text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
		1px 1px 0 #000;
`;

const MainLogo = styled(LogoText)`
	font-weight: bold;
`;

const Italic = styled(Outline)`
	font-style: italic;
`;

export default function Logo() {
	return (
		<Header>
			<LogoContainer>
				<Outline>Ftacnik</Outline>
				<MainLogo>Ftacnik</MainLogo>
				<Italic>Ftacnik</Italic>
			</LogoContainer>
		</Header>
	);
}
