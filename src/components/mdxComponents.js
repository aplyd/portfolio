import styled from 'styled-components';
import React from 'react';

const H1 = styled.h1`
	width: 100%;
	max-width: 80rem;
	margin: 0 auto;
	color: var(--accent-light);
`;
const H2 = styled.h2`
	width: 100%;
	max-width: 80rem;
	margin: 0 auto;
	color: var(--accent-light);
`;
const H3 = styled.h3`
	width: 100%;
	max-width: 80rem;
	margin: 0 auto;
	color: var(--accent-light);
`;
const H4 = styled.h4`
	width: 100%;
	max-width: 80rem;
	margin: 0 auto;
	color: var(--accent-light);
`;
const H5 = styled.h5`
	width: 100%;
	max-width: 80rem;
	margin: 0 auto;
	color: var(--accent-light);
`;

const P = styled.p`
	width: 100%;
	max-width: 80rem;
	margin: 0 auto;
	color: var(--accent-light);
	padding-bottom: 2.4rem;
`;

const A = styled.a`
	color: var(--color-dark);
`;

const UL = styled.ul`
	color: var(--accent-light);
	margin-left: 3.6rem;
	padding-bottom: 2.4rem;
`;

const OL = styled.ol`
	color: var(--accent-light);
	margin-left: 3.6rem;
	padding-bottom: 2.4rem;
`;

const LI = styled.li`
	color: var(--accent-light);
`;

const IMG = styled.img`
	padding-bottom: 24rem;
`;

const Code = styled.code`
	padding: 48rem 0;
`;

export default {
	h1: H1,
	h2: H2,
	h3: H3,
	h4: H4,
	h5: H5,
	p: P,
	a: A,
	ol: OL,
	ul: UL,
	li: LI,
	img: IMG,
	code: Code
};
