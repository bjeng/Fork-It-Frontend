let initialState = {
  id: {
    firstName: 'string',
    lastName: 'string',
    email: 'string',
    friends: ['userId', 'userId'],
    singleForks: ['singleEventId1', 'singleEventId2'],
    multiForks: ['multiEventId1', 'multiEventId2'],
    favorites: ['restIds'],
    os: 'iOS/Android'
  }
}

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
};

export default UserReducer;
