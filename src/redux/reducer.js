import {
  ADD_NEW_EMPLOYEE,
  DELETE_A_EMPLOYEE
} from './actionType'

const initialState = {
  data: []
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
    default:
      return state
  }
}