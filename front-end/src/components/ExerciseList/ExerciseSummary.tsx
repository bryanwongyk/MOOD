import { FunctionComponent, ReactElement } from 'react';
import Card from '@material-ui/core/Card';
import ButtonBase from '@material-ui/core/ButtonBase';
import CardContent from '@material-ui/core/CardContent';

// import styled from 'styled-components';

interface ExerciseListProps {
	name: string;
	content: string;
}

const ExerciseSummary: FunctionComponent<ExerciseListProps> = ({ name, content }): ReactElement => {
	return (
		<Card>
			<ButtonBase
				onClick={() => {
					console.log('test');
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
