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

const Activities: FunctionComponent = (): ReactElement => {
	// const [showPlayer, setShowPlayer] => {

	// }
	// TODO: this routine selection should be dynamic. Right now, the default global state is set to Breathe
	const { globalState, globalActions } = useContext(GlobalStateContext) as ContextType;

	// TEMPORARY HARD CODING OF ROUTINE
	useEffect(() => {
		globalActions.setStretchRoutine('Laid Off');
		// globalActions.setMeditationRoutine('Laid Off');
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
			<ActivitiesContainer>
				<MeditationPlayer routine={globalState.selectedMeditationRoutine} />
			</ActivitiesContainer>
		);
	} else {
		content = <Spinner />;
	}

	return content;
};

export default Activities;
