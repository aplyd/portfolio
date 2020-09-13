import styled, { createGlobalStyle, css } from 'styled-components';
import { motion } from 'framer-motion';

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

export const MobileSpacing = css`
	@media screen and (max-width: 960px) {
		margin-left: 16px;
		margin-right: 16px;
	}
`;

const Btn = styled(motion.button)`
	text-transform: uppercase;
	cursor: pointer;
	border-radius: 5rem;
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
        --color-dark: #252525;
        ${'' /* light gray */}
        --color-light: #5F6E83;
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

    a {
        text-decoration: none;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    body {
        background-color: var(--color-light);
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

// mdx design system

export const H1 = styled.h1`
	width: 100%;
	max-width: 80rem;
	margin: 0 auto;
	color: var(--accent-light);
`;
export const H2 = styled.h2`
	width: 100%;
	max-width: 80rem;
	margin: 0 auto;
	color: var(--accent-light);
`;
export const H3 = styled.h3`
	width: 100%;
	max-width: 80rem;
	margin: 0 auto;
	color: var(--accent-light);
`;
export const H4 = styled.h4`
	width: 100%;
	max-width: 80rem;
	margin: 0 auto;
	color: var(--accent-light);
`;
export const H5 = styled.h5`
	width: 100%;
	max-width: 80rem;
	margin: 0 auto;
	color: var(--accent-light);
`;

export const P = styled.p`
	width: 100%;
	max-width: 80rem;
	margin: 0 auto;
	color: var(--accent-light);
`;

export const A = styled.a`
	background: red;
`;

export const UL = styled.ul`
	background: red;
`;

export const OL = styled.ol`
	background: red;
`;

export const LI = styled.li`
	background: red;
`;
