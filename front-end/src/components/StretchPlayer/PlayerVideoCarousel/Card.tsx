import React, { FunctionComponent, ReactElement, useContext } from 'react';
import Timer from '../Timer';
import { ContextType } from '../../../typings/storetype';
import { GlobalStateContext } from '../../../store/reducers';
import styled from 'styled-components';

const ExtendedOrderedList = styled.ol`
	text-align: left;
	display: inline-block;
`;

const ExtendedArticle = styled.article`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

interface CardProps {
	id: number;
	name: string;
	imgSrc?: string;
	imgAlt?: string;
	stretchInstructions: string[];
	timeInterval: number;
}

const Card: FunctionComponent<CardProps> = ({
	id,
	name,
	imgSrc,
	imgAlt,
	stretchInstructions,
	timeInterval,
}): ReactElement => {
	const { globalState } = useContext(GlobalStateContext) as ContextType;
	const initialTime = Math.floor(timeInterval / 1000);
	// console.log('initial time', initialTime);
	let content: any = null;
	if (globalState.cardShownId === id) {
		content = (
			<ExtendedArticle key={id} data-interval={timeInterval}>
				<Timer initialTime={initialTime} />
				<h3>{name}</h3>
				<img src={imgSrc} alt={imgAlt} />
				<ExtendedOrderedList>
					{stretchInstructions.map((instruction, instructionIndex) => (
						<li key={instructionIndex}>{instruction}</li>
					))}
				</ExtendedOrderedList>
			</ExtendedArticle>
		);
	}
	//set timer artificially to 1
	// needed because of the bug last stretch card swaps to the congratulations card when the seconds reaches 1 rather than 0.
	// so we can artifically inject a 1
	if (globalState.stretchComplete) {
		content = (
			<ExtendedArticle key={id} data-interval={timeInterval}>
				<h3>1s</h3>
				<h3>{name}</h3>
				<img src={imgSrc} alt={imgAlt} />
				<ExtendedOrderedList>
					{stretchInstructions.map((instruction, instructionIndex) => {
						return <li key={instructionIndex}>{instruction}</li>;
					})}
				</ExtendedOrderedList>
			</ExtendedArticle>
		);
	}
	return content;
};

// Prevents unnecessary renders. If the parent re-renders, the child (this Card) will not re-render unless it has changed
export default React.memo(Card);
