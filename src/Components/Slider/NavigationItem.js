import React, { Component } from 'react';
import { animationOptions } from './Index';
import animateScrollTo from 'animated-scroll-to';


export default class NavigationItem extends Component{

  navigate = () => {
    let target = this.props.slide.index * this.props.itemWidth
    animateScrollTo(target, animationOptions);
    window.scrollTo(target, 0)
  }

  render(){
    return(
      <li className={this.props.activeItem == this.props.slide.index ? 'slider-navigation-item active' : 'slider-navigation-item'} onClick={this.navigate}>
        {this.props.slide.index}
      </li>
    )
  }
}
