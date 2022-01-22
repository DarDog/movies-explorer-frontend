import React, { useState, useEffect } from 'react';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useAuth } from "../../hooks/useAuth";

const SavedMovies = (props) => {
  const [savedMovies, setSavedMovies] = useState([]);
  const [moviesNotFound, setMoviesNotFound] = useState(false);
  const [isBeFoundMovies, setIsBeFoundMovies] = useState(false);
  const { getSavedMovies } = useAuth();

  useEffect(() => {
    getSavedMovies()
    setSavedMovies(JSON.parse(localStorage.getItem('saved-movies')))
    setIsBeFoundMovies(true)
  }, [])

  return (
    <>
      <Header handleClick={ props.handlePopupOpen } isLoggedIn={ true }/>
      <SearchForm
        setSavedMovies={ setSavedMovies }
        setMoviesNotFound={ setMoviesNotFound }
        isSaves={ true }
      />
      {
        ( savedMovies.length > 0 || isBeFoundMovies )
        && <MoviesCardList
          setSavedMovies={ setSavedMovies }
          isSaves={ true }
          movies={ savedMovies }
          moviesNotFound={ moviesNotFound }
        />
      }
      <Footer/>
    </>
  );
}

export default SavedMovies;
