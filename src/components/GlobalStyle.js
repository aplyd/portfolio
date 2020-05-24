import styled, { createGlobalStyle } from 'styled-components';

export const PageContainer = styled.div`
	margin: 0 auto;
	padding-top: 56px;
`;

export const ContentContainer = styled.div`
	margin: 0 auto;
	max-width: 960px;
`;

export const HomeSectionTitle = styled.h1`
	padding-top: 8px;
	padding-bottom: 24px;
	color: var(--main-fg-color);
`;

export const VerticalSpacer = styled.div`
	height: ${props => props.height};
`;

export const GlobalStyle = createGlobalStyle`
    :root {
        --main-bg-color: white;
        --main-fg-color: black;
        --accent-color: blue;
    }

    body {
        background-color: var(--main-bg-color);
    }


    h1,h2,h3,h4,h5,h6,p {
        color: var(--main-fg-color);
    }

    input, textarea {
        border: none;
        padding: 8px;
        font-size: 18px;
        text-indent: 8px;
    }

    button {
        min-width: 48px;
        padding: 4px 24px;
        cursor: pointer;
    }
`;
