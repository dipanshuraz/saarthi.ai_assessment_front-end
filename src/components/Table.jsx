import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteEmployee } from '../redux/action'

export class Table extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    const { data, deleteEmployee } = this.props
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>EmployeeID</th>
              <th>Department</th>
              <th>Email Id</th>
              <th>DOJ</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data && data.map((elem, i) => {
              return (
                <tr>
                  <td>{elem.name}</td>
                  <td>{elem.employeeId}</td>
                  <td>{elem.department}</td>
                  <td>{elem.emailId}</td>
                  <td>{elem.dateOfJoining}</td>
                  <td><button className='delete-button-employee' onClick={() => deleteEmployee(elem.id)}><i class="fas fa-times"></i></button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.data
})

const mapDispatchToProps = dispatch => ({
  deleteEmployee: payload => dispatch(deleteEmployee(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Table)
