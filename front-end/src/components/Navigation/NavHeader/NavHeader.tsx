import { FunctionComponent, useContext } from 'react';
import styled from 'styled-components';
import theme from '../../Theme/theme';
import { NavSideMenu } from '../NavSideMenu';
import { HashLink as Link } from 'react-router-hash-link';
import bp from '../../Theme/breakpoints';
import { GlobalStateContext } from 'store/reducers';
import { ContextType } from '../../../typings/storetype';

const Logo = styled.div`
	width: 130px;
	height: 38px;
	padding: 18px 50px;
	color: ${theme.color.main};
	font-size: 2.2em;
	font-weight: 700;
	position: fixed;
	cursor: pointer;
	transition: color 0.5s;
	user-select: none;
	display: flex;
	justify-content: center;
	align-items: center;
	&:hover {
		color: ${theme.color.text.highlight};
	}
	@media ${bp.md} {
		padding: 18px 0px;
		font-size: 3em;
	}
`;

const StyledNavHeader = styled.div`
	width: 100vw;
	height: ${theme.height.navBarMobile};
	display: flex;
	background: ${theme.color.background};
	position: fixed;
	a {
		font-size: 0.73em;
	}
	z-index: 100;
	ul {
		display: none;
	}
	@media ${bp.sm} {
		padding: 20px 10vw 10px 10vw;
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
		}
		li {
			display: inline-block;
			padding: 1em 2vw;
		}
		a {
			text-decoration: none;
			font-weight: 500;
			line-height: 1.6em;
			color: ${theme.color.navBar};
			transition: color 0.5s;
			&:hover {
				color: ${theme.color.text.highlight};
			}
		}
	}
	@media (min-width: 900px) {
		a {
			font-size: 0.96em !important;
		}
	}
	@media ${bp.md} {
		a {
			font-size: 1.1em !important;
		}
	}
`;

const GetStartedLink = styled(Link)`
	width: 180px;
	padding: 10px 9px;
	border-radius: 20px;
	font-size: 1.2em;
	font-weight: 500;
	border: 2px solid;
	/* border-color: #6c5bb1; */
	outline: none;
	margin-top: ${theme.margin.sectionWrapperMobile};
	cursor: pointer;
	transition: border-color 5s ease-out;
	/* a {
		color: ${theme.color.text.contrast} !important;
	} */
`;

const NavHeader: FunctionComponent = () => {
	const { globalActions } = useContext(GlobalStateContext) as ContextType;
	// always scroll to top when they click on link that is meant to
	const scrollToTop = (): void => {
		window.scrollTo(0, 0);
	};

	const clickHandler = (): void => {
		scrollToTop();
		// e.g. if we click on the logos to go to home page while doing an exercise, we want to
		// clear whatever exercise routine was set
		globalActions.resetAll();
	};

	return (
		<StyledNavHeader>
			<Link to="/" onClick={clickHandler}>
				<Logo>mood.</Logo>
			</Link>
			<div id="sideMenu">
				<NavSideMenu />
			</div>
			<ul>
				<li>
					<Link to="/#intro" onClick={clickHandler}>
						About
					</Link>
				</li>
				<li>
					<Link to="/#why" onClick={clickHandler}>
						Why use mood.?
					</Link>
				</li>
				<li>
					<Link to="/#what-we-offer" onClick={clickHandler}>
						What we offer
					</Link>
				</li>
				<li>
					<GetStartedLink to="/activities" onClick={scrollToTop}>
						Get Started
					</GetStartedLink>
				</li>
			</ul>
		</StyledNavHeader>
	);
};

export default NavHeader;
