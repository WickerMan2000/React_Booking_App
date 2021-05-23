import React from 'react';

const InputContext = React.createContext({
    enableIt: false,
    checkInOutDates: [],
    outPutData: [], 
    dispatch: () => { }
});

export default InputContext;