import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Modal from './components/Modal';
import Table from './components/Table';
import { connect } from 'react-redux'

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false
    }
  }

  showModal = (e) => {
    console.log(e, 'e');
    this.setState({
      show: e
    });
  };

  render() {
    const { data } = this.props
    return (
      <div className=''>
        <Modal showModal={this.showModal} show={this.state.show} />
        <header>
          <nav>
            <h1 className='title-logo'>MyEmployee</h1>
            <button onClick={() => this.showModal(true)} > <i class="fas fa-plus"> </i> Add Employee</button>
          </nav>
        </header>

        <main>
          <Table />
        </main>
        <footer>

          <p>
            Total Count : {data.length}
          </p>
          <p class="lead">Made with  <span class="text-danger"> <i class="fas fa-heart"></i></span> by  <a
            className='footer-logo'
            href="https://www.codersadhu.tech">codersadhu.tech</a>
          </p>

        </footer>
      </div >
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.data
})

const mapDispatchToProps = {

}


export default connect(mapStateToProps, mapDispatchToProps)(App)
