import React, { FunctionComponent, ReactElement } from 'react';
import { NavHeader } from '../NavHeader';
import theme from '../../Theme/theme';
import styled from 'styled-components';
import { MainWrapper } from 'components/Wrapper/MainWrapper';
import { Footer } from 'components/Footer';

const StyledLayout = styled.div`
	background: ${theme.color.background};
	width: 100%;
	min-height: 100vh;
`;

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }): ReactElement => {
	return (
		<>
			<StyledLayout>
				<NavHeader />
				<MainWrapper>{children}</MainWrapper>
				<Footer></Footer>
			</StyledLayout>
		</>
	);
};

export default Layout;
