import React from 'react';

const InputContext = React.createContext({
    initialDate: '',
    enableIt: false,
    checkInOutDates: [],
    dispatch: () => { }
});

export default InputContext;