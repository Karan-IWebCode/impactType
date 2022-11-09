import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header'
import HeaderContainer from './Components/HeaderContainer/HeaderContainer';
import HeaderFeatures from './Components/HeaderFeatures/HeaderFeatures';
import WhyUS from './Components/WhyUs/WhyUs';
import Growing from './Components/Growing/Growing';
import VideoScreen from './Components/VideoScreen/VideoScreen';
import BlogPost from './Components/BlogPost/BlogPost';
import Footer from './Components/Footer/Footer';
import Slider from './Components/Slider/Slider';
import Slider2 from './Components/Slider2/Slider2'

function App() {
  return (
    <div className="App">
      <Header />
      <HeaderContainer />
      <HeaderFeatures />
      <WhyUS />
      <Growing />
      <VideoScreen />
      
      <Slider2 />
      <BlogPost />
      <Footer />
    </div>
  );
}

export default App;
