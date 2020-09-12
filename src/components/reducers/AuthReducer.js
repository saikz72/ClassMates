export const initialState = {
  user: null,
  loading: true,
  error: '',
  token: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    //handles login action when user taps on login button in sign in screen
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
        loading: action.loading,
        token: action.token,
        error: action.error,
      };
    default:
      return state;
  }
};

export default authReducer;
