import { FunctionComponent, ReactElement } from 'react';
import { Styledh1 } from 'components/Text/Styledh1';
import { SectionWrapper } from 'components/Wrapper/SectionWrapper';
import { FooterText } from 'components/Text/FooterText';
import styled from 'styled-components';
import theme from '../Theme/theme';
import bp from '../Theme/breakpoints';
import { Link } from 'react-router-dom';

const Logo = styled(Styledh1)`
	cursor: pointer;
	transition: color 0.5s;
	user-select: none;
	font-size: 2rem;
	margin-bottom: 10px;
	margin-top: 5vh;
	text-align: center;
	&:hover {
		color: ${theme.color.text.highlight};
	}
	@media ${bp.sm} {
		font-size: 3rem;
		margin-top: 0;
	}
`;

const FooterWrapper = styled(SectionWrapper)`
	display: block;
	align-items: center;
`;

const Footer: FunctionComponent = (): ReactElement => {
	// always scroll to top when they click on link that is meant to
	const scrollToTop = (): void => {
		window.scrollTo(0, 0);
	};

	return (
		<FooterWrapper id="team">
			<Link to="/" onClick={scrollToTop} style={{ textDecoration: 'none' }}>
				<Logo id="footerHeading">mood.</Logo>
			</Link>
			<FooterText>
				<p>
					<b>Team Bryan “The Rock” Wongson</b>
				</p>
				<a href="https://www.linkedin.com/in/alan-truong5/">
					<p>Alan Truong</p>
				</a>
				<a href="https://www.linkedin.com/in/bryanwongyk/">
					<p>Bryan Wong</p>
				</a>
				<a href="https://www.linkedin.com/in/si-cheng-40440bb7/">
					<p>Si (Julia) Cheng</p>
				</a>
				<a href="https://www.linkedin.com/in/sandyy-young/">
					<p>Sandy Young</p>
				</a>
			</FooterText>
		</FooterWrapper>
	);
};

export default Footer;
