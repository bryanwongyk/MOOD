import React, { FunctionComponent, ReactElement, useContext } from 'react';
// import theme from '../Theme/theme';
// import bp from '../Theme/breakpoints';
import styled from 'styled-components';
import Timer from '../Timer';
import { ContextType } from '../../../typings/storetype';
import { GlobalStateContext } from '../../../store/reducers';

const CardItem = ({ timeInterval, children }): ReactElement => <div data-interval={timeInterval}>{children}</div>;

const StyledCardItem = styled(CardItem)`
	width: 500px;
	height: 200px;
	list-style: none;
`;

const CardImg = ({ id, imgSrc, imgAlt }): JSX.Element => <img id={id} src={imgSrc} alt={imgAlt} />;

const StyledCardImg = styled(CardImg)`
	height: 50px;
`;

interface CardProps {
	id: number;
	name: string;
	imgSrc: string;
	imgAlt: string;
	timeInterval: number;
}

const Card: FunctionComponent<CardProps> = ({ id, name, imgSrc, imgAlt, timeInterval }): ReactElement => {
	const { globalState } = useContext(GlobalStateContext) as ContextType;
	const initialTime = Math.floor(timeInterval / 1000);
	console.log('initial time', initialTime);
	const timer = globalState.cardShownId === id ? <Timer initialTime={initialTime} /> : null;
	return (
		<StyledCardItem data-interval={timeInterval}>
			{timer}
			<h4>{name}</h4>
			<StyledCardImg id={id} imgSrc={imgSrc} imgAlt={imgAlt} />
		</StyledCardItem>
	);
};

// Prevents unnecessary renders. If the parent re-renders, the child (this Card) will not re-render unless it has changed
export default React.memo(Card);
