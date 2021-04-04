import React, { FunctionComponent, ReactElement, useContext } from 'react';
import { ContextType } from '../../../typings/storetype';
import { GlobalStateContext } from '../../../store/reducers';
import { NavHeader } from '../NavHeader';
import theme from '../../Theme/theme';
import styled from 'styled-components';
import { MainWrapper } from 'components/Wrapper/MainWrapper';
import { Footer } from 'components/Footer';

const StyledLayout = styled.div`
	background: ${theme.color.background};
	width: 100%;
`;

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }): ReactElement => {
	const { globalActions } = useContext(GlobalStateContext) as ContextType;
	return (
		<>
			<StyledLayout>
				<NavHeader />
				<MainWrapper>{children}</MainWrapper>
				<button onClick={() => globalActions.testAction()}>test button</button>
				<Footer></Footer>
			</StyledLayout>
		</>
	);
};

export default Layout;
