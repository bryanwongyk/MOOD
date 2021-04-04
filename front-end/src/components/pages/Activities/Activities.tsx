import { FunctionComponent, ReactElement, useContext, useEffect } from 'react';
import bp from '../../Theme/breakpoints';
import { StretchPlayer } from '../../StretchPlayer';
import { MeditationPlayer } from '../../MeditationPlayer';
import styled from 'styled-components';
import { ContextType } from '../../../typings/storetype';
import { GlobalStateContext } from '../../../store/reducers';
import Spinner from '../../UI/Spinner';

const ActivitiesContainer = styled.div`
	margin: 0 auto;
	height: 100vh;
	@media ${bp.sm} {
		width: 80vw;
	}
`;

const MeditationActivitiesContainer = styled(ActivitiesContainer)`
	background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		url('https://images.unsplash.com/photo-1516181569701-7b841d20c0a3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
	background-repeat: no-repeat;
	margin: 0;
	background-size: cover;
	width: 100vw;
	height: 100vh;
	overflow-x: hidden;
	max-height: 1100px;
	@media ${bp.sm} {
		margin: 0 auto;
		width: 80vw;
	}
`;

const Activities: FunctionComponent = (): ReactElement => {
	// const [showPlayer, setShowPlayer] => {

	// }
	// TODO: this routine selection should be dynamic. Right now, the default global state is set to Breathe
	const { globalState, globalActions } = useContext(GlobalStateContext) as ContextType;

	// TEMPORARY HARD CODING OF ROUTINE
	useEffect(() => {
		// globalActions.setStretchRoutine('Laid Off');
		globalActions.setMeditationRoutine('Laid Off');
	}, []);

	let content: any = null;
	if (!!globalState.selectedStretchRoutine) {
		content = (
			<ActivitiesContainer>
				<StretchPlayer routine={globalState.selectedStretchRoutine} />
			</ActivitiesContainer>
		);
	} else if (!!globalState.selectedMeditationRoutine) {
		content = (
			<MeditationActivitiesContainer>
				<MeditationPlayer routine={globalState.selectedMeditationRoutine} />
			</MeditationActivitiesContainer>
		);
	} else {
		content = <Spinner />;
	}

	return content;
};

export default Activities;
