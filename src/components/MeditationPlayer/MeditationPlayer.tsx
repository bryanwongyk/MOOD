import { ReactElement, FunctionComponent, useState, useEffect, useRef } from 'react';
import data from './audioRawData';
import Controls from './MeditationPlayerControls';
import styled from 'styled-components';
import PlaybackTime from './PlaybackTime';
import theme from '../Theme/theme';

const PlaybackInput = styled.input`
	height: 10px;
	width: 50%;
	margin-bottom: 10px
	border-radius: 8px;
	background: #3b7677;
	transition: background 0.2s ease;
	cursor: pointer;
	z-index: 10;
	margin-top: 300px;
`;

const AudioPlayer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0;
	position: static;
`;

const MoonDiv = styled.div`
	position: absolute;
	width: 280px;
	height: 280px;
	border-radius: 50%;
	background: linear-gradient(180deg, #c4c4c4 0%, rgba(196, 196, 196, 0) 100%);
	margin-bottom: 250px;
`;

const MoonTextDiv = styled.div`
	color: ${theme.color.text.contrast};
	z-index: 10;
	text-align: center;

	h1 {
		font-size: 5rem;
		margin: 0;
		position: relative;
		top: 140px;
	}
	h2 {
		font-size: 1rem;
		line-height: 1.7;
		margin: 0;
		position: relative;
		top: 140px;
	}
`;

const RoutineHeading = styled.h1`
	z-index: 10;
	font-size: 2.5rem;
	color: ${theme.color.text.contrast};
	position: relative;
	top: 270px;
	margin: 0;
`;

interface MeditationPlayerProps {
	routine: string;
}

// Audio player reference: https://letsbuildui.dev/articles/building-an-audio-player-with-react-hooks
// Using Web Audio API
const MeditationPlayer: FunctionComponent<MeditationPlayerProps> = ({ routine }): ReactElement => {
	// const [trackProgress, setTrackProgress] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);
	const [trackProgress, setTrackProgress] = useState(0);

	const { audioSrc, audioDuration } = data[routine];

	const audioRef = useRef(
		// https://stackoverflow.com/questions/47956881/javascript-html5-audio-player-cors-not-play-dynamic-source
		new Audio(audioSrc),
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

	// const [currentTime, setCurrentTime] = useState('');
	// const [timeLeft, setTimeLeft] = useState('');
	// TIME STAMP

	// useRef prevents MeditationPlayer from re-rendering when time changes, only PlaybackTime should re-render since its props change
	// note this is not really doing much because trackProgress is making it rerender anyway
	const currentTimeRef = useRef('');
	const currentMinutes = Math.floor(audioRef.current.currentTime / 60);
	const currentSeconds = Math.floor(audioRef.current.currentTime % 60);
	currentTimeRef.current = `${currentMinutes.toString().padStart(2, '0')}:${currentSeconds
		.toString()
		.padStart(2, '0')}`;

	const timeLeft = useRef(audioDuration);
	if (!!audioRef.current.duration) {
		const timeLeftSec = Math.floor(audioRef.current.duration - audioRef.current.currentTime);
		const minutesLeft = Math.floor(timeLeftSec / 60);
		const secondsLeft = Math.floor(timeLeftSec % 60);

		timeLeft.current = `${minutesLeft.toString().padStart(2, '0')}:${secondsLeft.toString().padStart(2, '0')}`;
	}

	if (timeLeft.current === '00:00') {
		clearInterval(intervalRef.current);
		setIsPlaying(false);
		audioRef.current.currentTime = 0;
		setTrackProgress(0);
		audioRef.current.pause();
	}

	return (
		<AudioPlayer>
			<MoonDiv />
			<MoonTextDiv>
				<h1>relax</h1>
				<h2>
					Close your eyes and follow the <br /> meditation guide.
				</h2>
			</MoonTextDiv>
			<RoutineHeading>{routine}</RoutineHeading>
			<PlaybackInput
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
			<PlaybackTime currentTime={currentTimeRef.current} timeLeft={timeLeft.current} />
			<Controls isPlaying={isPlaying} onPlayPauseClick={setIsPlaying} />
		</AudioPlayer>
	);
	// return <div>{routine}</div>;
};

export default MeditationPlayer;
