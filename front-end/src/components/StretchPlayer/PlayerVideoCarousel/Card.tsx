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

const TextDiv = styled.div`
	margin: 0 auto;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

interface CardProps {
	id: number;
	name: string;
	imgSrc?: string;
	imgAlt?: string;
	imgExtraDesc?: string;
	stretchInstructions: string[];
	timeInterval: number;
}

const Card: FunctionComponent<CardProps> = ({
	id,
	name,
	imgSrc,
	imgAlt,
	imgExtraDesc,
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
				<TextDiv>
					<p>
						<em>{imgExtraDesc}</em>
					</p>
					<ExtendedOrderedList>
						{stretchInstructions.map((instruction, instructionIndex) => (
							<li key={instructionIndex}>{instruction}</li>
						))}
					</ExtendedOrderedList>
				</TextDiv>
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
				<TextDiv>
					<ExtendedOrderedList>
						{stretchInstructions.map((instruction, instructionIndex) => {
							return <li key={instructionIndex}>{instruction}</li>;
						})}
					</ExtendedOrderedList>
				</TextDiv>
			</ExtendedArticle>
		);
	}
	return content;
};

// Prevents unnecessary renders. If the parent re-renders, the child (this Card) will not re-render unless it has changed
export default React.memo(Card);
