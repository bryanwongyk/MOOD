import { FunctionComponent } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import theme from '../../Theme/theme';

const StyledLi = styled.li`
	list-style: none;
`;

const StyledNavLink = styled(Link)`
	margin: 10px 0;
	box-sizing: border-box;
	display: block;
	width: 100%;
	color: ${theme.color.background};
	text-decoration: none;
	font-style: normal;
	font-weight: 500;
	font-size: 1.4em;
	line-height: 2.5em;
`;

interface NavItemProps {
	link: string;
	label: string;
	toggle?: () => void;
}

const NavItem: FunctionComponent<NavItemProps> = ({ link, label, toggle }) => (
	<StyledLi>
		<StyledNavLink to={link} exact onClick={() => (toggle ? toggle() : null)}>
			{label}
		</StyledNavLink>
	</StyledLi>
);

export default NavItem;
