import React, { createContext, useState } from 'react';
import { mainApi } from "../utils/MainApi";

export const CurrentUserContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signUp = (userData, callBack) => {
    mainApi.signUp(userData)
      .then(() => {
        signIn(userData, callBack)
      })
      .catch(err => console.error(err))
  }

  const signIn = (userData, callBack) => {
    mainApi.signIn(userData)
      .then(() => {
        localStorage.setItem('isAuth', 'true');
        getCurrentUserInfo(callBack);
      })
      .catch(err => console.error(err))
  }

  const signOut = (callBack) => {
    setUser(null);
    mainApi.signOut()
      .then(() => {
        localStorage.removeItem('isAuth')
        callBack();
      })
      .catch(err => console.error(err))
  }

  const getCurrentUserInfo = (callBack) => {
    mainApi.getCurrentUser()
      .then(user => {
        setUser(user);
        callBack();
      })
      .catch(err => console.error(err))
  }

  const value = { user, signIn, signUp, signOut, getCurrentUserInfo };

  return (
    <CurrentUserContext.Provider value={ value }>
      { children }
    </CurrentUserContext.Provider> )
}
