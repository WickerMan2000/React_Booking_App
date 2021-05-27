import React, { useReducer } from 'react';
import InputContext from './InputContext';

const initialState = {
    clean: false,
    map: ''
}

const mapReducer = (_, action) => {
    if (action.type === 'CLEAN_THE_MAP') {
        return {
            clean: action.condition,
            map: action.map
        }
    }
    return initialState;
}

const InputContextProvider = ({ children }) => {
    const [inputState, dispatchInputState] = useReducer(mapReducer, initialState)

    const inputDateContext = {
        cleanMap: inputState.clean,
        getTheMap: inputState.map,
        dispatch: dispatchInputState
    }

    return (
        <InputContext.Provider value={inputDateContext}>
            {children}
        </InputContext.Provider>
    );
}

export default InputContextProvider;