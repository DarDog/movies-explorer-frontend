import React, { useState, useEffect } from 'react';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useAuth } from "../../hook/useAuth";

const Movies = (props) => {
  const [movies, setMovies] = useState([]);
  const [moviesNotFound, setMoviesNotFound] = useState(false);
  const [errorMassage, setErrorMassage] = useState('');
  const [isBeFoundMovies, setIsBeFoundMovies] = useState(false);
  const { getSavedMovies } = useAuth();

  // Возвращает ранее найденные фильмы при ререндере
  useEffect(() => {
    getSavedMovies();
    if (localStorage.getItem('found-movies')) {
      setMovies(JSON.parse(localStorage.getItem('found-movies')));
      setIsBeFoundMovies(true)
    }
  }, []);


  return (
    <>
      <Header handleClick={ props.handlePopupOpen } isLoggedIn={ true }/>
      <SearchForm
        setMovies={ setMovies }
        setMoviesNotFound={ setMoviesNotFound }
        setErrorMassage={ setErrorMassage }
      />
      {
        ( movies.length > 0 || isBeFoundMovies ) &&
        <MoviesCardList
          movies={ movies }
          moviesNotFound={ moviesNotFound }
          errorMassage={ errorMassage }
        />
      }
      <Footer/>
    </>
  );
}

export default Movies
