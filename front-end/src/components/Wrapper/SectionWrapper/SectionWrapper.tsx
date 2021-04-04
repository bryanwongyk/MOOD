import styled from 'styled-components';
import theme from '../../Theme/theme';

const SectionWrapper = styled.div`
	padding: ${theme.padding.sectionWrapperMobile};
	display: flex;
	flex-direction: column;
	align-items: center;
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	@media (min-width: 768px) {
		flex-direction: row;
		padding: ${theme.padding.sectionWrapperDesktop};
		padding-left: 5vw;
		padding-right: 5vw;
		img {
			width: 60%;
			max-height: 90%;
		}
		div {
			display: flex;
			flex-direction: column;
			align-content: flex-start;
			padding: 0px 2vw;
		}
		&#why {
			flex-direction: row-reverse;
		}
		&#meditating {
			flex-direction: row-reverse;
		}
	}
`;

export default SectionWrapper;
