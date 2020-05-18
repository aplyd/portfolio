import styled, { createGlobalStyle, css } from 'styled-components';

export const PageContainer = styled.div`
	max-width: 960px;
	margin: 0 auto;
	padding-top: 56px;
`;

export const GlobalStyle = createGlobalStyle`
    :root {
        --main-bg-color: white;
        --main-fg-color: black;
    }

    body {
        background-color: var(--main-bg-color);
    }

    h1,h2,h3,h4,h5,h6,p {
        color: var(--main-fg-color);
    }
`;
