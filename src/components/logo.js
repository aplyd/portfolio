import React from 'react';
import { Box, Text } from '@chakra-ui/core'
import { sigTextShadow } from './globalStyle'

// const Header = styled.div`
// 	position: relative;
// 	width: 100%;
// 	margin: 0 auto;
// 	text-align: center;
// 	/* @media screen and (max-width: 960px) {
// 		padding-right: 16px;
// 	} */
// `;

// const LogoContainer = styled.div``;

// const LogoText = styled.h2`
// 	text-transform: uppercase;
// 	font-size: 140px;
// 	line-height: 130px;
// 	margin: -12px 0;

// `;

// const Outline = styled(LogoText)`
// 	color: var(--main-bg-color);
// 	text-shadow: -3px -3px 0 var(--main-fg-color),
// 		3px -3px 0 var(--main-fg-color), -3px 3px 0 var(--main-fg-color),
// 		3px 3px 0 var(--main-fg-color);
// 	/* font-weight: bold; */
// `;

// const MainLogo = styled(LogoText)`
// 	font-weight: bold;
// 	color: var(--main-fg-color);
// `;

// const Italic = styled(Outline)`
// 	font-style: italic;
// `;

export default function Logo() {
	return (
		// <Header>
		// 	<Spacer height={'xlarge'} />
		// 	<Spacer height={'large'} />
		// 	<LogoContainer>
		// 		<Outline>Ftacnik</Outline>
		// 		<MainLogo>Ftacnik</MainLogo>
		// 		<Italic>Ftacnik</Italic>
		// 	</LogoContainer>
		// </Header>
		<>
			<Box w="100%" p="4">
				<Text fontSize="6xl">FTACNIK</Text>
				<Text fontSize="6xl" textShadow={sigTextShadow}>FTACNIK</Text>
				<Text fontSize="6xl">FTACNIK</Text>
			</Box>
		</>
	);
}
