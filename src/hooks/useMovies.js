import React from 'react';
import { mainApi } from "../utils/MainApi";

export function useMovies () {
  const updateSavedMovies = () => {
    mainApi.getSavedMovies()
      .then(movies => {
        localStorage.setItem('saved-movies', JSON.stringify(movies))
      })
      .catch(err => {
        console.error(err);
      })
  }

  return { updateSavedMovies }
}
