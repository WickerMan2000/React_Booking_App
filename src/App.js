import React from 'react';
import Header from './components/BasicComponents/Header';
import Body from './components/BasicComponents/Body';
import HotelList from './components/BodyComponents/HotelList';
import InputContextProvider from './components/ContextProvider/InputContextProvider';
import './App.css';

function App() {

  return (
    <React.Fragment>
      <InputContextProvider>
        <Header />
        <Body />
        <HotelList />
      </InputContextProvider>
    </React.Fragment>
  );
}

export default App;