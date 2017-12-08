function addUserAll(firstName, lastName) {
  return {
    type: 'ADD_ALL',
    firstName,
    lastName,
  }
}

export { addUserAll }
