import styled, { createGlobalStyle, css } from 'styled-components';

export const PageContainer = styled.div`
	margin: 0 auto;
	padding-top: 56px;
    background-color: var(--main-bg-color);
`;

export const ContentContainer = styled.div`
	margin: 0 auto;
	max-width: 960px;
`;

export const SectionTitle = styled.h1`
	padding-top: 8px;
	padding-bottom: 24px;
	color: var(--main-fg-color);
`;

export const Spacer = styled.div`
	height: ${props => `var(--spacing-${props.height})`};
	width: ${props =>
        `var(--spacing-${props.width})` ? `var(--spacing-${props.width})` : 0};
	display: ${props => (props.width ? 'inline' : 'block')};
`;

export const SectionWrapper = styled.div`
	background-color: ${props => props.bgColor};
`;

export const MobileSpacing = css`
	@media screen and (max-width: 960px) {
		margin-left: 16px;
		margin-right: 16px;
	}
`;

export const BtnLg = styled.button`
	color: white;
	background-color: black;
	border: solid 3px white;
	min-width: 48px;
	min-height: 64px;
	text-transform: uppercase;
	${MobileSpacing}
	cursor: pointer;
`;

export const GlobalStyle = createGlobalStyle`
    :root {
        --main-bg-color: #c9c9c9;
        --main-fg-color: black;
        --accent-color: #3464de;
        --spacing-xsmall: 4px;
        --spacing-small: 8px;
        --spacing-medium: 32px;
        --spacing-large: 64px;
        --spacing-xlarge: 128px;
        --section-height: 664px;
    }

    html {
        scroll-behavior: 'smooth';
        font-size: 10px;
    }

    body {
        background-color: var(--main-bg-color);
    }

    h1,h2,h3,h4,h5,h6,p {
        color: var(--main-fg-color);
        max-width: 960px;
    }

    h1 {
        text-transform: uppercase;
    }

    p {
        font-size: 1.8rem;
        line-height: 1.3em;
    }

    input, textarea {
        border: none;
        padding: 8px 8px 8px 0;
        font-size: 1.8rem;
    }
    
    button {
        min-width: 48px;
        padding: 4px 24px;
        cursor: pointer;
        border-radius: 8px;
    }
`;
