import { FunctionComponent } from "react";
import { slide as Menu } from "react-burger-menu";
import { NavItem } from "../NavItem";

// Styles provided by react-burger-menu documentation
const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    left: "36px",
    top: "36px",
  },
  bmBurgerBars: {
    background: "#373a47",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
    overflowY: "hidden",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};

const NavSideMenu: FunctionComponent = () => {
  return (
    <>
      <Menu styles={styles}>
        <NavItem link="/" label="Get Started" />
        <NavItem link="/about" label="About" />
        <NavItem link="/why" label="Why use MOOD?" />
      </Menu>
    </>
  );
};

export default NavSideMenu;
