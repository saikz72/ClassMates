export const initialState = {
  user: '',
  isLoading: true,
  userToken: null,
};

const AuthReducer = (state, action) => {
  switch (action.type) {
    //handles login action when user taps on login button in sign in screen
    case 'LOGIN':
      return {
        ...state,
        user: action.user,
        userToken: action.token,
        isLoading: false,
      };
    //handles logout action
    case 'LOGOUT':
      return {
        ...state,
        user: action.user,
        userToken: action.token,
        isLoading: false,
      };
    //handles signup action
    case 'SIGNUP':
      return {
        ...state,
        user: action.user,
        userToken: action.token,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default AuthReducer;
