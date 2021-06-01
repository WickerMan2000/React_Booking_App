import React from 'react';
import Header from './components/BasicComponents/Header';
import Body from './components/BasicComponents/Body';
import HotelList from './components/BodyComponents/HotelList';
import './App.css';

function App() {

  return (
    <React.Fragment>
      <Header />
      <Body />
      <HotelList />
    </React.Fragment>
  );
}

export default App;