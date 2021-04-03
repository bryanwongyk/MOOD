import { FunctionComponent, ReactElement, useContext } from 'react';
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
	const timer = globalState.cardShownId === id ? <Timer initialTime={initialTime} /> : null;
	return (
		<ExtendedArticle data-interval={timeInterval}>
			{timer}
			<h3>{name}</h3>
			<img key={id} src={imgSrc} alt={imgAlt} />
			<p>
				<ExtendedOrderedList>
					{stretchInstructions.map(instruction => (
						<li>{instruction}</li>
					))}
				</ExtendedOrderedList>
			</p>
		</ExtendedArticle>
	);
};

// Prevents unnecessary renders. If the parent re-renders, the child (this Card) will not re-render unless it has changed
export default Card;
