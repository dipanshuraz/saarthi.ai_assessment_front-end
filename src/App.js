import React, { Component } from 'react'
import logo from './logo.svg';
import PropTypes from "prop-types";
import './App.css';
import Modal from './components/Modal';
import Table from './components/Table';
import { connect } from 'react-redux'
import { showModal } from './redux/action'

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    const { data, showModal } = this.props
    return (
      <div>

        <Modal />

        <header>
          <nav>
            <h1 className='title-logo'>MyEmployee</h1>
            <button onClick={showModal} > <i class="fas fa-plus"> </i> Add Employee</button>
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

App.propTypes = {
  showModal: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired
};


const mapStateToProps = (state) => ({
  data: state.data,
})


const mapDispatchToProps = dispatch => ({
  showModal: () => dispatch(showModal())
})



export default connect(mapStateToProps, mapDispatchToProps)(App)
