import { FunctionComponent, ReactElement } from 'react';
import { useState, useEffect, useContext } from 'react';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';
import ListIcon from '@material-ui/icons/List';
import theme from '../../Theme/theme';
import styled from 'styled-components';
import ExerciseMenu from '../../Navigation/ExerciseMenu/ExerciseMenu';
import { ContextType } from '../../../typings/storetype';
import { GlobalStateContext } from '../../../store/reducers';
import { withStyles } from '@material-ui/core/styles';

const ExerciseModal: FunctionComponent = (): ReactElement => {
	const GlobalCss = withStyles({
		// @global is handled by jss-plugin-global.
		'@global': {
			'.MuiSvgIcon-root': {
				fontSize: '2.5rem',
			},
			'.MuiIconButton-root': {
				background: theme.color.main,
				padding: '6px',
				zIndex: '999',
			},
		},
	})(() => null);

	const { globalState } = useContext(GlobalStateContext) as ContextType;

	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (!globalState.selectedStretchRoutine && !globalState.selectedMeditationRoutine) {
			if (window.innerWidth < 728) {
				setOpen(true);
			}
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
		left: 3vw;
		bottom: 3vh;
	`;

	return (
		<>
			<StyledIconButton>
				<IconButton color="inherit" onClick={handleClickOpen}>
					<GlobalCss />
					<ListIcon style={{ color: theme.color.background }} />
				</IconButton>
			</StyledIconButton>
			<Dialog onClose={handleClose} open={open}>
				{/* <CloseButton onClick={handleClose}>
						<CloseIcon />
					</CloseButton> */}
				<ExerciseMenu />
			</Dialog>
		</>
	);
};

export default ExerciseModal;
