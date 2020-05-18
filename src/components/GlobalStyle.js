import styled, { createGlobalStyle, css } from 'styled-components';

export const PageContainer = styled.div`
	margin: 0 auto;
	padding-top: 56px;
`;

export const ContentContainer = styled.div`
	margin: 0 auto;
	max-width: 960px;
`;

export const GlobalStyle = createGlobalStyle`
    :root {
        --main-bg-color: white;
        --main-fg-color: black;
        --secondary-bg-color: lightgray;
    }

    body {
        background-color: var(--main-bg-color);
    }

    h1,h2,h3,h4,h5,h6,p {
        color: var(--main-fg-color);
    }
`;
