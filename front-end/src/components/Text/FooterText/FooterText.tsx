import theme from '../../Theme/theme';
import styled from 'styled-components';
import { FunctionComponent, ReactElement, ReactNode } from 'react';

const FooterTextDiv = styled.div`
	color: ${theme.color.main};
	font-size: 1.1em;
	font-weight: 500;
	margin: 0 auto;
	text-align: center;

	a {
		color: ${theme.color.main};
		line-height: 10px;
		text-decoration: none;
		transition: color 0.5s;
		&:hover {
			color: ${theme.color.text.highlight};
		}
	}
`;

interface FooterText {
	children: ReactNode;
}

const FooterText: FunctionComponent = ({ children }): ReactElement => {
	return <FooterTextDiv>{children}</FooterTextDiv>;
};

export default FooterText;
