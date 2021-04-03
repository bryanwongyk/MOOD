import stretchSample from '../../assets/stretchSample.jpeg';

const routineRawData = {
	Breathe: {
		description: 'sample description',
		stretches: [
			{
				id: 1,
				name: 'Stretch 1',
				timeTakenMilliseconds: 5000,
				imgSrc: stretchSample,
				imgDescription: 'Stretch 1 Description',
			},
			{
				id: 2,
				name: 'Stretch 2',
				timeTakenMilliseconds: 5000,
				imgSrc: stretchSample,
				imgDescription: 'Stretch 2 Description',
			},
			{
				id: 3,
				name: 'Stretch 3',
				timeTakenMilliseconds: 4000,
				imgSrc: stretchSample,
				imgDescription: 'Stretch 3 Description',
			},
			{
				id: 4,
				name: 'Stretch 4',
				timeTakenMilliseconds: 3000,
				imgSrc: stretchSample,
				imgDescription: 'Stretch 4 Description',
			},
		],
	},
};

export default routineRawData;
