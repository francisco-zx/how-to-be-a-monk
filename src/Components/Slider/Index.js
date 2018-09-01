import React, { Component } from 'react';
import './Slider.css';
import { Slides } from './Slides';
import animateScrollTo from 'animated-scroll-to';

import SliderItem from './SliderItem';
import { LeftArrow, RightArrow } from './Arrows';
import Navigation from './Navigations';

export default class SliderContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      scrollWidth: null,
      itemWidth: null,
      activeItem: 0,
      currentPosition: 0
    }
    window.addEventListener('scroll', this.getActiveItem)
    window.addEventListener('resize', this.getScrollPosition)
  }

  log = () => {
    console.log('...')
  }

  componentDidMount(){
    this.getScrollPosition()
  }

  getScrollPosition = () => {
    const wrapper = this.refs.slider;
    let scrollWidth = wrapper.scrollWidth;
    this.setState({
      scrollWidth: scrollWidth,
      itemWidth: scrollWidth / Slides.length
    }, () => {
      console.log(this.state)
    })
    console.log('scrollWidth', scrollWidth);
  }

  getActiveItem = () => {
    console.log()
    let offset = window.pageXOffset;
    this.setState({
      currentPosition: window.pageXOffset
    }, () => {
      console.log('currentPosition: ', this.state.currentPosition)
    })
    let activeItem = Math.floor(window.pageXOffset / this.state.itemWidth)
    this.setState({
      activeItem: activeItem
    }, () => {
      console.log('active slide: ', this.state.activeItem)
    })
  }

  scrollToNext = () => {
    let target = (this.state.activeItem + 1 ) * this.state.itemWidth;
    animateScrollTo(target, animationOptions);
  }

  scrollToPrevious = () => {
    let target = (this.state.activeItem - 1 ) * this.state.itemWidth;
    animateScrollTo(target, animationOptions);
  }

  render(){
    return(
      <div className='slider-container' ref= 'slider' id='slider'>
        <LeftArrow scroll={() => this.scrollToPrevious()}/>
          {
            Slides.map((slide) => (
              <SliderItem
                slide={slide}
                itemWidth={this.state.itemWidth}
                activeItem={this.state.activeItem}
                currentPosition={this.state.currentPosition}
                key={slide.title}
              />
            ))
          }
        <RightArrow scroll={() => this.scrollToNext()}/>
        <Navigation
          itemWidth={this.state.itemWidth}
          activeItem={this.state.activeItem}
        />
      </div>
    )
  }
}

export const animationOptions = {
  speed: 500,
  minDuration: 400,
  maxDuration: 1500,
  element: window,
  cancelOnUserAction: true,
  passive: true,
  horizontal: true
};
