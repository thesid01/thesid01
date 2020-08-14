import React, { useState, useEffect } from 'react';
import './App.css';
import 'animate.css';

import $ from 'jquery'

import { Loader } from './components/loader'
import { Portfolio } from './components/portfolio'
import { Title } from './components/title'
// import { Header } from './components/header'
import { Footer } from './components/footer'

function App() {

  const [displayAnimation, setdisplayAnimation] = useState(1)
  const [animationClass, setanimationClass] = useState("animate__fadeIn")
  const [times, settimes] = useState(0)

  const handleScroll = () =>{
    setanimationClass("animate__fadeOutUpBig")
    setTimeout(() => {
      setdisplayAnimation(2);
    }, 200);
  }

  useEffect(() => {
    setTimeout(() => {
      setdisplayAnimation(0);
      $(window).on('mousewheel DOMMouseScroll', function(e){
        if(times === 0) {
            settimes(1);
            handleScroll();
        }
      });
    }, 3500);
  }, [])

  if(displayAnimation === 1){
    return (
      <div className="App">
        <div className="animate__animated animate__fadeOut animate__delay-3s">
          <Loader/>
        </div>
      </div>
    );
  }else if(displayAnimation === 0) {
    return (
      <div className="App" onKeyDown={handleScroll}>
        <div className={"animate__animated " + animationClass}>
          <Title/>
        </div>
        <i onClick={handleScroll} style={{'bottom':'50px', 'stroke': 'white', 'fill': 'white', 'position':'absolute'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/>
            </svg>
          </i>
      </div>
    );
  }else{
    return(
      <div className="App-main">
        {/* <Header className="animate__animated animate__zoomIn"/> */}
        <div className="animate__animated animate__fadeIn">
          <Portfolio/>
        </div>
        <Footer className="animate__animated animate__zoomIn"/>
      </div>
    );
  }
}

export default App;
