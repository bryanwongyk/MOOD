import { FunctionComponent, ReactElement } from 'react';
import ExerciseSummary from './ExerciseSummary';
// import styled from 'styled-components';

interface ExerciseListProps {
	children: string;
}

const ExerciseList: FunctionComponent<ExerciseListProps> = ({ children }): ReactElement => {
	console.log(children);
	const stretching = [
		{
			name: 'Laid off',
			content:
				'It’s not you - it’s the economy. Every cloud comes with a silver lining and this is your chance to finally take a break before jumping back into the workforce. This stretching guide will help you relieve stress and tension, and get you motivated to get back into work, or help make the most of your well-deserved time off.',
		},
		{
			name: 'Breath',
			content:
				'Breathing uses chemical and mechanical processes to bring oxygen to every cell of the body and get rid of carbon dioxide. While a seemingly simple action, active breathing techniques and focusing on your breath helps reduce anxiety and better regulate your body’s reaction to stress and fatigue. Don’t worry - you’ll get that pay rise in no time.',
		},
		{
			name: 'Tension',
			content:
				'Your boss has been asking you to work overtime every day for the past week. Your classmates haven’t been doing their part of the group assignment. As a result, you have neck pain, tightness in your back and stiffness in your legs. We think it’s time to take a break - so get up, stretch and loosen all that built-up tension.',
		},
	];

	const meditating = [
		{
			name: 'Deadlines',
			content:
				'Looming deadlines can be stress and anxiety inducing, but it’s important to make time for breaks so you don’t burn out. This short meditation guide will help you take a breather and get back to your tasks feeling refreshed and energised.',
		},
		{
			name: 'Laid off',
			content:
				'It’s not you - it’s the economy. Every cloud comes with a silver lining and this is your chance to finally take a break before jumping back into the workforce. This meditation guide will help you relieve stress and tension, and get you motivated to get back into work, or help make the most of your well-deserved time off.',
		},
		{
			name: 'Tension',
			content:
				'Tension doesn’t only include the physical sensations you get from lack of movement - it also builds up in your mind through the stresses of daily tasks. If you find yourself constantly thinking “No, Bryan, those emails did not find me well”, it might be time to meditate and let the tension escape your mind.',
		},
	];

	let exercises;
	if (children === 'Stretching') {
		exercises = stretching.map(session => {
			return <ExerciseSummary name={session.name} content={session.content} category={children} />;
		});
	} else if (children === 'Meditating') {
		exercises = meditating.map(session => {
			return <ExerciseSummary name={session.name} content={session.content} category={children} />;
		});
	}

	return <ul>{exercises}</ul>;
};

export default ExerciseList;
