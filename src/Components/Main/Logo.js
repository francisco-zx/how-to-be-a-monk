import React, { Component } from 'react';
import logo from '../../assets/images/logo.svg';

export default class Logo extends Component{
  render(){
    return(
      <img className='fixed-logo animated fadeIn slow' src={logo} height='100px' width='auto'/>
    )
  }
}
