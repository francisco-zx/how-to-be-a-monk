import React, { Component } from 'react';
import './Loader.css'
import monk from '../../assets/images/monk.png';

export default class Loader extends Component {
  constructor(props){
    super(props);
    this.state = {
      loaderText: 'Patience!',
      showPadawan: false
    }
  }

  componentWillMount(){
    this.changeLoaderText();
  }

  changeLoaderText = () => {
    setTimeout(() => {
      this.setState({
        loaderText: 'Patience, ',
        showPadawan: true
      });
    }, 1500);
  }

  render(){
    return(
      <div className='loader animated fadeIn slow'>
        <img src={monk} className='loader-monk slow animated infinite pulse' width='auto%' height='150px'/>
        <div className='loader-text-wrapper'>
          <p className='loader-text animated fadeIn slow'>{this.state.loaderText}</p>
          {
            this.state.showPadawan &&
              <p className='loader-text animated fadeIn'> Young Padawan...</p>
          }
        </div>
      </div>
    )
  }
}
