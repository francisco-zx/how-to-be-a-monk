import React, { Component } from 'react';
import { arrowLeftIcon, arrowRightIcon} from '../../assets/images/IconsSvg.js'

export class LeftArrow extends Component{
  render(){
    return(
      <div className='arrow-left' onClick={this.props.scroll}>
        {arrowLeftIcon}
      </div>
    )
  }
}
export class RightArrow extends Component{
  render(){
    return(
      <div className='arrow-right' onClick={this.props.scroll}>
        {arrowRightIcon}
      </div>
    )
  }
}
