import { FunctionComponent, ReactElement, useState, useEffect, useContext } from 'react';
import { ContextType } from '../../../typings/storetype';
import { GlobalStateContext } from '../../../store/reducers';

interface TimerProps {
	initialTime: number;
}

// https://stackoverflow.com/questions/57137094/implementing-a-countdown-timer-in-react-with-hooks
const Timer: FunctionComponent<TimerProps> = ({ initialTime }): ReactElement => {
	const { globalActions, globalState } = useContext(GlobalStateContext) as ContextType;
	// initialize timeLeft with the seconds prop
	const [timeLeft, setTimeLeft] = useState(initialTime);

	useEffect(() => {
		// exit early when we reach 0
		console.log(timeLeft);

		// save intervalId to clear the interval when the
		// component re-renders
		const tick = setTimeout(() => {
			setTimeLeft(timeLeft - 1);
		}, 1000);

		if (timeLeft <= 1) {
			if (globalState.cardShownId === globalState.lastCardId) {
				globalActions.setStretchComplete();
				console.log(globalState.stretchComplete);
			}
			clearTimeout(tick);
			return;
		}

		// add timeLeft as a dependency to re-rerun the effect
		// when we update it
		return () => {
			clearTimeout(tick);
		};
	}, [globalActions, globalState.cardShownId, globalState.lastCardId, globalState.stretchComplete, timeLeft]);

	return <span>{timeLeft} seconds</span>;
};

export default Timer;
