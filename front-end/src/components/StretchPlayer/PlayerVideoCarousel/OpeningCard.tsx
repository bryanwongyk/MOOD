import React, { FunctionComponent, ReactElement } from 'react';
// import Timer from '../Timer';
// import { ContextType } from '../../../typings/storetype';
// import { GlobalStateContext } from '../../../store/reducers';
// import styled from 'styled-components';

const OpeningCard: FunctionComponent = (): ReactElement => {
	return <div>hi</div>;
};

// Prevents unnecessary renders. If the parent re-renders, the child (this Card) will not re-render unless it has changed
export default React.memo(OpeningCard);
