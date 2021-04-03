import { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';

// const ListItem = styled.li`
// 	list-style: none;
// `;

// const BasicNavLink = styled(NavLink)`
// 	margin: 10px 0;
// 	box-sizing: border-box;
// 	display: block;
// 	width: 100%;

// 	color: white;
// 	text-decoration: none;
// 	width: 100%;

// 	&:hover {
// 		color: red;
// 	}
// `;

interface NavItemProps {
	link: string;
	label: string;
}

const NavItem: FunctionComponent<NavItemProps> = ({ link, label }) => (
	<li>
		<NavLink to={link} exact>
			{label}
		</NavLink>
	</li>
);

export default NavItem;
