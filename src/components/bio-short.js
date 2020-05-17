import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 90%;
	margin: 0 auto;
`;

export default function bioShort() {
	return (
		<Container>
			<h1>ABOUT</h1>
			<p>//////////////////////</p>
			<p>i like to code. make music. read. (and other human things)</p>

			<a href='#' target='_blank'>
				github
			</a>
			<a href='#' target='_blank'>
				twitter
			</a>
			<a href='#' target='_blank'>
				spotify
			</a>
		</Container>
	);
}
