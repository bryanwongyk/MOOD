import { FunctionComponent, ReactElement } from 'react';

interface PlaybackTimeProps {
	currentTime: string;
	timeLeft: string;
}

const PlaybackTime: FunctionComponent<PlaybackTimeProps> = ({ currentTime, timeLeft }): ReactElement => {
	return (
		<div style={{ display: 'flex', justifyContent: 'space-between' }}>
			<span>{currentTime}</span>
			<span>{timeLeft}</span>
		</div>
	);
};

export default PlaybackTime;
