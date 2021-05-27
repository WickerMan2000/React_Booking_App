import React from 'react';

const InputContext = React.createContext({
    enableIt: false,
    checkInOutDates: [],
    cleanMap: false,
    getTheMap: '',
    dispatch: () => { }
});

export default InputContext;