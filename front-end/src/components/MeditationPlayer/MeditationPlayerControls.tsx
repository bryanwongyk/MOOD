import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { FunctionComponent, ReactElement } from 'react';
import styled from 'styled-components';
import theme from '../Theme/theme';

const AudioButton = styled.button`
	border: 0;
	background: transparent;
	color: ${theme.color.text.contrast};
	transition: opacity 0.1s;
	transform: scale(3.5);
	filter: drop-shadow(1.5px 3px 1.5px ${theme.color.text.main});
	cursor: pointer;
	outline: none;
	z-index: 10;

	&:hover {
		opacity: 0.8;
	}
`;

const AudioControlsDiv = styled.div`
	margin-top: 60px;
	margin-bottom: 60px;
`;

interface AudioControlsProps {
	isPlaying: boolean;
	onPlayPauseClick: (playPauseClick: boolean) => void;
}
const AudioControls: FunctionComponent<AudioControlsProps> = ({ isPlaying, onPlayPauseClick }): ReactElement => {
	return (
		<AudioControlsDiv>
			{isPlaying ? (
				<AudioButton type="button" className="pause" onClick={() => onPlayPauseClick(false)} aria-label="Pause">
					<FontAwesomeIcon icon={faPause} />
				</AudioButton>
			) : (
				<AudioButton type="button" className="play" onClick={() => onPlayPauseClick(true)} aria-label="Play">
					<FontAwesomeIcon icon={faPlay} />
				</AudioButton>
			)}
		</AudioControlsDiv>
	);
};

export default AudioControls;
