import types from './types'

const initialState = {
  users: [
    {id: '1', image: 'github-alt', name: 'taro', canClap: 100, beClapped: 0},
    {id: '2', image: 'smile-o', name: 'jiro', canClap: 100, beClapped: 0},
    {id: '3', image: 'drupal', name: 'saburo', canClap: 100, beClapped: 0},
    {id: '4', image: 'pied-piper-alt', name: 'shiro', canClap: 100, beClapped: 0},
    {id: '5', image: 'themeisle', name: 'goro', canClap: 100, beClapped: 0},
  ],
  currentUser: null,
  targetUser: null,
}

const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state
  }
}

export default usersReducer