import React, { Component } from 'react';
import Logo from './Logo';

import SliderContainer from '../Slider/Index';
import ContactContainer from '../Contact/Index';

export default class Main extends Component {
  render(){
    return(
      <main>
        <SliderContainer />
        <Logo />
      </main>
    )
  }
}
