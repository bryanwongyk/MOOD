import { FunctionComponent, ReactElement } from 'react';
import bp from '../../Theme/breakpoints';
import { Player } from '../../Player';
import styled from 'styled-components';

const ActivitiesContainer = styled.div`
	margin: 0 auto;
	@media ${bp.sm} {
		width: 80vw;
	}
`;

const Activities: FunctionComponent = (): ReactElement => {
	return (
		<ActivitiesContainer>
			<Player />
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin
				pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat.
				Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat
				volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis sit
				amet sodales felis. Duis nunc eros, mattis at dui ac, convallis semper risus. In adipiscing ultrices
				tellus, in suscipit massa vehicula eu.
			</p>
		</ActivitiesContainer>
	);
};

export default Activities;
