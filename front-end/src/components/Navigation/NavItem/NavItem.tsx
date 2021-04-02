import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

const ListItem = styled.li`
  list-style: none;
`;

const BasicNavLink = styled(NavLink)`
  margin: 10px 0;
  box-sizing: border-box;
  display: block;
  width: 100%;

  color: white;
  text-decoration: none;
  width: 100%;

  &:hover {
    color: red;
  }
`;

interface NavItemProps {
  link: string;
  label: string;
}

const NavItem: FunctionComponent<NavItemProps> = ({ link, label }) => (
  <ListItem>
    <BasicNavLink to={link} exact>
      {label}
    </BasicNavLink>
  </ListItem>
);

export default NavItem;
