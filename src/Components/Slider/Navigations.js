import React, { Component } from 'react';
import { Slides } from './Slides';

import NavigationItem from './NavigationItem';

export default class Navigation extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return(
      <article className='slider-navigation'>
        <ul>
          {
            Slides.map((slide) => (
              <NavigationItem
                slide={slide}
                itemWidth={this.props.itemWidth}
                activeItem={this.props.activeItem}
              />
            ))
          }
        </ul>
      </article>
    )
  }
}
