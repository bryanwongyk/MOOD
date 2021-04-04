import React, { FunctionComponent, ReactElement } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ExerciseList from '../../ExerciseList/ExerciseList';
import styled from 'styled-components';
import theme from '../../Theme/theme';
import { withStyles } from '@material-ui/core/styles';

interface TabPanelProps {
	children?: React.ReactNode;
	index: any;
	value: any;
}

const GlobalCss = withStyles({
	// @global is handled by jss-plugin-global.
	'@global': {
		// You should target [class*="MuiButton-root"] instead if you nest themes.
		'.MuiAppBar-colorPrimary': {
			backgroundColor: theme.color.exerciseMenu.background,
			color: theme.color.text.exerciseMenu,
			fontWeight: 700,
			fontSize: '1.5rem',
		},
		'.MuiPaper-root': {
			width: '80vw',
		},
		'.MuiTabs-centered': {
			justifyContent: 'space-evenly',
		},
	},
})(() => null);

const TabPanel: FunctionComponent<TabPanelProps> = ({ children, value, index, ...other }) => {
	return (
		<div role="tabpanel" hidden={value !== index} {...other}>
			{value === index && (
				<div>
					<p>{children}</p>
				</div>
			)}
		</div>
	);
};

const StyledDiv = styled.div`
	Appbar Tabs &.MuiAppBar-colorPrimary {
		background-color: ${theme.color.exerciseMenu.background};
	}
`;

const SimpleTabs: FunctionComponent = (): ReactElement => {
	const [value, setValue] = React.useState(0);
	const handleChange = (_event: React.ChangeEvent<any>, newValue: number): void => {
		setValue(newValue);
	};
	return (
		<StyledDiv>
			<AppBar position="static">
				<GlobalCss />
				<Tabs value={value} onChange={handleChange} centered={true}>
					<Tab label="Stretching" />
					<Tab label="Meditating" />
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0}>
				<ExerciseList>Stretching</ExerciseList>
			</TabPanel>
			<TabPanel value={value} index={1}>
				<ExerciseList>Meditating</ExerciseList>
			</TabPanel>
		</StyledDiv>
	);
};

const ExerciseMenu: FunctionComponent = (): ReactElement => {
	return <SimpleTabs />;
};

export default ExerciseMenu;
