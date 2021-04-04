import { FunctionComponent, ReactElement } from 'react';
import Card from '@material-ui/core/Card';
import ButtonBase from '@material-ui/core/ButtonBase';
import CardContent from '@material-ui/core/CardContent';
import breath from '../../assets/breatheadjusted.png';
import stretchingLaidoff from '../../assets/laidoffadjusted.png';
import stretchingTension from '../../assets/tensionadjusted.png';
import deadline from '../../assets/deadlinesadjusted.png';
import meditateLaidOff from '../../assets/laidoff2adjusted.png';
import meditateTension from '../../assets/tension2adjusted.png';

// import styled from 'styled-components';

interface ExerciseListProps {
	name: string;
	content: string;
	category: string;
}

const ExerciseSummary: FunctionComponent<ExerciseListProps> = ({ name, content, category }): ReactElement => {
	let imgsrc;
	if (category === 'Stretching') {
		if (name === 'Laid off') {
			imgsrc = stretchingLaidoff;
		} else if (name === 'Breath') {
			imgsrc = breath;
		} else if (name === 'Tension') {
			imgsrc = stretchingTension;
		}
	} else if (category === 'Meditating') {
		if (name === 'Deadlines') {
			imgsrc = deadline;
		} else if (name === 'Laid off') {
			imgsrc = meditateLaidOff;
		} else if (name === 'Tension') {
			imgsrc = meditateTension;
		}
	}
	return (
		<Card>
			<ButtonBase
				onClick={() => {
					console.log('test');
				}}
			>
				<CardContent>
					<img src={imgsrc}></img>
					<h2>{name}</h2>
					<p>{content}</p>
				</CardContent>
			</ButtonBase>
		</Card>
	);
};

export default ExerciseSummary;
