import { FunctionComponent, ReactElement, useContext } from 'react';
import Card from '@material-ui/core/Card';
import ButtonBase from '@material-ui/core/ButtonBase';
import CardContent from '@material-ui/core/CardContent';
import { ContextType } from '../../typings/storetype';
import { GlobalStateContext } from '../../store/reducers';

// import styled from 'styled-components';

interface ExerciseListProps {
	name: string;
	type: string;
	content: string;
}

const ExerciseSummary: FunctionComponent<ExerciseListProps> = ({ name, type, content }): ReactElement => {
	const { globalState, globalActions } = useContext(GlobalStateContext) as ContextType;
	console.log(globalState.selectedExerciseFilter);
	return (
		<Card>
			<ButtonBase
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
					<img></img>
					<h2>{name}</h2>
					<p>{content}</p>
				</CardContent>
			</ButtonBase>
		</Card>
	);
};

export default ExerciseSummary;
