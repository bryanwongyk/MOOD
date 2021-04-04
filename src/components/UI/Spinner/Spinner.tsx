import { ReactElement } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';

const LoadingDiv = styled.div`
	display: flex;
	width: 100%;
	height: 50vh;
	justify-content: center;
	align-items: center;
`;

const Spinner = (): ReactElement => {
	return (
		<LoadingDiv>
			<CircularProgress />
		</LoadingDiv>
	);
};

export default Spinner;
