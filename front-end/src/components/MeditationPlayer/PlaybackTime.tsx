import { FunctionComponent, ReactElement } from 'react';
import styled from 'styled-components';
import theme from '../Theme/theme';

const PlaybackDiv = styled.div`
	display: flex;
	justify-content: space-between;
	width: 50%;
	color: ${theme.color.text.contrast};
	margin-top: 5px;
`;

interface PlaybackTimeProps {
	currentTime: string;
	timeLeft: string;
}

const PlaybackTime: FunctionComponent<PlaybackTimeProps> = ({ currentTime, timeLeft }): ReactElement => {
	return (
		<PlaybackDiv>
			<span>{currentTime}</span>
			<span>{timeLeft}</span>
		</PlaybackDiv>
	);
};

export default PlaybackTime;
