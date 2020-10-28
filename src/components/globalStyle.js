import styled, { createGlobalStyle, css } from 'styled-components';

// special (utility) components

export const PageContainer = styled.div`
	margin: 0 auto;
	/* TODO below padding is not needed, just should replace with spacer */
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

export const MobileTextPadding = css`
	padding-top: 1.2rem;
	padding-bottom: 1.2rem;
	@media screen and (max-width: 816px) {
		padding-left: 1.6rem;
		padding-right: 1.6rem;
	}
`;

const Btn = styled.button`
	text-transform: uppercase;
	cursor: pointer;
	border-radius: var(--circular);
`;

export const BtnLarge = styled(Btn)`
	width: 19rem;
	height: 7rem;
	background-color: ${props => props.backgroundColor};
	color: ${props => props.color};
	border: ${props => `1px solid ${props.borderColor}`};
`;

export const BtnSmall = styled(Btn)`
	width: 12rem;
	height: 5rem;
	background-color: ${props => props.backgroundColor};
	color: ${props => props.color};
	border: ${props => `1px solid ${props.borderColor}`};
`;

// global css

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    :root {
        ${'' /* black */}
        --color-dark: #171717;
        ${'' /* light gray */}
        --color-light: #717171;
        ${'' /* medium gray */}
        --color-medium: #bcbcbc;
        ${'' /* white */}
        --accent-light: white;
        --spacing-xsmall: 4px;
        --spacing-small: 8px;
        --spacing-medium: 32px;
        --spacing-large: 64px;
        --spacing-xlarge: 128px;
        --section-height: 664px;
        --rounded: 1.2rem;
        --circular: 4rem;
        --grvsc-border-radius: var(--rounded);
        @media screen and (max-width: 800px) {
        --grvsc-border-radius: 0;
        }
    }

    html,
    body,
    :root {
        margin: 0;
        padding: 0;
        width: 100vw;
        overflow-x: hidden;
    }

    html {
        scroll-behavior: smooth;
        overscroll-behavior: none;
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

    img {
        max-width: 100%;
        height: auto;
    }

    body {
        background-color: var(--color-dark);
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

    a {
        text-decoration: none;
        font-size: 1.8rem;
    }

    small {
        font-size: 1.8rem;
    }

    li {
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
        border-radius: var(--circular);
        font-size: 1.8rem;
    }

    pre {
        margin-bottom: 0;
    }

    code {
        font-size: 1.4rem;
        border-radius: 0.8rem;
        background-color: #000;
        color: var(--accent-light);
        padding: 0.6rem 1rem 0.6rem 1.6rem;
        margin-right: 0.4rem;
    }


    ${'' /* markdown images */}
    .gatsby-image-outer-wrapper {
        display: contents;
    }

    .gatsby-resp-image-wrapper {
        margin-top: 2.4rem;
        margin-bottom: 2.4rem;
    }


    .gatsby-resp-image-wrapper,  .gatsby-resp-image-bacgkround-image, .gatsby-resp-image-image {
        border-radius: var(--rounded);
        background-color: transparent;
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
