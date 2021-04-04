import stretchSample from '../../assets/stretchSample.jpeg';

const routineRawData = {
	'Laid Off': {
		description:
			'It’s not you - it’s the economy. Every cloud comes with a silver lining and this is your chance to finally take a break before jumping back into the workforce. This stretching guide will help you relieve stress and tension, and get you motivated to get back into work, or help make the most of your well-deserved time off.',
		timeTakenMinutes: 10,
		stretches: [
			{
				id: 1,
				name: 'Stretch 1 Name',
				timeTakenMilliseconds: 5000,
				imgSrc: stretchSample,
				imgDescription: 'Stretch 1 Description',
				stretchInstructions: ['First step', 'Second step', 'Third step'],
			},
			{
				id: 2,
				name: 'Stretch 2 Name',
				timeTakenMilliseconds: 5000,
				imgSrc: stretchSample,
				imgDescription: 'Stretch 2 Description',
				stretchInstructions: ['First step', 'Second step', 'Third step'],
			},
			{
				id: 3,
				name: 'Stretch 3 Name',
				timeTakenMilliseconds: 4000,
				imgSrc: stretchSample,
				imgDescription: 'Stretch 3 Description',
				stretchInstructions: ['First step', 'Second step', 'Third step'],
			},
			{
				id: 4,
				name: 'Stretch 4 Name',
				timeTakenMilliseconds: 3000,
				imgSrc: stretchSample,
				imgDescription: 'Stretch 4 Description',
				stretchInstructions: ['First step', 'Second step', 'Third step'],
			},
		],
	},
};

export default routineRawData;
