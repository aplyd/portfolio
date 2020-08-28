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
    * {
        box-sizing: border-box;
    }

    :root {
        ${'' /* black */}
        --dark-color: #252525;
        ${'' /* light gray */}
        --light-color: #bcbcbc;
        ${'' /* medium gray */}
        --medium-color: #999999;
        ${'' /* white */}
        --accent-light: white;
        ${'' /* blue */}
        --accent-color: #3199D3;
        ${'' /* peach */}
        --accent-color2: #e5b0a0;

        --spacing-xsmall: 4px;
        --spacing-small: 8px;
        --spacing-medium: 32px;
        --spacing-large: 64px;
        --spacing-xlarge: 128px;
        --section-height: 664px;
    }

    html,
    body,
    :root {
        margin: 0;
        padding: 0;
        ${'' /* font-size: 10px; */}
        width: 100vw;
        overflow-x: hidden;
    }

    html {
        scroll-behavior: 'smooth';
        font-size: 10px;
    }

    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ol,
    ul {
        margin: 0;
        padding: 0;
        font-weight: normal;
        font-family: 'Roboto', sans-serif;
    }

    ol,
    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    body {
        background-color: var(--light-color);
    }

    h1 {
        text-transform: uppercase;
        font-size: 6.4rem;
    }

    h2 {
        font-size: 4.8rem;
    }

    h3 {
        font-size: 3.6rem;
    }

    h4 {
        font-size: 2.4rem;
    }

    h5 {
        font-size: 2.2rem;
    }

    h6 {
        font-size: 2rem;
    }

    p {
        font-size: 1.8rem;
        line-height: 1.6em;
    }

    input, textarea {
        border: none;
        padding: 8px 8px 8px 0;
        font-size: 1.8rem;
    }

    input::placeholder {
        color: #ffffff;
    }
    
    button {
        min-width: 48px;
        padding: 4px 24px;
        cursor: pointer;
        border-radius: 8px;
        font-size: 1.8rem;
    }

    @media screen and (max-width: 480px) {
        h1 {
            text-transform: uppercase;
            font-size: 5.8rem;
        }

        h2 {
            font-size: 4.2rem;
        }

        h3 {
            font-size: 3rem;
        }

        h4 {
            font-size: 1.8rem;
        }

        h5 {
            font-size: 1.6rem;
        }

        h6 {
            font-size: 1.4rem;
        }
    }
`;
