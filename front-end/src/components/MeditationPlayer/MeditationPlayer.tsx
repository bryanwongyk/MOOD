import { ReactElement, FunctionComponent, useState, useEffect, useRef } from 'react';
import data from './audioRawData';
import Controls from './MeditationPlayerControls';

interface MeditationPlayerProps {
	routine: string;
}

// Audio player reference: https://letsbuildui.dev/articles/building-an-audio-player-with-react-hooks
// Using Web Audio API
const MeditationPlayer: FunctionComponent<MeditationPlayerProps> = ({ routine }): ReactElement => {
	// const [trackProgress, setTrackProgress] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);
	const [trackProgress, setTrackProgress] = useState(0);

	const { title } = data[routine];

	const audioRef = useRef(
		// https://stackoverflow.com/questions/47956881/javascript-html5-audio-player-cors-not-play-dynamic-source
		new Audio('https://docs.google.com/uc?export=download&id=1Wsra6TRfBCvsp0Qavw0Px1GdlowkVMt_'),
	);

	const intervalRef: any = useRef();

	const { duration } = audioRef.current;

	const currentPercentage = duration ? `${(trackProgress / duration) * 100}%` : '0%';
	const trackStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
  `;

	// Playback progress and scrubbing
	const startTimer = (): void => {
		// Clear any timers already running
		clearInterval(intervalRef.current);

		intervalRef.current = setInterval(() => {
			if (audioRef.current.ended) {
				return;
			} else {
				setTrackProgress(audioRef.current.currentTime);
			}
		}, 1000);
	};

	useEffect(() => {
		if (isPlaying) {
			audioRef.current.play();
			startTimer();
		} else {
			audioRef.current.pause();
		}
	}, [isPlaying]);

	useEffect(() => {
		// Pause and clean up on unmount
		return () => {
			audioRef.current.pause();
			clearInterval(intervalRef.current);
		};
	}, []);

	// scrub through progress
	const onScrub = (value): void => {
		// Clear any timers already running
		clearInterval(intervalRef.current);
		audioRef.current.currentTime = value;
		setTrackProgress(audioRef.current.currentTime);
	};

	const onScrubEnd = (): void => {
		// If not already playing, start
		if (!isPlaying) {
			setIsPlaying(true);
		}
		startTimer();
	};

	// TIME STAMP
	const minutes = Math.floor(audioRef.current.currentTime / 60);
	const seconds = Math.floor(audioRef.current.currentTime % 60);

	return (
		<div className="audio-player">
			<div className="track-info">
				{/* <h2 className="title">{title}</h2> */}
				{title}
				<Controls isPlaying={isPlaying} onPlayPauseClick={setIsPlaying} />
				<input
					type="range"
					value={trackProgress}
					step="1"
					min="0"
					max={duration ? duration : `${duration}`}
					className="progress"
					onChange={e => onScrub(e.target.value)}
					onMouseUp={onScrubEnd}
					onKeyUp={onScrubEnd}
					style={{ background: trackStyling }}
				/>
				<span>
					{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
				</span>
			</div>
		</div>
	);
	// return <div>{routine}</div>;
};

export default MeditationPlayer;
