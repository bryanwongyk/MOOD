import styled from 'styled-components';
import theme from '../../Theme/theme';

const MainWrapper = styled.div`
	padding-top: ${theme.height.navBarMobile};
	@media (min-width: 768px) {
		padding-top: ${theme.padding.mainWrapperDesktop};
	}
`;

export default MainWrapper;
