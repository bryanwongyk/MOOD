import { FunctionComponent, ReactElement, useContext, useEffect } from 'react';
import bp from '../../Theme/breakpoints';
import { StretchPlayer } from '../../StretchPlayer';
import styled from 'styled-components';
import { ContextType } from '../../../typings/storetype';
import { GlobalStateContext } from '../../../store/reducers';
import Spinner from '../../UI/Spinner';

const ActivitiesContainer = styled.div`
	margin: 0 auto;
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
		globalActions.setStretchRoutine('Breathe');
	}, []);

	return globalState.selectedStretchRoutine ? (
		<ActivitiesContainer>
			{!!globalState.selectedStretchRoutine ? (
				<StretchPlayer routine={globalState.selectedStretchRoutine} />
			) : null}
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin
				pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat.
				Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat
				volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis sit
				amet sodales felis. Duis nunc eros, mattis at dui ac, convallis semper risus. In adipiscing ultrices
				tellus, in suscipit massa vehicula eu.
			</p>
		</ActivitiesContainer>
	) : (
		<Spinner />
	);
};

export default Activities;
