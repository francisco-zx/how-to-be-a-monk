import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

export default class SliderItem extends Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  componentWillMount(){
    console.log('Current Position', this.props.currentPosition)
  }

  render(){
    return(
      <article
        className='slider-item animated fadeIn slow'
        style={{
          justifyContent: this.props.slide.alignment === 'right' ? 'flex-end' : 'flex-start'
        }}
      >
        {
          this.props.slide && this.props.currentPosition >= ((this.props.itemWidth * this.props.slide.index) - 200) &&
            <h1
              className={this.props.slide.vAlignment ? 'slider-item-title vertical-center animated fadeIn slow' : 'slider-item-title animated fadeIn slow'}
              style={{textAlign: this.props.slide.alignment}}
            >
              {this.props.slide.title}
            </h1>
        }

      </article>
    )
  }
}
