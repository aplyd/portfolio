import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { BtnSmall, Spacer } from './globalStyle';

const Container = styled.div`
	width: 100%;
	height: 6rem;
	display: grid;
	grid-template-columns: 12rem 1fr 12rem;
	grid-template-rows: 6rem;
	text-align: center;
	&& > p {
		color: var(--accent-light);
		/* text-transform: uppercase; */
		display: inline-block;
		padding-top: 1.2rem;
		grid-column: 2;
	}
`;

const NavLink = styled(Link)`
	color: var(--accent-light);
	/* padding: 2.4rem 0; */
`;

const Next = styled(NavLink)`
	float: right;
	grid-column: 3;
`;
const Prev = styled(NavLink)`
	float: left;
	grid-column: 1;
`;

const Pagination = ({ currentPage = 1, totalCount }) => {
	const totalPages = Math.ceil(totalCount / 10);
	const nextPage = currentPage + 1;
	const prevPage = currentPage - 1;

	// conditionally display "previous page" button
	const previousPage = () => {
		if (prevPage < 1) {
			return null;
		} else if (currentPage === 2) {
			return (
				<Prev to={`/blog`}>
					<BtnSmall
						backgroundColor={'var(--accent-light)'}
						color={'var(--color-light)'}
						borderColor={'var(--accent-light)'}
					>
						Prev
					</BtnSmall>
				</Prev>
			);
		} else {
			return (
				<Prev to={`/blog/${prevPage}`}>
					<BtnSmall
						backgroundColor={'var(--accent-light)'}
						color={'var(--color-light)'}
						borderColor={'var(--accent-light)'}
					>
						Prev
					</BtnSmall>
				</Prev>
			);
		}
	};

	return (
		<>
			<Container>
				{previousPage()}
				<p>{`Page ${currentPage} of ${totalPages}`}</p>
				{nextPage > totalPages ? null : (
					<Next to={`/blog/${nextPage}`}>
						<BtnSmall
							backgroundColor={'var(--accent-light)'}
							color={'var(--color-light)'}
							borderColor={'var(--accent-light)'}
						>
							Next
						</BtnSmall>
					</Next>
				)}
			</Container>
			<Spacer height={'large'} />
		</>
	);
};

Pagination.propTypes = {
	currentPage: PropTypes.number,
	totalCount: PropTypes.number
};

export default Pagination;
