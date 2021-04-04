import { FunctionComponent, ReactElement, useState, useContext, useEffect } from 'react';
import theme from '../Theme/theme';
import bp from '../Theme/breakpoints';
import styled from 'styled-components';
// import Deck from './PlayerVideoCarousel/Deck';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import data from './routineRawData';
import { ContextType } from '../../typings/storetype';
import { GlobalStateContext } from '../../store/reducers';
import Card from './PlayerVideoCarousel/Card';
import CompletionCard from './PlayerVideoCarousel/CompletionCard';
import Spinner from '../UI/Spinner';

const Header = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	@media ${bp.xs} {
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}
`;

const HeaderTitle = styled.h1`
	color: ${theme.color.main};
`;

const HeaderSubTitle = styled.h2`
	margin: 0 0 20px 0;
	@media ${bp.xs} {
		margin: 0;
	}
`;

const HeaderSubTitleHidden = styled(HeaderSubTitle)`
	opacity: 0;
	pointer-events: none;
`;

const ExtendedCarousel = styled(Carousel)`
	max-height: 500px;

	.carousel .slide img {
		width: auto;
		max-height: 500px;
	}
`;

interface StretchPlayerProps {
	routine: string;
}

const StretchPlayer: FunctionComponent<StretchPlayerProps> = ({ routine }): ReactElement => {
	// TODO: get the routine that the user has selected from context (based on selector).
	const { globalActions, globalState } = useContext(GlobalStateContext) as ContextType;

	// for now, assume they have picked sample 'Breathe'
	// stretch ids always begin at 1
	const [currentStretch, setCurrentStretch] = useState(1);
	// const [completedRoutine, setCompletedRoutine] = useState(false);

	const [interval, setInterval] = useState(globalState.cardIntervals[currentStretch]);

	// iterate through the stretches in the given routine
	const currentRoutineData = data[routine];
	// avoid cards from being re-calculated unless they change.
	// this gets re-rendered everytime the stretch gets changed.. move this to global state
	useEffect(() => {
		setCurrentStretch(1);
		if (!!globalState.selectedStretchRoutine) {
			const cardIntervals = {};
			const cardIds: number[] = [];
			// console.log(currentRoutineData);
			const cards = currentRoutineData['stretches'].map(stretch => {
				// store the time for each stretch
				cardIntervals[stretch.id] = stretch.timeTakenMilliseconds;
				cardIds.push(stretch.id);
				// console.log(stretch.timeTakenMilliseconds);
				// Return a card
				return (
					<Card
						name={stretch.name}
						key={stretch.id}
						id={stretch.id}
						imgSrc={stretch.imgSrc}
						imgAlt={stretch.imgDescription}
						stretchInstructions={stretch.stretchInstructions}
						timeInterval={stretch.timeTakenMilliseconds}
					/>
				);
			});
			// set completion card to final
			cards.push(<CompletionCard key={cardIds.length} timeTaken={currentRoutineData['timeTakenMinutes']} />);
			globalActions.setCards(cards, cardIntervals, true);
			setInterval(cardIntervals[currentStretch]);
			globalActions.setCardShown(currentStretch);
			globalActions.setLastCardId(cardIds[cardIds.length - 1]);
		}
	}, [globalState.selectedStretchRoutine]);

	// https://stackoverflow.com/questions/62760233/how-to-add-a-video-to-react-responsive-carousel-npm-package
	const customRenderThumb = (): JSX.Element[] =>
		data['Laid Off']['stretches'].map(stretch => {
			return <img key={stretch.id} src={stretch.imgSrc} alt={stretch.imgDescription} />;
		});

	// Set different timer intervals for each stretch
	//https://stackoverflow.com/questions/61451388/is-there-a-way-to-put-a-different-time-interval-for-each-slide-in-react-responsi
	// the initial state should be the interval for the first stretch
	// console.log('interval: ', interval);
	const onChange = (_, item): void => {
		// if not complete
		if (!globalState.stretchComplete) {
			setCurrentStretch(item.props.id);
			// const newInterval = globalState.cardIntervals[currentStretch]
			// console.log(item.props);
			globalActions.setCardShown(item.props.id);
			setInterval(item.props.timeInterval);
		}
	};

	// let timer = !!interval ? <Timer initialTime={interval} /> : null;
	// only show content once the first card time is found
	const cards = globalState.cards;
	const content = !!interval ? (
		<>
			<Header>
				<HeaderTitle>{globalState.selectedStretchRoutine}</HeaderTitle>
				{!globalState.stretchComplete ? (
					<HeaderSubTitle>
						Stretch {globalState.cardShownId}/{globalState.cards.length - 1}
					</HeaderSubTitle>
				) : (
					<HeaderSubTitleHidden>
						Stretch {globalState.cardShownId}/{globalState.cards.length - 1}
					</HeaderSubTitleHidden>
				)}
			</Header>
			{/* <PlayerCurrentVideo />
			<Deck /> */}
			<ExtendedCarousel
				axis="horizontal"
				autoPlay={true}
				renderThumbs={customRenderThumb}
				// showThumbs={!globalState.stretchComplete}
				showThumbs={false}
				interval={interval}
				showIndicators={false}
				showStatus={false}
				showArrows={false}
				onChange={onChange}
			>
				{cards}
			</ExtendedCarousel>
		</>
	) : (
		<Spinner />
	);

	return content;
};

export default StretchPlayer;
