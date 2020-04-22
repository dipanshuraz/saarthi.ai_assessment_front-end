import {
  ADD_NEW_EMPLOYEE,
  DELETE_A_EMPLOYEE
} from './actionType'

export const addEmployee = (payload) => ({
  type: ADD_NEW_EMPLOYEE,
  payload
})


export const deleteEmployee = (payload) => ({
  type: DELETE_A_EMPLOYEE,
  payload
})
