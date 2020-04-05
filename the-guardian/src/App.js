import React from 'react';
import './App.css';
import Header from './components/Header'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      data:[]
    }
  }

  render() {
    return (
      <div>
        <h1> Welcome to the new Guardian website </h1>
        <Header />
      </div>
      
    )
  }
}
