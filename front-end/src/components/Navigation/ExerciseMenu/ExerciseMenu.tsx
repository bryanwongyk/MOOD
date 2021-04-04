import { FunctionComponent, ReactElement } from 'react';
import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import AppsIcon from '@material-ui/icons/Apps';
import theme from '../../Theme/theme';
import styled from 'styled-components';

const ExerciseMenu: FunctionComponent = (): ReactElement => {
	const [open, setOpen] = React.useState(false);
	const handleClickOpen = (): void => {
		setOpen(true);
	};

	const handleClose = (): void => {
		setOpen(false);
	};

	const StyledIconButton = styled.div`
		position: fixed;
	`;

	return (
		<>
			<StyledIconButton>
				<IconButton color="inherit" onClick={handleClickOpen}>
					<AppsIcon style={{ color: theme.color.main }} />
				</IconButton>
			</StyledIconButton>
			<Dialog onClose={handleClose} open={open}>
				<div>test</div>
			</Dialog>
		</>
	);
};

export default ExerciseMenu;
