import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header'
import HeaderContainer from './Components/HeaderContainer/HeaderContainer';
import HeaderFeatures from './Components/HeaderFeatures/HeaderFeatures';
import WhyUS from './Components/WhyUs/WhyUs';

function App() {
  return (
    <div className="App">
      <Header />
      <HeaderContainer />
      <HeaderFeatures />
      <WhyUS />
    </div>
  );
}

export default App;
