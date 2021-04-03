import React, { FunctionComponent, ReactElement } from 'react';
// import theme from '../Theme/theme';
// import bp from '../Theme/breakpoints';
import styled from 'styled-components';

const CardItem = ({ key, children }): ReactElement => <div key={key}>{children}</div>;

const StyledCardItem = styled(CardItem)`
	width: 500px;
	height: 200px;
	list-style: none;
`;

const CardImg = ({ imgSrc, imgAlt, key }): JSX.Element => <img key={key} src={imgSrc} alt={imgAlt} />;

const StyledCardImg = styled(CardImg)`
	height: 50px;
`;

interface CardProps {
	name: string;
	id: number;
	imgSrc: string;
	imgAlt: string;
}

const Card: FunctionComponent<CardProps> = ({ name, imgSrc, id, imgAlt }): ReactElement => {
	return (
		<StyledCardItem key={id}>
			<h4>{name}</h4>
			<StyledCardImg imgSrc={imgSrc} imgAlt={imgAlt} key={id} />
		</StyledCardItem>
	);
};

// Prevents unnecessary renders. If the parent re-renders, the child (this Card) will not re-render unless it has changed
export default React.memo(Card);
