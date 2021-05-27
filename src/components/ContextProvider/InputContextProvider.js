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
    },
    clean: false,
    map: ''
}

const reducer = (state, action) => {
    if (action.type === 'CHECK_IN_DATE') {
        if (action.inputCheck > state.checkOutDates) {
            return {
                ...state,
                enabled: action.enable,
                checkInDates: state.checkOutDates,
                checkOutDates: action.inputCheck,
                checkInOutDates: {
                    ...state.checkInOutDates,
                    checkOut: action.inputCheck
                }
            }
        }
        return {
            ...state,
            enabled: action.enable,
            checkInDates: action.inputCheck,
            checkInOutDates: {
                ...state.checkInOutDates,
                checkIn: action.inputCheck
            }
        }
    }
    if (action.type === 'CHECK_OUT_DATE') {
        if (action.inputCheck < state.checkInDates) {
            return {
                ...state,
                enabled: action.enable,
                checkInDates: action.inputCheck,
                checkOutDates: state.checkInDates,
                checkInOutDates: {
                    ...state.checkInOutDates,
                    checkIn: action.inputCheck
                }
            }
        }
        return {
            ...state,
            enabled: action.enable,
            checkOutDates: action.inputCheck,
            checkInOutDates: {
                ...state.checkInOutDates,
                checkOut: action.inputCheck
            }
        }
    }
    if (action.type === 'CLEAN_THE_MAP') {
        return {
            ...state,
            clean: action.condition,
           map: action.map
        }
    }
    return initialState;
}

const InputContextProvider = ({ children }) => {
    const [inputState, dispatchInputState] = useReducer(reducer, initialState)

    const inputDateContext = {
        enableIt: inputState.enabled,
        checkInOutDates: Object.values(inputState.checkInOutDates),
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