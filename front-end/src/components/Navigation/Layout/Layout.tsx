import React, { FunctionComponent, ReactElement, useContext } from 'react';
import { ContextType } from '../../../typings/storetype';
import { GlobalStateContext } from '../../../store/reducers';
import { NavHeader } from '../NavHeader';
import { NavSideMenu } from '../NavSideMenu';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }): ReactElement => {
	const { globalActions } = useContext(GlobalStateContext) as ContextType;
	return (
		<>
			<NavHeader />
			<NavSideMenu />
			<main>{children}</main>
			<button onClick={() => globalActions.testAction()}>test button</button>
		</>
	);
};

export default Layout;
