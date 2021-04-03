import React, { useReducer } from 'react';
import { GlobalStateActions as actionTypes } from '../actions';
import { ContextType } from '../../typings/storetype';

interface initialStateType {
	test: boolean;
}

const initialState: initialStateType = {
	test: false,
};

const GlobalStateContext = React.createContext<ContextType | null>(null);

const reducer = (state, action): any => {
	switch (action.type) {
		case actionTypes.TEST_ACTION:
			console.log('TEST_ACTION executed');
			return {
				...state,
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
		testAction: () => {
			dispatch({ type: actionTypes.TEST_ACTION });
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
