import React, { FunctionComponent, ReactElement, useContext } from 'react';
import { MyButton } from '../../Button';
import { ContextType } from '../../../typings/storetype';
import { GlobalStateContext } from '../../../store/reducers';
// import { Redirect } from 'react-router-dom';

interface CompletionCardProps {
	timeTaken: number;
}
const CompletionCard: FunctionComponent<CompletionCardProps> = ({ timeTaken }): ReactElement => {
	const { globalActions, globalState } = useContext(GlobalStateContext) as ContextType;

	const restartHandler = (): void => {
		const currentStretch = globalState.selectedStretchRoutine;
		globalActions.resetStretches();
		setTimeout(() => {
			globalActions.setStretchRoutine(currentStretch);
		}, 1000);
		// <Redirect to="/activities" />;
	};

	return (
		<div>
			<h4>Well Done!</h4>
			<p>
				You've stretched for {timeTaken} minutes and loosened up!
				<br />
				<MyButton onClick={restartHandler}>Start Again</MyButton>
				<br />
				or select another routine from the explorer!
			</p>
		</div>
	);
};

// Prevents unnecessary renders. If the parent re-renders, the child (this Card) will not re-render unless it has changed
export default React.memo(CompletionCard);
