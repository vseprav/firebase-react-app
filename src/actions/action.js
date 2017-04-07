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

export function addDictionary(dictionary) {
  return {
    type: 'ADD_DICTIONARY',
    payload: {
      dictionary:dictionary
    }
  };
}

export default {userLogin, userLogout, addDictionary};
