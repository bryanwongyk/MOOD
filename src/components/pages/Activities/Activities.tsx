import { FunctionComponent, ReactElement, useContext } from 'react';
import bp from '../../Theme/breakpoints';
import { StretchPlayer } from '../../StretchPlayer';
import { MeditationPlayer } from '../../MeditationPlayer';
import styled from 'styled-components';
import { ContextType } from '../../../typings/storetype';
import { GlobalStateContext } from '../../../store/reducers';
import Spinner from '../../UI/Spinner';
import CompletionCard from '../../StretchPlayer/PlayerVideoCarousel/CompletionCard';
import OpeningCard from '../../StretchPlayer/PlayerVideoCarousel/OpeningCard';
import ExerciseModal from '../../UI/ExerciseModal/ExerciseModal';
import ExerciseMenu from '../../Navigation/ExerciseMenu/ExerciseMenu';

const ActivitiesContainer = styled.div`
	margin: 0 auto;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const ActivitiesContainerNoHeight = styled.div`
	margin: 0 auto;
	width: 100%;
`;

const MeditationActivitiesContainer = styled(ActivitiesContainer)`
	background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		url('https://images.unsplash.com/photo-1516181569701-7b841d20c0a3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
	background-repeat: no-repeat;
	margin: 0;
	background-size: cover;
	width: 100%;
	overflow-x: hidden;
	max-height: 1100px;
	@media ${bp.sm} {
		margin: 0 auto;
	}
`;

const Activities: FunctionComponent = (): ReactElement => {
	// const [showPlayer, setShowPlayer] => {

	// }
	// TODO: this routine selection should be dynamic. Right now, the default global state is set to Laid Off
	const { globalState } = useContext(GlobalStateContext) as ContextType;

	// TEMPORARY HARD CODING OF ROUTINE
	// useEffect(() => {
	// 	globalActions.setMeditationRoutine('Deadlines');
	// }, [globalState.selectedMeditationRoutine, globalState.selectedStretchRoutine]);

	let content: any = null;
	if (!!globalState.selectedStretchRoutine) {
		if (!!globalState.stretchComplete) {
			content = (
				<ActivitiesContainerNoHeight>
					<ExerciseModal />
					<CompletionCard timeTaken={10} />
				</ActivitiesContainerNoHeight>
			);
		} else {
			content = (
				<ActivitiesContainer>
					<ExerciseModal />
					<StretchPlayer routine={globalState.selectedStretchRoutine} />
				</ActivitiesContainer>
			);
			if (globalState.showStretchOpening) {
				content = (
					<ActivitiesContainer>
						<ExerciseModal />
						<OpeningCard />
					</ActivitiesContainer>
				);
			} else {
				content = (
					<ActivitiesContainer>
						<ExerciseModal />
						<StretchPlayer routine={globalState.selectedStretchRoutine} />
					</ActivitiesContainer>
				);
			}
		}
	} else if (!!globalState.selectedMeditationRoutine) {
		content = (
			<MeditationActivitiesContainer>
				<ExerciseModal />
				<MeditationPlayer routine={globalState.selectedMeditationRoutine} />
			</MeditationActivitiesContainer>
		);
	} else if (globalState.setSpinner) {
		content = <Spinner />;
	} else {
		content = <ExerciseMenu />;
	}

	return content;
};

export default Activities;
