import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
	width: 100%;
	height: 4.8rem;
	background: red;
`;

const Next = styled(Link)`
	float: right;
	background: blue;
`;
const Prev = styled(Link)`
	float: left;
	background: blue;
`;

const Pagination = ({ currentPage = 1, totalCount }) => {
	const totalPages = Math.ceil(totalCount / 2);
	const nextPage = currentPage + 1;
	const prevPage = currentPage - 1;

	// conditionally display "previous page" button
	const previousPage = () => {
		if (prevPage < 1) {
			return null;
		} else if (currentPage === 2) {
			return <Prev to={`/blog`}>← Previous</Prev>;
		} else {
			return <Prev to={`/blog/${prevPage}`}>← Previous</Prev>;
		}
	};

	return (
		<>
			<Container>
				{previousPage()}
				{nextPage > totalPages ? null : (
					<Next to={`/blog/${nextPage}`}>Next →</Next>
				)}
			</Container>
		</>
	);
};

Pagination.propTypes = {
	currentPage: PropTypes.number,
	totalCount: PropTypes.number
};

export default Pagination;
