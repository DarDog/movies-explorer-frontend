import React, { useState, useEffect } from 'react';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Movies = (props) => {
  const [movies, setMovies] = useState([]);
  const [moviesNotFound, setMoviesNotFound] = useState(false);
  const [errorMassage, setErrorMassage] = useState('');

  // Возвращает ранее найденные фильмы при ререндере
  useEffect(() => {
    setMovies(JSON.parse(localStorage.getItem('savedMovies')));
  }, []);

  return (
    <>
      <Header handleClick={props.handlePopupOpen} isLoggedIn={true}/>
      <SearchForm
        setIsFound={props.setIsFound}
        setMovies={setMovies}
        setMoviesNotFound={setMoviesNotFound}
        setErrorMassage={setErrorMassage}
      />
      {
        props.isFound &&
        <MoviesCardList
          movies={ movies }
          moviesNotFound={moviesNotFound}
          errorMassage={errorMassage}
        />
      }
      <Footer/>
    </>
  );
}

export default Movies
