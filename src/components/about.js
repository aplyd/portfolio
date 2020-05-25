import React from 'react';
import styled from 'styled-components';
import { Spacer, SectionTitle } from './globalStyle';

const Container = styled.div`
	height: 460px;
	position: relative;
`;

const P = styled.p``;

const about = () => {
	return (
		<Container>
			<SectionTitle>ABOUT</SectionTitle>
			<Spacer height={'16px'} />
			<P>
				Labore sit esse occaecat occaecat proident veniam. Esse minim
				sit tempor sint laborum duis magna mollit reprehenderit.
				Adipisicing aliquip laborum cillum voluptate. Cupidatat et elit
				laboris ea commodo adipisicing occaecat ad pariatur cupidatat
				laborum eiusmod. In adipisicing exercitation amet duis amet qui
				laboris culpa exercitation do proident velit occaecat voluptate.
				Ut cillum adipisicing excepteur elit qui commodo commodo
				proident cupidatat.
			</P>
		</Container>
	);
};

export default about;
