import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addEmployee } from '../redux/action'
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

export class Form extends Component {
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
    this.props.showModal(false)
  };

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
    return (
      <div>
        <form action="">
          <ul class="form-style-1">
            <li>
              <label htmlFor="name"> Name</label>
              <input type="text" id='name' name='name' value={name} onChange={this.formInputHandler} />
            </li>
            <li>
              <label htmlFor="employeeId"> Employee ID</label>
              <input type="number" id='employeeId' name='employeeId' value={employeeId} onChange={this.formInputHandler} />
            </li>
            <li>
              <label htmlFor="department">Department</label>
              <input type="text" id='department' name='department' value={department} onChange={this.formInputHandler} />
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
            <li>
              <button className='btn-submit' type='submit' onClick={this.submitForm}> Submit Details</button>
              <button className='btn-reset' type='button' onClick={this.resetInputs}>Clear</button>
            </li>
          </ul>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  addEmployee: payload => dispatch(addEmployee(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)