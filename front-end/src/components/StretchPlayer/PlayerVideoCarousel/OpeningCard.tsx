import { FunctionComponent, ReactElement, useEffect, useState, useContext } from 'react';
import { ContextType } from '../../../typings/storetype';
import { GlobalStateContext } from '../../../store/reducers';
import styled from 'styled-components';

const StyledDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const OpeningCard: FunctionComponent = (): ReactElement => {
	const { globalActions } = useContext(GlobalStateContext) as ContextType;
	const [timeLeft, setTimeLeft] = useState(5);
	useEffect(() => {
		// exit early when we reach 0
		// save intervalId to clear the interval when the
		// component re-renders
		const tick = setTimeout(() => {
			setTimeLeft(timeLeft - 1);
		}, 1000);

		if (timeLeft <= 0) {
			clearTimeout(tick);
			globalActions.setStretchOpening(false);
			return;
		}

		// add timeLeft as a dependency to re-rerun the effect
		// when we update it
		return () => {
			clearTimeout(tick);
		};
	}, [timeLeft]);

	return (
		<StyledDiv>
			<h1>Get ready...</h1>
			<h3>{timeLeft}s</h3>
		</StyledDiv>
	);
};

// Prevents unnecessary renders. If the parent re-renders, the child (this Card) will not re-render unless it has changed
export default OpeningCard;
