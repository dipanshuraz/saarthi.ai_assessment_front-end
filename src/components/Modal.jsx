import React, { Component } from "react";
// import PropTypes from "prop-types";
import Form from './Form'

class Modal extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  onClose = () => {
    this.props.showModal(false)
  };

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="parent" >
        <div class="modal" id="modal">
          <div className="row" >

            <button class="btn-close text-danger" onClick={this.onClose}>
              <i class="fa-2x fas fa-times text-danger"></i>
            </button>
          </div>
          <Form />
        </div>
      </div>
    );
  }
}
// Modal.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   show: PropTypes.bool.isRequired
// };


export default Modal