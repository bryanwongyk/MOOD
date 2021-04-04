import React, { FunctionComponent, ReactElement, useContext } from 'react';
import { MyButton } from '../../Button';
import { ContextType } from '../../../typings/storetype';
import { GlobalStateContext } from '../../../store/reducers';
// import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

const StyledDiv = styled.div`
	margin: 200px auto;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const StyledPara = styled.p`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-align: center;
`;

interface CompletionCardProps {
	timeTaken: number;
}
const CompletionCard: FunctionComponent<CompletionCardProps> = ({ timeTaken }): ReactElement => {
	const { globalActions, globalState } = useContext(GlobalStateContext) as ContextType;

	const restartHandler = (): void => {
		const currentStretch = globalState.selectedStretchRoutine;
		globalActions.resetStretches();
		globalActions.setSpinner(true);
		setTimeout(() => {
			globalActions.setStretchRoutine(currentStretch);
			globalActions.setSpinner(false);
		}, 1000);
		// <Redirect to="/activities" />;
	};

	return (
		<StyledDiv>
			<h4>Well Done!</h4>
			<StyledPara>
				You've stretched for {timeTaken} minutes and loosened up!
				<br />
				<MyButton onClick={restartHandler}>Start Again</MyButton>
				<br />
				or select another routine from the explorer!
			</StyledPara>
		</StyledDiv>
	);
};

// Prevents unnecessary renders. If the parent re-renders, the child (this Card) will not re-render unless it has changed
export default React.memo(CompletionCard);
