import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import Modal from './components/Modal';

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false
    }
  }

  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };

  render() {
    return (
      <div>
        {/* <Form /> */}
        <Modal onClose={this.showModal} show={this.state.show}>
          Message in Modal
</Modal>
        <button class="toggle-button"
          id="centered-toggle-button"
          onClick={e => {
            this.showModal(e);
          }}
        > show Modal </button>
      </div>
    )
  }
}



export default App
