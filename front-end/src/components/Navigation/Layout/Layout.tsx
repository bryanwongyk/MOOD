import React, { FunctionComponent, ReactElement } from 'react';
import { NavHeader } from '../NavHeader';
import { NavSideMenu } from '../NavSideMenu';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }): ReactElement => {
	return (
		<>
			<NavHeader />
			<NavSideMenu />
			<main>{children}</main>
		</>
	);
};

export default Layout;
