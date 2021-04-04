import { FunctionComponent } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavItem } from '../NavItem';
import theme from '../../Theme/theme';
import { SideMenuDummy } from '../../Text/SideMenuDummy';
import { useState } from 'react';
import sidebar from '../../../assets/sidebar.png';

// Styles provided by react-burger-menu documentation
const styles = {
	bmBurgerButton: {
		position: 'fixed',
		width: '36px',
		height: '30px',
		right: '28px',
		top: '25px',
	},
	bmBurgerBars: {
		background: theme.color.main,
	},
	bmBurgerBarsHover: {
		background: '#a90000',
	},
	bmCrossButton: {
		height: '24px',
		width: '24px',
	},
	bmCross: {
		background: '#bdc3c7',
	},
	bmMenuWrap: {
		position: 'fixed',
		height: '100%',
	},
	bmMenu: {
		background: theme.color.sideMenuBar.background,
		padding: '2.5em 1.5em 0',
		fontSize: '1.15em',
		overflowY: 'hidden',
		boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
		backdropFilter: 'blur(10px)',
		borderRadius: '0px 5px 5px 0px',
	},
	bmMorphShape: {
		fill: '#373a47',
	},
	bmItemList: {
		color: '#b8b7ad',
		padding: '0.8em',
	},
	bmItem: {
		display: 'inline-block',
	},
	bmOverlay: {
		background: 'rgba(0, 0, 0, 0.1)',
	},
};

const NavSideMenu: FunctionComponent = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const handleClick = (): void => {
		setMenuOpen(false);
	};

	return (
		<>
			<Menu
				styles={styles}
				width="80vw"
				isOpen={menuOpen}
				onStateChange={state => {
					setMenuOpen(state.isOpen);
				}}
			>
				<SideMenuDummy href="/" style={{ pointerEvents: 'none', cursor: 'default', outline: 'none' }}>
					mood.
				</SideMenuDummy>
				<NavItem link="/#intro" label="About" toggle={handleClick} />
				<NavItem link="/#why" label="Why use mood.?" toggle={handleClick} />
				<NavItem link="/activities" label="Exercises" toggle={handleClick} />
				<NavItem link="/#team" label="The team" toggle={handleClick} />
				<SideMenuDummy href="/" style={{ pointerEvents: 'none', cursor: 'default', outline: 'none' }}>
					<div style={{ display: 'flex', justifyContent: 'center', padding: '50px 0px' }}>
						<img src={sidebar} alt="chill" width="100%"></img>
					</div>
				</SideMenuDummy>
			</Menu>
		</>
	);
};

export default NavSideMenu;
