import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
	position: relative;
	width: 100%;
	margin: 0 auto;
	padding: 24px 0;
	display: flex;
	justify-content: flex-end;
	@media screen and (max-width: 960px) {
		padding-right: 16px;
	}
`;

const LogoContainer = styled.div``;

const LogoText = styled.h2`
	text-transform: uppercase;
	font-size: 2.8rem;
	margin: -12px 0;
`;

const Outline = styled(LogoText)`
	color: var(--main-bg-color);
	text-shadow: -1px -1px 0 var(--main-fg-color),
		1px -1px 0 var(--main-fg-color), -1px 1px 0 var(--main-fg-color),
		1px 1px 0 var(--main-fg-color);
`;

const MainLogo = styled(LogoText)`
	font-weight: bold;
	color: var(--main-fg-color);
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
