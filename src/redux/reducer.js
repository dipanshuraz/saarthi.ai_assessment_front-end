import {
  ADD_NEW_EMPLOYEE,
  DELETE_A_EMPLOYEE,
  SHOW_MODAL,
  HIDE_MODAL
} from './actionType'

const initialState = {
  data: [],
  modalFlag: false
}

export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {

    case ADD_NEW_EMPLOYEE:
      return {
        ...state, data: [...state.data, payload]
      }
    case DELETE_A_EMPLOYEE:
      let arr = state.data.filter((elem) => {
        return elem.id !== payload
      })

      return {
        ...state, data: arr
      }
    case SHOW_MODAL: {
      return {
        ...state, modalFlag: true
      }
    }
    case HIDE_MODAL: {
      return {
        ...state, modalFlag: false
      }
    }
    default:
      return state
  }
}