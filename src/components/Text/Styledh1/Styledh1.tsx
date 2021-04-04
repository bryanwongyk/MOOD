import theme from '../../Theme/theme';
import styled from 'styled-components';

const Styledh1 = styled.h1`
	color: ${theme.color.main};
	font-size: 1.8em;
	font-weight: 700;
	margin: auto;
	text-align: center;
	padding-top: 10px;
	@media (min-width: 768px) {
		text-align: left;
		margin-left: 0px;
		&#footerHeading {
			margin: auto;
		}
	}
`;

export default Styledh1;
