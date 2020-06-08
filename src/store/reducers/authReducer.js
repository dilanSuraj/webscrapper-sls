const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      console.log('LOGIN ERROR ');
      return {
        ...state,
        authError: 'Login Failed'
      };
    case 'LOGIN_SUCCESS':
      console.log('LOGIN SUCCESS ');
      return {
        ...state,
        authError: null
      };
    case 'SIGNOUT_SUCCESS':
      console.log('SIGN OUT SUCCESS ');
      return {
        ...state,
        authError: null
      };
    case 'SIGNOUT_ERROR':
      console.log('SIGN OUT ERROR ');
      return {
        ...state,
        authError: 'Sign out failed'
      };
    case 'SIGNUP_SUCCESS':
      console.log('SIGN UP SUCCESS ');
      return {
        ...state,
        authError: null
      };
    case 'SIGNUP_ERROR':
      console.log('SIGN UP ERROR ', action.err.message);
      return {
        ...state,
        authError: action.err.message
      };
    default:
      return state;
  }
}

export default authReducer;