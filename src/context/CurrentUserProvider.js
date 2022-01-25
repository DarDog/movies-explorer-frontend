import React, { createContext, useEffect, useState } from 'react';
import { mainApi } from "../utils/MainApi";
import { useLocation, useNavigate } from "react-router-dom";
import { moviesApi } from "../utils/MoviesApi";

export const CurrentUserContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const isAuth = localStorage.getItem('isAuth') === 'true';

    if (isAuth) {
      const fromPage = location.pathname || '/movies';
      getUserInfo(() => navigate(fromPage));
      moviesApi.getMovies()
        .then(movies => {
          localStorage.setItem('movies', JSON.stringify(movies));
        })
        .catch(err => {
          console.error(err);
        })
      mainApi.getSavedMovies()
        .then(movies => {
          localStorage.setItem('saved-movies', JSON.stringify(movies));
        })
        .catch(err => {
          console.error(err);
        })
    }
  }, []);

  const updateUser = (userData) => {
    setUser(userData);
  }

  const getUserInfo = (callBack) => {
    mainApi.getCurrentUser()
      .then(user => {
        updateUser(user);
        callBack();
      })
      .catch(err => console.error(err))
  }

  const signIn = (callBack) => {
    mainApi.getCurrentUser()
      .then(user => {
        updateUser(user);
        localStorage.setItem('isAuth', 'true');
        localStorage.setItem('isShort', 'false');
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
        localStorage.removeItem('isAuth');
        localStorage.removeItem('saved-movies');
        localStorage.removeItem('found-movies');
        localStorage.removeItem('isShort');
        localStorage.removeItem('isShortInSaves');
        localStorage.removeItem('movies');
        callBack();
      })
      .catch(err => console.error(err))
  }

  const value = { user, signIn, signOut, getUserInfo, updateUser };

  return (
    <CurrentUserContext.Provider value={ value }>
      { children }
    </CurrentUserContext.Provider> )
}
