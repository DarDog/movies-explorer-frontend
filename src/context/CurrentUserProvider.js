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
        localStorage.setItem('isAuth', 'true')
        mainApi.getCurrentUser()
          .then(user => {
            console.log(user)
            setUser(user)
          })
          .catch(err => console.error(err))
      })
      .catch(err => console.error(err))
    callBack();
  }

  const signOut = (callBack) => {
    setUser(null);
    mainApi.signOut()
      .then(() => {
        localStorage.removeItem('isAuth')
      })
      .catch(err => console.error(err))

    callBack();
  }

  const value = { user, signIn, signUp, signOut };

  return <CurrentUserContext.Provider value={ value }>
    { children }
  </CurrentUserContext.Provider>
}
