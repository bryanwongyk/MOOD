import { FunctionComponent, ReactElement } from 'react';
import { useState, useEffect } from 'react';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import AppsIcon from '@material-ui/icons/Apps';
import theme from '../../Theme/theme';
import styled from 'styled-components';
import ExerciseMenu from '../../Navigation/ExerciseMenu/ExerciseMenu';

const CloseButton = styled.button``;

const ExerciseModal: FunctionComponent = (): ReactElement => {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (window.innerWidth < 728) {
			setOpen(true);
		}
	}, []);

	const handleClickOpen = (): void => {
		setOpen(true);
	};

	const handleClose = (): void => {
		setOpen(false);
	};

	const StyledIconButton = styled.div`
		position: fixed;
		right: 10vw;
		top: 20vh;
	`;

	return (
		<>
			<StyledIconButton>
				<IconButton color="inherit" onClick={handleClickOpen}>
					<AppsIcon style={{ color: theme.color.main }} />
				</IconButton>
			</StyledIconButton>
			<Dialog onClose={handleClose} open={open}>
				<ExerciseMenu />
			</Dialog>
			<CloseButton onClick={handleClose}>
				<CloseIcon />
			</CloseButton>
		</>
	);
};

export default ExerciseModal;