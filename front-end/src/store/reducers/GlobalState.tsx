import React, { useReducer } from 'react';
import { GlobalStateActions as actionTypes } from '../actions';
import { ContextType } from '../../typings/storetype';
import Card from '../../components/StretchPlayer/PlayerVideoCarousel/Card';

interface initialStateType {
	cards: null | typeof Card;
	cardIntervals: { [key: string]: number }; //https://stackoverflow.com/questions/47847561/typescript-type-for-object-with-unknown-keys-but-only-numeric-values
	cardsLoaded: boolean;
	cardShownId: null | number;
	lastCardId: null | number;
	stretchComplete: boolean;
	selectedStretchRoutine: null | string;
	selectedMeditationRoutine: null | string;
	selectedExerciseFilter: null | string;
	showStretchOpening: boolean;
}

const initialState: initialStateType = {
	cards: null,
	cardIntervals: {},
	cardsLoaded: false,
	cardShownId: null,
	lastCardId: null,
	stretchComplete: false,
	selectedStretchRoutine: null,
	selectedMeditationRoutine: null,
	selectedExerciseFilter: null,
	showStretchOpening: true,
};

const GlobalStateContext = React.createContext<ContextType | null>(null);

const reducer = (state, action): any => {
	switch (action.type) {
		case actionTypes.SET_STRETCH_ROUTINE:
			return {
				...state,
				selectedStretchRoutine: action.selectedStretchRoutine,
			};
		case actionTypes.SET_CARDS:
			return {
				...state,
				cards: action.cards,
				cardIntervals: action.cardIntervals,
				cardsLoaded: action.cardsLoaded,
				stretchComplete: false,
			};
		case actionTypes.SET_CARD_SHOWN_ID:
			return {
				...state,
				cardShownId: action.cardShownId,
			};
		case actionTypes.SET_LAST_CARD_ID:
			return {
				...state,
				lastCardId: action.lastCardId,
			};
		case actionTypes.SET_STRETCH_COMPLETE:
			return {
				...state,
				stretchComplete: true,
				cardIntervals: {},
				cardShownId: null,
				lastCardId: null,
			};
		case actionTypes.SET_STRETCH_INCOMPLETE:
			return {
				...state,
				stretchComplete: false,
			};
		case actionTypes.RESET_STRETCHES:
			return {
				...state,
				cards: null,
				cardIntervals: {},
				cardsLoaded: false,
				cardShownId: null,
				lastCardId: null,
				stretchComplete: false,
				selectedStretchRoutine: null,
				showStretchOpening: true,
			};
		case actionTypes.SET_MEDITATION_ROUTINE:
			return {
				...state,
				selectedMeditationRoutine: action.selectedMeditationRoutine,
			};
		case actionTypes.SET_EXERCISE_FILTER:
			return {
				...state,
				selectedExerciseFilter: action.selectedExerciseFilter,
			};
		case actionTypes.RESET_ALL:
			return {
				...state,
				cards: null,
				cardIntervals: {},
				cardsLoaded: false,
				cardShownId: null,
				lastCardId: null,
				stretchComplete: false,
				selectedStretchRoutine: null,
				selectedMeditationRoutine: null,
				selectedExerciseFilter: null,
				showStretchOpening: true,
			};
		case actionTypes.SET_STRETCH_OPENING:
			return {
				...state,
				showStretchOpening: action.newValue,
			};
		default: {
			console.error(`Unhandled action type: ${action.type}`);
		}
	}
	return state;
};

const GlobalStateProvider = ({ children }): React.ReactElement => {
	const [globalState, dispatch] = useReducer(reducer, initialState);

	const globalActions = {
		setStretchRoutine: selectedStretchRoutine => {
			dispatch({
				type: actionTypes.SET_STRETCH_ROUTINE,
				selectedStretchRoutine: selectedStretchRoutine,
			});
		},
		setCards: (cards, cardIntervals, cardsLoaded) => {
			dispatch({
				type: actionTypes.SET_CARDS,
				cards: cards,
				cardIntervals: cardIntervals,
				cardsLoaded: cardsLoaded,
			});
		},
		setCardShown: cardShownId => {
			dispatch({
				type: actionTypes.SET_CARD_SHOWN_ID,
				cardShownId: cardShownId,
			});
		},
		setLastCardId: lastCardId => {
			dispatch({
				type: actionTypes.SET_LAST_CARD_ID,
				lastCardId: lastCardId,
			});
		},
		setStretchComplete: () => {
			dispatch({
				type: actionTypes.SET_STRETCH_COMPLETE,
			});
		},
		setStretchIncomplete: () => {
			dispatch({
				type: actionTypes.SET_STRETCH_INCOMPLETE,
			});
		},
		resetStretches: () => {
			dispatch({
				type: actionTypes.RESET_STRETCHES,
			});
		},
		setMeditationRoutine: selectedMeditationRoutine => {
			dispatch({
				type: actionTypes.SET_MEDITATION_ROUTINE,
				selectedMeditationRoutine: selectedMeditationRoutine,
			});
		},
		setExerciseFilter: selectedExerciseFilter => {
			dispatch({
				type: actionTypes.SET_EXERCISE_FILTER,
				selectedExerciseFilter: selectedExerciseFilter,
			});
		},
		resetAll: () => {
			dispatch({
				type: actionTypes.RESET_ALL,
			});
		},
		setStretchOpening: newValue => {
			dispatch({
				type: actionTypes.SET_STRETCH_OPENING,
				newValue: newValue,
			});
		},
	};

	// fix does not exist on type error: https://stackoverflow.com/questions/57399205/typescript-error-when-using-react-usecontext-and-usereducer
	const value: ContextType = { globalState, dispatch, globalActions };

	return (
		// pass down state and setter
		<GlobalStateContext.Provider value={value}>{children}</GlobalStateContext.Provider>
	);
};

export { GlobalStateProvider, GlobalStateContext };
