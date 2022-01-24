import React, { createContext, useState } from 'react';
import { mainApi } from "../utils/MainApi";

export const CurrentUserContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const updateUser = (userData) => {
    setUser(userData);
  }

  const signIn = (callBack) => {
    mainApi.getCurrentUser()
      .then(user => {
        updateUser(user);
        localStorage.setItem('isAuth', 'true')
        callBack();
      })
      .catch(err => {
        console.error(err)
      })
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

  const value = { user, signIn, signOut, getUserInfo, getSavedMovies, setUserInfo, updateUser };

  return (
    <CurrentUserContext.Provider value={ value }>
      { children }
    </CurrentUserContext.Provider> )
}
