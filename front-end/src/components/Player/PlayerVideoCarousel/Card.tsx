import React, { FunctionComponent, ReactElement } from 'react';
// import theme from '../Theme/theme';
// import bp from '../Theme/breakpoints';
import styled from 'styled-components';

const CardItem = ({ key, children }): ReactElement => <li key={key}>{children}</li>;

const StyledCardItem = styled(CardItem)`
	width: 200px;
	height: 200px;
	background: red;
	list-style: none;
`;

interface CardProps {
	name: string;
	id: number;
	imgSrc?: string;
	imgDescription?: string;
}

const Card: FunctionComponent<CardProps> = ({ name, imgSrc, imgDescription, id }): ReactElement => {
	return (
		<StyledCardItem key={id}>
			<h4>{name}</h4>
			<img src={imgSrc} alt={imgDescription} />
		</StyledCardItem>
	);
};

// Prevents unnecessary renders. If the parent re-renders, the child (this Card) will not re-render unless it has changed
export default React.memo(Card);
