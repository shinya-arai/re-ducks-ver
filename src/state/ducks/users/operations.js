import actions from './actions'
import store from '../../store'

const changeCurrentUser = value => {
  const { users } = store.getState().usersState

  const newCurrentUser = value && users.find(user => user.id === value.id)

  return actions.changeCurrentUser(newCurrentUser)
}

export default {
  changeCurrentUser
}