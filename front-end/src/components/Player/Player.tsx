import { FunctionComponent, ReactElement } from 'react';
import theme from '../Theme/theme';
import bp from '../Theme/breakpoints';
import styled from 'styled-components';
// import Deck from './PlayerVideoCarousel/Deck';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import data from './routineRawData';

import Card from './PlayerVideoCarousel/Card';

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
	color: ${theme.color.h1};
`;

const HeaderSubTitle = styled.h2`
	margin: 0 0 20px 0;
	@media ${bp.xs} {
		margin: 0;
	}
`;

// const PlayerCurrentVideo = styled.div`
// 	height: 60vh;
// 	width: 100%;
// 	background: grey;
// `;

const Player: FunctionComponent = (): ReactElement => {
	// TODO: get the routine that the user has selected from context (based on selector).

	// for now, assume they have picked sample 'Breathe'
	console.log(data['Breathe']);

	// iterate through the stretches in the given routine
	const cards = data['Breathe']['stretches'].map((stretch, index) => {
		// Return a card
		return <Card name={stretch.name} id={index} imgSrc={stretch.imgSrc} imgAlt={stretch.imgDescription} />;
	});
	// const cards = [
	// 	<Card name="Stretch 1" id={1} imgSrc={stretchSample} />,
	// 	<Card name="Stretch 2" id={2} imgSrc={stretchSample} />,
	// 	<Card name="Stretch 3" id={3} imgSrc={stretchSample} />,
	// 	<Card name="Stretch 4" id={4} imgSrc={stretchSample} />,
	// ];

	const customRenderThumb = (): JSX.Element[] =>
		data['Breathe']['stretches'].map((stretch, index) => {
			return <img key={index} src={stretch.imgSrc} alt={stretch.imgDescription} />;
		});

	return (
		<>
			<Header>
				<HeaderTitle>Breathe</HeaderTitle>
				<HeaderSubTitle> 3s </HeaderSubTitle>
				<HeaderSubTitle>Stretch 1/14</HeaderSubTitle>
			</Header>
			{/* <PlayerCurrentVideo />
			<Deck /> */}
			<Carousel
				axis="horizontal"
				autoPlay={true}
				showThumbs={true}
				renderThumbs={customRenderThumb}
				showIndicators={false}
				showStatus={false}
				showArrows={false}
			>
				{cards}
			</Carousel>
		</>
	);
};

export default Player;
