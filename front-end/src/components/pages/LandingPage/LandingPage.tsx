import MyButton from 'components/Button/MyButton';
import { SectionWrapper } from '../../Wrapper/SectionWrapper';
import { Styledh1 } from 'components/Text/Styledh1';
import { FunctionComponent, ReactElement } from 'react';
import about_sm from '../../../assets/ABOUT_sm.png';
import meditate_sm from '../../../assets/MEDITATINGadjusted_sm.png';
import stretch_sm from '../../../assets/STRETCHINGadjusted_sm.png';
import why_sm from '../../../assets/WHYUSEMOODadjusted_sm.png';
import styled from 'styled-components';

const LandingPage: FunctionComponent = (): ReactElement => {
	const Styledform = styled.form`
		width: 100%;
		text-align: center;
		@media (min-width: 768px) {
			text-align: left;
		}
	`;

	return (
		<>
			<SectionWrapper id="intro">
				<img src={about_sm} alt="intro pic" width="100%"></img>
				<div>
					<Styledh1>We make mindfulness fun</Styledh1>
					<p>
						Mindfulness is the idea of being fully present and engaged in the moment, and aware of your
						thoughts and feelings without distraction or judgment. This moment-to-moment awareness can be
						trained through skills learned in meditation, which mood offers in a fun and light-hearted
						manner.
					</p>
					<Styledform method="get" action="/activities" style={{ width: '100%' }}>
						<MyButton dark type="submit">
							Get Started
						</MyButton>
					</Styledform>
				</div>
			</SectionWrapper>

			<SectionWrapper id="why">
				<img src={why_sm} alt="intro pic" width="100%"></img>
				<div>
					<Styledh1>Why use mood.?</Styledh1>
					<p>
						Mood is an all-in-one wellness hub that is tailored specifically to tackling the issues or
						frustrations many face when working or studying from home. Whether it’s an hour-long meeting
						that could’ve just been an email, your boss who refuses to give you a pay rise, or Alan from
						payroll who keeps miscalculating your pay - mood offers a variety of stretching, meditation and
						wellness guides to help reduce stress, anxiety and increase mindfulness, to help you achieve zen
						when you get back to work.
					</p>
				</div>
			</SectionWrapper>

			<SectionWrapper id="stretching">
				<img src={stretch_sm} alt="intro pic" width="100%"></img>
				<div>
					<Styledh1>Stretching</Styledh1>
					<p>
						Sitting at a desk for work can mean your body becomes stiff from lack of moment. Stiff = bad.
						Over a prolonged period, this can weaken your muscles. But don’t worry, we have a variety of
						exercises to help you with that. Stretching keeps your muscles flexible, healthy and strong, and
						lessens the risks of joint pain, strain and muscle damage.
					</p>
					<p>Stretching guides include: “My neck’s stiff”, “My boss hates me”, “I slept funny”</p>
					<Styledform method="get" action="/activities" style={{ width: '100%' }}>
						<MyButton dark type="submit">
							Start Stretching
						</MyButton>
					</Styledform>
				</div>
			</SectionWrapper>

			<SectionWrapper id="meditating">
				<img src={meditate_sm} alt="intro pic" width="100%"></img>
				<div>
					<Styledh1>Meditating</Styledh1>
					<p>
						Meditation has been proven to help relieve stress, control anxiety and increase your focus and
						attention to what matters - and to help you unfocus on that unnecessary meeting, your stingy
						boss and Alan from payroll. Especially important in work or study, a flow state is a complete
						immersion in a task where distractive thoughts cease – meditation helps you achieve that.
					</p>
					<Styledform method="get" action="/activities" style={{ width: '100%' }}>
						<MyButton dark type="submit">
							Open Your Mind
						</MyButton>
					</Styledform>
				</div>
			</SectionWrapper>
		</>
	);
};

export default LandingPage;
