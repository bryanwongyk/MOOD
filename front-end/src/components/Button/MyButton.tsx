import theme from '../Theme/theme';
import styled from 'styled-components';

const MyButton = styled.button`
	background-color: ${props => (props.dark ? theme.color.main : 'rgba(201, 76, 76, 0.0)')};
	width: 180px;
	padding: 10px 9px;
	border-radius: 20px;
	color: ${props => (props.dark ? theme.color.text.contrast : theme.color.text)};
	font-size: 1.2em;
	font-weight: 500;
	border: 2px solid #6c5bb1;
	outline: none;
	margin-top: ${theme.margin.sectionWrapperMobile};
	@media (min-width: 768px) {
		margin-top: ${theme.margin.sectionWrapperDesktop};
		margin-left: 0px;
	}
`;

export default MyButton;
