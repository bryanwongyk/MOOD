import triceps from '../../assets/laid-off/triceps.gif';
import overHeadReach from '../../assets/laid-off/overheadreach.gif';
import upperBodyAndArm from '../../assets/laid-off/upperbodyandarm.gif';
import pectoralis from '../../assets/laid-off/pectoralis.gif';
import rhomboid from '../../assets/laid-off/trunkrotation.gif';
import hipAndKneeFlexion from '../../assets/laid-off/hipandkneeflexion.gif';
import hamstrings from '../../assets/laid-off/hamstrings.gif';
import shoulderShrug from '../../assets/laid-off/shouldershrug.gif';
import neck from '../../assets/laid-off/neck.gif';
import upperTrap from '../../assets/laid-off/uppertrap.gif';

const routineRawData = {
	'Laid Off': {
		description:
			'It’s not you - it’s the economy. Every cloud comes with a silver lining and this is your chance to finally take a break before jumping back into the workforce. This stretching guide will help you relieve stress and tension, and get you motivated to get back into work, or help make the most of your well-deserved time off.',
		timeTakenMinutes: 10,
		stretches: [
			{
				id: 1,
				name: 'Tricep Stretch (right side)',
				timeTakenMilliseconds: 15000,
				imgSrc: triceps,
				imgDescription: 'Tricep Stretch',
				imgExtraDesc: 'The above demonstration is on loop. Hold your stretch.',
				stretchInstructions: [
					'Raise both arms and bend them behind your head.',
					'Use left hand to pull the right elbow down towards your head.',
					'Hold for 15 seconds. You should feel a deep stretch along your tricep.',
				],
			},
			{
				id: 2,
				name: 'Tricep Stretch (left side)',
				timeTakenMilliseconds: 15000,
				imgSrc: triceps,
				imgDescription: 'Tricep Stretch',
				imgExtraDesc: 'The above demonstration is on loop. Hold your stretch.',
				stretchInstructions: [
					'Raise both arms and bend them behind your head.',
					'Use right hand to pull the left elbow down towards your head.',
					'Hold for 15 seconds. You should feel a deep stretch along your tricep.',
				],
			},
			{
				id: 3,
				name: 'Latissimus Stretch / Overhead Reach (right side)',
				timeTakenMilliseconds: 15000,
				imgSrc: overHeadReach,
				imgDescription: 'Latissimus Stretch / Overhead Reach',
				imgExtraDesc: 'The above demonstration is on loop. Hold your stretch.',
				stretchInstructions: [
					'Extend your right arm overhead.',
					'Reach over towards the opposite side. You can use your left hand to hold your wrist to deepen the stretch.',
					'Hold for 15 seconds.',
				],
			},
			{
				id: 4,
				name: 'Latissimus Stretch / Overhead Reach (left)',
				timeTakenMilliseconds: 15000,
				imgSrc: overHeadReach,
				imgDescription: 'Latissimus Stretch / Overhead Reach',
				imgExtraDesc: 'The above demonstration is on loop. Hold your stretch.',
				stretchInstructions: [
					'Extend your left arm overhead.',
					'Reach over towards the opposite side. You can use your left hand to hold your wrist to deepen the stretch.',
					'Hold for 15 seconds.',
				],
			},
			{
				id: 5,
				name: 'Upper Body and Arm Stretch',
				timeTakenMilliseconds: 30000,
				imgSrc: upperBodyAndArm,
				imgDescription: 'Upper Body and Arm Stretch',
				imgExtraDesc: 'The above demonstration is on loop. Hold your stretch.',
				stretchInstructions: [
					'Place your arms over above your head and clasp your hands together with palms facing outward.',
					'Push your arms up and extend from your shoulders.',
					'Hold for 30 seconds.',
				],
			},
			{
				id: 6,
				name: 'Pectoralis Stretch',
				timeTakenMilliseconds: 30000,
				imgSrc: pectoralis,
				imgDescription: 'Pectoralis Stretch',
				imgExtraDesc: 'The above demonstration is on loop. Hold your stretch.',
				stretchInstructions: [
					'Extend your arms in front of you and angle your back forwards.',
					'Lower your head in line with your arms.',
					'Hold for 30 seconds.',
				],
			},
			{
				id: 7,
				name: 'Rhomboid Upper Stretch (right twist)',
				timeTakenMilliseconds: 15000,
				imgSrc: rhomboid,
				imgDescription: 'Rhomboid Upper Stretch',
				imgExtraDesc: 'The above demonstration is on loop. Hold your stretch.',
				stretchInstructions: [
					'Start by placing both feet flat on the ground in front of you.',
					'Cross your right leg over your left leg and place your left hand on your left knee.',
					'Rest your right arm on the chair to maintain your balance.',
					'Twist your upper body towards the right side. You should feel a stretch in your back.',
					'Hold the post for 15 seconds.',
				],
			},
			{
				id: 8,
				name: 'Rhomboid Upper Stretch (left twist)',
				timeTakenMilliseconds: 15000,
				imgSrc: rhomboid,
				imgDescription: 'Rhomboid Upper Stretch',
				imgExtraDesc: 'The above demonstration is on loop. Hold your stretch.',
				stretchInstructions: [
					'Start by placing both feet flat on the ground in front of you.',
					'Cross your left leg over your right leg and place your right hand on your left knee.',
					'Rest your left arm on the chair to maintain your balance.',
					'Twist your upper body towards the left side. You should feel a stretch in your back.',
					'Hold the post for 15 seconds.',
				],
			},
			{
				id: 9,
				name: 'Hip and Knee Flexion Stretch (right side)',
				timeTakenMilliseconds: 15000,
				imgSrc: hipAndKneeFlexion,
				imgDescription: 'Hip and Knee Flexion Stretch',
				imgExtraDesc: 'The above demonstration is on loop. Hold your stretch.',
				stretchInstructions: [
					'Sit forward on a chair and lean back. Your legs should be slightly apart and on the floor past your knees.',
					'Clasp both hands on your right knee and pull towards your chest.',
					'Hold for 15 seconds.',
				],
			},
			{
				id: 10,
				name: 'Hip and Knee Flexion Stretch (left side)',
				timeTakenMilliseconds: 15000,
				imgSrc: hipAndKneeFlexion,
				imgDescription: 'Hip and Knee Flexion Stretch',
				imgExtraDesc: 'The above demonstration is on loop. Hold your stretch.',
				stretchInstructions: [
					'Sit forward on a chair and lean back. Your legs should be slightly apart and on the floor past your knees.',
					'Clasp both hands on your left knee and pull towards your chest.',
					'Hold for 15 seconds.',
				],
			},
			{
				id: 11,
				name: 'Hamstring Stretch (right side)',
				timeTakenMilliseconds: 15000,
				imgSrc: hamstrings,
				imgDescription: 'Hamstring Stretch',
				imgExtraDesc: 'The above demonstration is on loop. Hold your stretch.',
				stretchInstructions: [
					'Extend your legs outward with feet flat and toes pointed up.',
					'Extend your arms and reach forward towards your toes.',
					'Hold for 15 seconds.',
				],
			},
			{
				id: 12,
				name: 'Hamstring Stretch (left side)',
				timeTakenMilliseconds: 15000,
				imgSrc: hamstrings,
				imgDescription: 'Hamstring Stretch',
				imgExtraDesc: 'The above demonstration is on loop. Hold your stretch.',
				stretchInstructions: [
					'Extend your legs outward with feet flat and toes pointed up.',
					'Extend your arms and reach forward towards your toes.',
					'Hold for 15 seconds.',
				],
			},
			{
				id: 13,
				name: 'Shoulder Shrug + Rotations',
				timeTakenMilliseconds: 40000,
				imgSrc: shoulderShrug,
				imgDescription: 'Shoulder Shrug + Rotations',
				stretchInstructions: [
					'Raise both shoulders up and down 10 times.',
					'Rotate your shoulders backwards in a circular motion 10 times.',
					'Rotate your shoulders forwards in a circular motion 10 times.',
				],
			},
			{
				id: 14,
				name: 'Neck Stretches (right side)',
				timeTakenMilliseconds: 15000,
				imgSrc: neck,
				imgDescription: 'Neck Stretches',
				imgExtraDesc: 'The above demonstration is on loop. Hold your stretch.',
				stretchInstructions: [
					'Relax your body and tilt your head forward.',
					'Slowly roll towards your right and hold for 15 seconds. You may also use your right hand to pull your head forward to feel a deeper stretch.',
				],
			},
			{
				id: 15,
				name: 'Neck Stretches (left side)',
				timeTakenMilliseconds: 15000,
				imgSrc: neck,
				imgDescription: 'Neck Stretches',
				imgExtraDesc: 'The above demonstration is on loop. Hold your stretch.',
				stretchInstructions: [
					'Relax your body and tilt your head forward.',
					'Slowly roll towards your left and hold for 15 seconds. You may also use your left hand to pull your head forward to feel a deeper stretch.',
				],
			},
			{
				id: 16,
				name: 'Upper Trap Stretch',
				timeTakenMilliseconds: 15000,
				imgSrc: upperTrap,
				imgDescription: 'Upper Trap Stretch',
				imgExtraDesc: 'The above demonstration is on loop. Hold your stretch.',
				stretchInstructions: [
					'Sit straight and put your right hand up to your head. Pull your head towards your right shoulder until you feel a light stretch.',
					'Hold pose for 15 seconds.',
				],
			},
			{
				id: 17,
				name: 'Upper Trap Stretch (left side)',
				timeTakenMilliseconds: 15000,
				imgSrc: upperTrap,
				imgDescription: 'Upper Trap Stretch',
				imgExtraDesc: 'The above demonstration is on loop. Hold your stretch.',
				stretchInstructions: [
					'Sit straight and put your left hand up to your head. Pull your head towards your left shoulder until you feel a light stretch.',
					'Hold pose for 15 seconds.',
				],
			},
		],
	},
};

export default routineRawData;
