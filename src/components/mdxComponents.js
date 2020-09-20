import styled from 'styled-components';
import { MobileTextPadding } from './globalStyle';

const H1 = styled.h1`
	${MobileTextPadding}
	width: 100%;
	max-width: 80rem;
	margin: 0 auto;
	color: var(--accent-light);
`;
const H2 = styled.h2`
	${MobileTextPadding}
	width: 100%;
	max-width: 80rem;
	margin: 0 auto;
	color: var(--accent-light);
`;
const H3 = styled.h3`
	${MobileTextPadding}
	width: 100%;
	max-width: 80rem;
	margin: 0 auto;
	color: var(--accent-light);
`;
const H4 = styled.h4`
	${MobileTextPadding}
	width: 100%;
	max-width: 80rem;
	margin: 0 auto;
	color: var(--accent-light);
`;
const H5 = styled.h5`
	${MobileTextPadding}
	width: 100%;
	max-width: 80rem;
	margin: 0 auto;
	color: var(--accent-light);
`;

const P = styled.p`
	${MobileTextPadding}
	width: 100%;
	max-width: 80rem;
	margin: 0 auto;
	color: var(--accent-light);
`;

const A = styled.a`
	/* ${MobileTextPadding} */
	color: var(--color-dark);
`;

const UL = styled.ul`
	${MobileTextPadding}
	color: var(--accent-light);
	margin-left: 3.6rem;
	padding-bottom: 2.4rem;
`;

const OL = styled.ol`
	/* ${MobileTextPadding} */
	color: var(--accent-light);
	margin-left: 3.6rem;
	padding-bottom: 2.4rem;
`;

const LI = styled.li`
	/* ${MobileTextPadding} */
	color: var(--accent-light);
`;

const IMG = styled.img`
	overflow: hidden;
	border-radius: 40px;
	@media screen and (max-width: 816px) {
		margin-left: 16px;
		margin-right: 16px;
	}
	@media screen and (max-width: 800px) {
		border-radius: 0;
	}
`;

const Code = styled.code`
	font-size: 1.4rem;
	padding-top: 2rem;
	padding-bottom: 2rem;
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
