import React, { useReducer } from 'react';
import { GlobalStateActions as actionTypes } from '../actions';
import { ContextType } from '../../typings/storetype';
import Card from '../../components/Player/PlayerVideoCarousel/Card';

interface initialStateType {
	cards: null | typeof Card;
	cardIntervals: { [key: string]: number }; //https://stackoverflow.com/questions/47847561/typescript-type-for-object-with-unknown-keys-but-only-numeric-values
	cardsLoaded: boolean;
	cardShownId: null | number;
	lastCardId: null | number;
}

const initialState: initialStateType = {
	cards: null,
	cardIntervals: {},
	cardsLoaded: false,
	cardShownId: null,
	lastCardId: null,
};

const GlobalStateContext = React.createContext<ContextType | null>(null);

const reducer = (state, action): any => {
	switch (action.type) {
		case actionTypes.SET_CARDS:
			return {
				...state,
				cards: action.cards,
				cardIntervals: action.cardIntervals,
				cardsLoaded: action.cardsLoaded,
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
		default: {
			console.error(`Unhandled action type: ${action.type}`);
		}
	}
	return state;
};

const GlobalStateProvider = ({ children }): React.ReactElement => {
	const [globalState, dispatch] = useReducer(reducer, initialState);

	const globalActions = {
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
	};

	// fix does not exist on type error: https://stackoverflow.com/questions/57399205/typescript-error-when-using-react-usecontext-and-usereducer
	const value: ContextType = { globalState, dispatch, globalActions };

	return (
		// pass down state and setter
		<GlobalStateContext.Provider value={value}>{children}</GlobalStateContext.Provider>
	);
};

export { GlobalStateProvider, GlobalStateContext };
