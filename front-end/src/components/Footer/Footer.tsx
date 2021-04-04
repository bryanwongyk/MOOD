import { FunctionComponent, ReactElement } from 'react';
import { Styledh1 } from 'components/Text/Styledh1';
import { SectionWrapper } from 'components/Wrapper/SectionWrapper';
import { FooterText } from 'components/Text/FooterText';

const Footer: FunctionComponent = (): ReactElement => {
	return (
		<SectionWrapper id="team">
			<Styledh1 id="footerHeading">mood.</Styledh1>
			<FooterText>
				<p>Team Bryan “The Rock” Wongson</p>
				<p>Alan Truong</p>
				<p>Brian Yet Khai Wong</p>
				<p>Si (Julia) Cheng</p>
				<p>Sandy Young</p>
			</FooterText>
		</SectionWrapper>
	);
};

export default Footer;
