import React, { FunctionComponent, ReactElement } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ExerciseList from '../../ExerciseList/ExerciseList';
// import theme from '../Theme/theme';

interface TabPanelProps {
	children?: React.ReactNode;
	index: any;
	value: any;
}

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

const SimpleTabs: FunctionComponent = (): ReactElement => {
	const [value, setValue] = React.useState(0);
	const handleChange = (_event: React.ChangeEvent<any>, newValue: number): void => {
		setValue(newValue);
	};
	return (
		<div>
			<AppBar position="static">
				<Tabs value={value} onChange={handleChange}>
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
		</div>
	);
};

const ExerciseMenu: FunctionComponent = (): ReactElement => {
	return <SimpleTabs />;
};

export default ExerciseMenu;
