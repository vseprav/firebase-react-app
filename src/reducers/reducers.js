const fireBaseUser = (state = {
                       email: '',
                       uid:'',
                       isLogin:false
                     }, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      state = {
        ...state,
        email: action.payload.email,
        uid:action.payload.uid,
        isLogin: action.payload.isLogin
      };
      break;
    case 'USER_LOGOUT':
      state = {
        ...state,
        isLogin: action.payload
      };
      break;
  }
  return state;
};

export default fireBaseUser;
