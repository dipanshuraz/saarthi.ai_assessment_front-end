import React, { Component } from 'react'

export class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      employeeId: '',
      department: '',
      emailId: '',
      dateOfJoining: '',
    }
  }

  formInputHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => console.log(this.state))
  }

  render() {
    const { name, employeeId, department, emailId, dateOfJoining } = this.state
    return (
      <div>
        <form action="">
          <label htmlFor="name">Name</label>
          <input type="text" id='name' name='name' value={name} onChange={this.formInputHandler} />
          <label htmlFor="employeeId"> Employee ID</label>
          <input type="number" id='employeeId' name='employeeId' value={employeeId} onChange={this.formInputHandler} />
          <label htmlFor="department">Department</label>
          <input type="text" id='department' name='department' value={department} onChange={this.formInputHandler} />
          <label htmlFor="emailId"> Email Id</label>
          <input type="email" id='emailId' name='emailId' value={emailId} onChange={this.formInputHandler} />
          <label htmlFor="dateOfJoining">DOJ</label>
          <input type="date" name='dateOfJoining' value={dateOfJoining} onChange={this.formInputHandler} />
          <button> Submit Details</button>
          <button type='reset'>Clear</button>
        </form>
      </div>
    )
  }
}

export default Form
