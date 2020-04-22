import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux'
import { addEmployee, hideModal } from '../redux/action'
import uniqid from 'uniqid'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { toast, Flip } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

toast.configure(
  {
    autoClose: 4000,
    hideProgressBar: true,
    transition: Flip,
  }
)

class Modal extends Component {
  constructor(props) {
    super(props)

    let day = new Date()
    this.state = {
      id: '',
      name: '',
      employeeId: '',
      department: '',
      emailId: '',
      dateOfJoining: `${day.getDate()}-${day.getMonth()}-${day.getFullYear()}`,
    }
  }


  formInputHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  validate = () => {
    const { name, emailId, employeeId, department } = this.state
    if (name.length === 0) {
      toast.warn("Name is Empty")
      return false
    }
    if (employeeId.length === 0) {
      toast.warn("Employee ID can't be empty");
      return false
    }
    if (department.length === 0) {
      toast.warn("Department can't be empty");
      return false
    }

    if (emailId.length < 5) {
      toast.warn("Email should be at least 5 charcters long");
      return false
    }
    return true
  }


  submitForm = (e) => {
    e.preventDefault()

    let validated = this.validate()
    if (validated) {
      const { addEmployee } = this.props
      this.setState({ id: uniqid() }, () => {
        addEmployee(this.state)
        this.resetInputsSubmit()
        this.onClose()

      })
      toast.success('Adeed successfully ', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

  }

  onChangeDate = (date) => {

    let day = date.getDate()
    let months = date.getMonth()
    let year = date.getFullYear()

    let Joiningdate = `${day}-${months}-${year}`
    this.setState({ dateOfJoining: Joiningdate })

  }
  onClose = () => {
    const { hideModal } = this.props
    hideModal()
  };

  resetInputsSubmit = () => {
    let day = new Date()
    this.setState({
      id: '',
      name: '',
      employeeId: '',
      department: '',
      emailId: '',
      dateOfJoining: `${day.getDate()}-${day.getMonth()}-${day.getFullYear()}`,
    })
  }

  resetInputs = () => {
    let day = new Date()
    this.setState({
      id: '',
      name: '',
      employeeId: '',
      department: '',
      emailId: '',
      dateOfJoining: `${day.getDate()}-${day.getMonth()}-${day.getFullYear()}`,
    }, () => toast.info('Reset Successfully'))
  }

  render() {

    const { name, employeeId, department, emailId } = this.state
    const { modalFlag } = this.props
    if (!modalFlag) {
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
          <form action="">
            <ul class="form-style-1">
              <li>
                <label htmlFor="name"> Name</label>
                <input type="text" id='name' name='name' value={name} onChange={this.formInputHandler} />
              </li>
              <li>
                <label htmlFor="employeeId"> Employee ID</label>
                <input type="text" id='employeeId' name='employeeId' value={employeeId} onChange={this.formInputHandler} />
              </li>
              <li>
                <label htmlFor="department">Department</label>
                <select name="department" id="department" value={department} onChange={this.formInputHandler}>
                  <option value="">Select Department</option>
                  <option value="Developer">Developer</option>
                  <option value="UI/UX">UI/UX</option>
                  <option value="Full Stack">Full Stack</option>
                  <option value="Manager">Manager</option>
                  <option value="Marketing">Marketing</option>
                </select>
              </li>
              <li>
                <label htmlFor="emailId"> Email Id</label>
                <input type="email" id='emailId' name='emailId' value={emailId} onChange={this.formInputHandler} />
              </li>
              <li>
                <label htmlFor="dateOfJoining">Date Of Joining</label>
                <Calendar
                  className="calendar-style"
                  onChange={this.onChangeDate}
                  value={this.state.date}
                />
              </li>
              <li className='flex'>
                <button className='btn-submit' type='submit' onClick={this.submitForm}> Add</button>
                <button className='btn-reset' type='button' onClick={this.resetInputs}>Clear</button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  addEmployee: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  modalFlag: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  modalFlag: state.modalFlag
})

const mapDispatchToProps = (dispatch) => ({
  addEmployee: payload => dispatch(addEmployee(payload)),
  hideModal: () => dispatch(hideModal())
})


export default connect(mapStateToProps, mapDispatchToProps)(Modal)