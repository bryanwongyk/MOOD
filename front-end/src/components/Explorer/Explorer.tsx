import { FunctionComponent, ReactElement } from 'react';
import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import AppsIcon from '@material-ui/icons/Apps';
import theme from '../Theme/theme';

const Modal: FunctionComponent = (): ReactElement => {
	const [open, setOpen] = React.useState(false);
	const handleClickOpen = (): void => {
		setOpen(true);
	};

	const handleClose = (): void => {
		setOpen(false);
	};

	return (
		<div>
			<IconButton color="inherit" onClick={handleClickOpen}>
				<AppsIcon style={{ color: theme.color.main }} />
			</IconButton>
			<Dialog onClose={handleClose} open={open}>
				<div>test</div>
			</Dialog>
		</div>
	);
};

export default Modal;
