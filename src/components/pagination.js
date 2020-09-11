import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	background: red;
`;

const Pagination = ({ currentPage = 1, totalCount }) => {
	const totalPages = Math.ceil(totalCount / 10);
	const nextPage = currentPage + 1;
	const prevPage = currentPage - 1;
	return (
		<>
			<Container>
				{nextPage > totalPages ? null : (
					<Link to={`/blog/${prevPage}`}>← Previous</Link>
				)}
				{prevPage <= 0 ? null : (
					<Link to={`/blog/${nextPage}`}>Next →</Link>
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
