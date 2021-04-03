import { FunctionComponent, ReactElement } from 'react';
import theme from '../Theme/theme';
import bp from '../Theme/breakpoints';
import styled from 'styled-components';
import Deck from './PlayerVideoCarousel/Deck';

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

const PlayerCurrentVideo = styled.div`
	height: 60vh;
	width: 100%;
	background: grey;
`;

const Player: FunctionComponent = (): ReactElement => {
	return (
		<>
			<Header>
				<HeaderTitle>Breathe</HeaderTitle>
				<HeaderSubTitle> 3s </HeaderSubTitle>
				<HeaderSubTitle>Stretch 1/14</HeaderSubTitle>
			</Header>
			<PlayerCurrentVideo />
			<Deck />
		</>
	);
};

export default Player;
