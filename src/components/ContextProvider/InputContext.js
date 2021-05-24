import React from 'react';

const InputContext = React.createContext({
    enableIt: false,
    checkInOutDates: [],
    outPutData: [], 
    sliderValue: 0,
    dispatch: () => { }
});

export default InputContext;