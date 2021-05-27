import React from 'react';

const InputContext = React.createContext({
    cleanMap: false,
    getTheMap: '',
    dispatch: () => { }
});

export default InputContext;