import React, { FunctionComponent, ReactElement } from 'react';

const CompletionCard: FunctionComponent = (): ReactElement => {
	return (
		<div>
			<h4>Well done!</h4>
		</div>
	);
};

// Prevents unnecessary renders. If the parent re-renders, the child (this Card) will not re-render unless it has changed
export default React.memo(CompletionCard);
