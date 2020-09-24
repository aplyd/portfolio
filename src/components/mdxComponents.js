import styled from 'styled-components';
import { MobileTextPadding } from './globalStyle';

const H1 = styled.h1`
	${MobileTextPadding}
	width: 100%;
	max-width: 75rem;
	margin: 0 auto;
	color: var(--color-dark);
`;
const H2 = styled.h2`
	${MobileTextPadding}
	width: 100%;
	max-width: 75rem;
	margin: 0 auto;
	color: var(--color-dark);
`;
const H3 = styled.h3`
	${MobileTextPadding}
	width: 100%;
	max-width: 75rem;
	margin: 0 auto;
	color: var(--color-dark);
`;
const H4 = styled.h4`
	${MobileTextPadding}
	width: 100%;
	max-width: 75rem;
	margin: 0 auto;
	color: var(--color-dark);
`;
const H5 = styled.h5`
	${MobileTextPadding}
	width: 100%;
	max-width: 75rem;
	margin: 0 auto;
	color: var(--color-dark);
`;

const P = styled.p`
	${MobileTextPadding}
	width: 100%;
	max-width: 75rem;
	margin: 0 auto;
	color: var(--color-dark);
`;

const A = styled.a`
	/* ${MobileTextPadding} */
	color: var(--color-dark);
`;

const UL = styled.ul`
	${MobileTextPadding}
	color: var(--color-dark);
	margin-left: 3.6rem;
	padding-bottom: 2.4rem;
`;

const OL = styled.ol`
	/* ${MobileTextPadding} */
	color: var(--color-dark);
	margin-left: 3.6rem;
	padding-bottom: 2.4rem;
`;

const LI = styled.li`
	/* ${MobileTextPadding} */
	color: var(--color-dark);
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

const Small = styled.small`
	${MobileTextPadding}
	width: 100%;
	max-width: 75rem;
	margin: 0 auto;
	color: var(--color-dark);
	font-size: 1.2rem;
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
	code: Code,
	small: Small
};
