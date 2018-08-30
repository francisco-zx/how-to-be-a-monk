import React, { Component } from 'react';
import './App.css';
import './fonts.css';
import Main from './Components/Main/Main';

//components
import Loader from './Components/Loader/Loader';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentWillMount(){
    this.finishLoading()
  }

  finishLoading = () => {
    setTimeout(() => {
      this.setState({isLoading: false});
    },3000)
  }

  render() {
    return (
      <div className="App">
        {
          this.state.isLoading ?
            <Loader />
          : <Main />
        }
      </div>
    );
  }
}

export default App;
