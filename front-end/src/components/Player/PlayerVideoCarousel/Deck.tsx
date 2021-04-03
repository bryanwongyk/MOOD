import { FunctionComponent, ReactElement } from 'react';
// import theme from '../Theme/theme';
// import bp from '../Theme/breakpoints';
import styled from 'styled-components';
import Card from './Card';

const DeckCarousel = styled.ol`
	list-style: none;
`;

const Deck: FunctionComponent = (): ReactElement => {
	const cards = [
		<Card name="Stretch 1" id={1} />,
		<Card name="Stretch 2" id={2} />,
		<Card name="Stretch 3" id={3} />,
		<Card name="Stretch 4" id={4} />,
	];
	return <DeckCarousel>{cards}</DeckCarousel>;
};

// Prevents unnecessary renders. If the parent re-renders, the child (this Card) will not re-render unless it has changed
export default Deck;
