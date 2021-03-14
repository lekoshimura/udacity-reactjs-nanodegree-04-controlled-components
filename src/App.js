import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    text: ''
  };

  onValueChanged = (text) => {
    this.setState({
      text: text
    })
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input
            type="text"
            placeholder="Say Something"
            value={this.state.text} 
            onChange={(e) => this.onValueChanged(e.target.value)}/>
          <p className="echo">Echo:</p>
          <p>{this.state.text}</p>
        </div>
      </div>
    );
  };
}

export default App;