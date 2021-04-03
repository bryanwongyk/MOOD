import { FunctionComponent, ReactElement } from 'react';

const Player: FunctionComponent = (props): ReactElement => {
	const { classes } = props;
	return (
		<div className={classes.PlayerHeader}>
			<h1>Breathe</h1>
		</div>
	);
};

export default Player;
