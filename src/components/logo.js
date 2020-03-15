import React from 'react'
import styled from 'styled-components'

const Container = styled.div `
    position: absolute;
    top: 16px;
    right: 5vw;
`
const LogoText = styled.h2 `
    text-transform: uppercase;
    font-size: 1.5rem;
    margin: -4px 0;
`

const Outline = styled(LogoText) `
    color: white;
    text-shadow:
    -1px -1px 0 #000,  
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
`

const MainLogo = styled(LogoText) `
    font-weight: bold;
`

const Italic = styled(Outline) `
    font-style: italic;
`

export default function Logo() {
    return (
        <Container>
            <Outline>Ftacnik</Outline>
            <MainLogo>Ftacnik</MainLogo>
            <Italic>Ftacnik</Italic>
        </Container>
    )
}
