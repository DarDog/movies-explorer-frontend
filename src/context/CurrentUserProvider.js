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
        getUserInfo(callBack);
      })
      .catch(err => console.error(err))
  }

  const signOut = (callBack) => {
    setUser(null);
    mainApi.signOut()
      .then(() => {
        localStorage.removeItem('isAuth')
        localStorage.removeItem('saved-movies')
        localStorage.removeItem('found-movies')
        callBack();
      })
      .catch(err => console.error(err))
  }

  const getUserInfo = (callBack) => {
    mainApi.getCurrentUser()
      .then(user => {
        setUser(user);
        callBack();
      })
      .catch(err => console.error(err))
  }

  const getSavedMovies = () => {
    mainApi.getSavedMovies()
      .then((movies) => {
        localStorage.setItem('saved-movies', JSON.stringify(movies));
      })
      .catch(err => {
        console.error(err);
      })
  }

  const setUserInfo = (userInfo) => {
    return mainApi.updateCurrentUser(userInfo)
      .then(newUserInfo => {
        setUser(newUserInfo);
      })
      .catch(err => {
        console.error(err)
      })
  }

  const value = { user, signIn, signUp, signOut, getUserInfo, getSavedMovies, setUserInfo };

  return (
    <CurrentUserContext.Provider value={ value }>
      { children }
    </CurrentUserContext.Provider> )
}
