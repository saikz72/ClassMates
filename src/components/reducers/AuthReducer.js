export const initialState = {
  user: '',
  isLoading: true,
  userToken: null,
};

const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.user,
        userToken: action.token,
        isLoading: false,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: action.user,
        userToken: action.token,
        isLoading: false,
      };
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
