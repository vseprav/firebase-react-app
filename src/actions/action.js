export function userLogin(isLogin) {
  return {
    type: 'USER_LOGIN',
    payload: {
      isLogin:isLogin
    }
  };
}

export function userLogout(isLogin) {
  return {
    type: 'USER_LOGOUT',
    payload: {
      isLogin:isLogin
    }
  };
}

export default {userLogin, userLogout};
