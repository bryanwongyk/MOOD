import React, { FunctionComponent, ReactElement, useContext } from 'react';
import { Button } from '../../Button';
import { ContextType } from '../../../typings/storetype';
import { GlobalStateContext } from '../../../store/reducers';
// import { Redirect } from 'react-router-dom';

interface CompletionCardProps {
	timeTaken: number;
}
const CompletionCard: FunctionComponent<CompletionCardProps> = ({ timeTaken }): ReactElement => {
	const { globalActions } = useContext(GlobalStateContext) as ContextType;

	const restartHandler = (): void => {
		globalActions.resetStretches();
		setTimeout(() => {
			globalActions.setStretchRoutine('Breathe');
		}, 1000);
		// <Redirect to="/activities" />;
	};

	return (
		<div>
			<h4>Well Done!</h4>
			<p>
				You've stretched for {timeTaken} minutes and loosened up!
				<br />
				<Button onClick={restartHandler}>Start Again</Button>
				<br />
				or select another routine from the explorer!
			</p>
		</div>
	);
};

// Prevents unnecessary renders. If the parent re-renders, the child (this Card) will not re-render unless it has changed
export default React.memo(CompletionCard);