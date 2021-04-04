import { FunctionComponent } from 'react';
import styled from 'styled-components';
import theme from '../../Theme/theme';
import { NavSideMenu } from '../NavSideMenu';
import { HashLink as Link } from 'react-router-hash-link';

const Logo = styled.div`
	width: 130px;
	height: 38px;
	padding: 18px 30px;
	color: ${theme.color.main};
	font-size: 2.2em;
	font-weight: 700;
	position: fixed;
	cursor: pointer;
	transition: color 0.5s;
	user-select: none;
	&:hover {
		color: ${theme.color.text.highlight};
	}
	@media (min-width: 768px) {
		padding: 18px 0px;
		font-size: 3em;
	}
`;

const StyledNavHeader = styled.div`
	width: 100vw;
	height: ${theme.height.navBarMobile};
	display: block;
	background: ${theme.color.background};
	position: fixed;
	ul {
		display: none;
	}
	@media (min-width: 768px) {
		padding: 10px 10vw 20px 10vw;
		height: ${theme.height.navBarDesktop};
		& #sideMenu {
			display: none;
		}
		ul {
			display: flex;
			flex-direction: row;
			justify-content: flex-end;
			width: 60%;
			margin: auto;
			padding-top: 15px;
		}
		li {
			display: inline-block;
			padding: 1em 2vw;
		}
		a {
			text-decoration: none;
			font-weight: 500;
			font-size: 1.1em;
			line-height: 1.6em;
			color: ${theme.color.navBar};
			transition: color 0.5s;
			&:hover {
				color: ${theme.color.text.highlight};
			}
		}
	}
`;

const NavHeader: FunctionComponent = () => {
	// always scroll to top when they click on link that is meant to
	const scrollToTop = (): void => {
		window.scrollTo(0, 0);
	};

	return (
		<StyledNavHeader>
			<Link to="/" onClick={scrollToTop}>
				<Logo>mood.</Logo>
			</Link>
			<div id="sideMenu">
				<NavSideMenu />
			</div>
			<ul>
				<li>
					<Link to="/#intro">About</Link>
				</li>
				<li>
					<Link to="/#why">Why use mood.?</Link>
				</li>
				<li>
					<Link to="/activities" onClick={scrollToTop}>
						Exercises
					</Link>
				</li>
				<li>
					<Link to="/#team">The team</Link>
				</li>
			</ul>
		</StyledNavHeader>
	);
};

export default NavHeader;
