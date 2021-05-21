import React, { useReducer } from 'react';
import InputContext from './InputContext';

const inititalDate = new Date();

const initialState = {
    enabled: false,
    checkInDates: inititalDate,
    checkOutDates: inititalDate,
    checkInOutDates: {
        checkIn: inititalDate,
        checkOut: inititalDate
    }
}

const reducer = (state, action) => {
    if (action.type === 'CHECK_IN_DATE') {
        if (action.inputCheck > state.checkOutDates) {
            return {
                enabled: action.enable,
                checkInDates: state.checkOutDates,
                checkOutDates: action.inputCheck,
                checkInOutDates: { ...state.checkInOutDates, checkOut: action.inputCheck }
            }
        }
        return {
            enabled: action.enable,
            checkInDates: action.inputCheck,
            checkOutDates: state.checkOutDates,
            checkInOutDates: { ...state.checkInOutDates, checkIn: action.inputCheck }
        }
    }
    if (action.type === 'CHECK_OUT_DATE') {
        if (action.inputCheck < state.checkInDates) {
            return {
                enabled: action.enable,
                checkInDates: action.inputCheck,
                checkOutDates: state.checkInDates,
                checkInOutDates: { ...state.checkInOutDates, checkIn: action.inputCheck }
            }
        }
        return {
            enabled: action.enable,
            checkInDates: state.checkInDates,
            checkOutDates: action.inputCheck,
            checkInOutDates: { ...state.checkInOutDates, checkOut: action.inputCheck }
        }
    }
    return initialState;
}

const InputContextProvider = ({ children }) => {
    const [inputState, dispatchInputState] = useReducer(reducer, initialState)

    const inputDateContext = {
        enableIt: inputState.enabled,
        checkInOutDates: Object.values(inputState.checkInOutDates),
        dispatch: dispatchInputState
    }

    return (
        <InputContext.Provider value={inputDateContext}>
            {children}
        </InputContext.Provider>
    );
}

export default InputContextProvider;