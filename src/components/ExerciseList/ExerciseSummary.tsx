import { FunctionComponent, ReactElement, useContext } from 'react';
import Card from '@material-ui/core/Card';
import ButtonBase from '@material-ui/core/ButtonBase';
import CardContent from '@material-ui/core/CardContent';
import breath from '../../assets/breatheadjusted2grey.png';
import stretchingLaidoff from '../../assets/laidoffadjusted.png';
import stretchingTension from '../../assets/stretchingtensionadjustedgrey.png';
import deadline from '../../assets/deadlinesadjusted.png';
import meditateLaidOff from '../../assets/meditationlaidoffadjustedgrey.png';
import meditateTension from '../../assets/meditatingtensionadjustedgrey.png';
import { ContextType } from '../../typings/storetype';
import { GlobalStateContext } from '../../store/reducers';
import theme from '../Theme/theme';

import styled from 'styled-components';

const StyledButton = styled(ButtonBase)`
	transition: background 5s;
	background-color: #f3d9a1 !important;
	width: 100%;

	&:hover {
		background: linear-gradient(#f0ce88, #f9e9b4);
	}
`;

const StyledCard = styled(Card)`
	background: ${theme.color.yellow};
`;

// const DisabledImage = styled.img`
// 	filter: grayscale(100%);
// `;

const StyledPara = styled.p`
	width: 80%;
	margin: 0 auto;
`;

interface ExerciseListProps {
	name: string;
	type: string;
	content: string;
}

const ExerciseSummary: FunctionComponent<ExerciseListProps> = ({ name, type, content }): ReactElement => {
	const { globalActions } = useContext(GlobalStateContext) as ContextType;
	let imgsrc;
	let disabled = false;
	if (type === 'Stretching') {
		if (name === 'Laid Off') {
			imgsrc = stretchingLaidoff;
		} else if (name === 'Breath') {
			imgsrc = breath;
			disabled = true;
		} else if (name === 'Tension') {
			imgsrc = stretchingTension;
			disabled = true;
		}
	} else if (type === 'Meditating') {
		if (name === 'Deadlines') {
			imgsrc = deadline;
		} else if (name === 'Laid Off') {
			imgsrc = meditateLaidOff;
			disabled = true;
		} else if (name === 'Tension') {
			imgsrc = meditateTension;
			disabled = true;
		}
	}
	return (
		<StyledCard>
			<StyledButton
				disabled={disabled}
				onClick={() => {
					globalActions.setExerciseFilter(type);
					switch (type) {
						case 'Meditating':
							globalActions.setMeditationRoutine(name);
							break;
						case 'Stretching':
							globalActions.setStretchRoutine(name);
							break;
						default:
							console.error(`Exercise type is invalid: ${type}`);
					}
				}}
			>
				<CardContent>
					{disabled ? <img src={imgsrc} /> : <img src={imgsrc}></img>}
					<h2>{name}</h2>
					<StyledPara>{content}</StyledPara>
				</CardContent>
			</StyledButton>
		</StyledCard>
	);
};

export default ExerciseSummary;
