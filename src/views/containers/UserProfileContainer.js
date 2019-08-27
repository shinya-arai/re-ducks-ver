import { connect } from 'react-redux'
import { usersSelectors, usersOperations } from '../../state/ducks/users'
import UserProfile from '../components/UserProfile'

const mapStateToProps = state => {
  return {
    currentUser: usersSelectors.getCurrentUser(
      state.usersState.currentUser
    ),
    items: usersSelectors.getItems(
      state.usersState.users
    )
  }
}

const mapDispatchToProps = {
  changeCurrentUser: usersOperations.changeCurrentUser
}

const UserProfileContainer = connect(
  mapStateToProps,
)(UserProfile)

export default UserProfileContainer