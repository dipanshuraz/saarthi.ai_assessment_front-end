import {
  ADD_NEW_EMPLOYEE,
  DELETE_A_EMPLOYEE,
  SHOW_MODAL,
  HIDE_MODAL
} from './actionType'

export const addEmployee = (payload) => ({
  type: ADD_NEW_EMPLOYEE,
  payload
})


export const deleteEmployee = (payload) => ({
  type: DELETE_A_EMPLOYEE,
  payload
})

export const showModal = () => ({
  type: SHOW_MODAL
})

export const hideModal = () => ({
  type: HIDE_MODAL
})



