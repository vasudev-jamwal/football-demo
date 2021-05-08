const initialState = { loggedIn: false };

const authReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case "LOGOUT":
      newState = {
        ...initialState,
      };
      break;
    case "LOGIN":
      newState = {
        loggedIn: true,
        token: action.payload,
      };
      break;
  }
  return newState;
};

export default authReducer;
