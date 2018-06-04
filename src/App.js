import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Modal from './components/Modal';

class App extends Component {
  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState(state => ({ isOpen: !state.isOpen }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <main>
          <button onClick={this.toggle}>Toggle</button>
          {this.state.isOpen &&
            <Modal onClose={this.toggle}>
              <h1>Modal</h1>
            </Modal>
          }
        </main>
      </div>
    );
  }
}

export default App;
