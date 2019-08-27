import types from './types'

export const changeCurrentUser = newCurrentUser => {
  return {
    type: types.CHANGE_CURRENT_USER,
    payload: {
      newCurrentUser
    }
  }
}

export default {
  changeCurrentUser
}