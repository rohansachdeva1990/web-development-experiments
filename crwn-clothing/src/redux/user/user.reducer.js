const INITIAL_STATE = {
  currentUser: null,
};

const UserReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...currentState,
        currentUser: action.payload, 
      };
    default:
      return currentState;
  }
};

export default UserReducer;
