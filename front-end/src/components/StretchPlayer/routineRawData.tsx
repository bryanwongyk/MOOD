import stretchSample from '../../assets/stretchSample.jpeg';

const routineRawData = {
	Breathe: {
		description: 'sample description',
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
