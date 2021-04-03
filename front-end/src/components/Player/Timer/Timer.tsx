import { FunctionComponent, ReactElement, useState, useEffect } from 'react';

interface TimerProps {
	initialTime: number;
}

// https://stackoverflow.com/questions/57137094/implementing-a-countdown-timer-in-react-with-hooks
const Timer: FunctionComponent<TimerProps> = ({ initialTime }): ReactElement => {
	// initialize timeLeft with the seconds prop
	const [timeLeft, setTimeLeft] = useState(initialTime);
	console.log(timeLeft);
	useEffect(() => {
		// exit early when we reach 0
		if (!timeLeft) return;

		// save intervalId to clear the interval when the
		// component re-renders
		const tick = setTimeout(() => {
			setTimeLeft(timeLeft - 1);
		}, 1000);

		// add timeLeft as a dependency to re-rerun the effect
		// when we update it
		return () => {
			clearTimeout(tick);
		};
	}, [timeLeft]);

	return <span>{timeLeft} seconds</span>;
};

export default Timer;
