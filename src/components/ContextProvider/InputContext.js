import React from 'react';

const InputContext = React.createContext({
    enableIt: false,
    checkInOutDates: [],
    dispatch: () => { }
});

export default InputContext;