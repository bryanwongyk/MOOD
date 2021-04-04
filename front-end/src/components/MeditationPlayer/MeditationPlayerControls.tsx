import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { FunctionComponent, ReactElement } from 'react';

interface AudioControlsProps {
	isPlaying: boolean;
	onPlayPauseClick: (playPauseClick: boolean) => void;
}
const AudioControls: FunctionComponent<AudioControlsProps> = ({ isPlaying, onPlayPauseClick }): ReactElement => {
	return (
		<div className="audio-controls">
			{isPlaying ? (
				<button type="button" className="pause" onClick={() => onPlayPauseClick(false)} aria-label="Pause">
					<FontAwesomeIcon icon={faPause} />
				</button>
			) : (
				<button type="button" className="play" onClick={() => onPlayPauseClick(true)} aria-label="Play">
					<FontAwesomeIcon icon={faPlay} />
				</button>
			)}
		</div>
	);
};

export default AudioControls;
