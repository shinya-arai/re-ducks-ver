const getCurrentUser = currentUser => {
  return currentUser
}

const getItems = users => {
  const items = users.map(user => {
    return { label: user.name, value: user }
  })

  return items
}

export default {
  getCurrentUser,
  getItems
}