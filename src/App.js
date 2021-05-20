import React from 'react';
import Header from './components/BasicComponents/Header';
import Body from './components/BasicComponents/Body';
import InputContextProvider from './components/ContextProvider/InputContextProvider';
import './App.css';

function App() {

  return (
    <React.Fragment>
      <InputContextProvider>
        <Header></Header>
        <Body></Body>
      </InputContextProvider>
    </React.Fragment>
  );
}

export default App;