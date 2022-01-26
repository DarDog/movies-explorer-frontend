import React, { useState, useEffect } from 'react';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useAuth } from "../../hooks/useAuth";

const Movies = (props) => {
  const [movies, setMovies] = useState([]);
  const [moviesNotFound, setMoviesNotFound] = useState(false);
  const [errorMassage, setErrorMassage] = useState('');


  return (
    <>
      <Header handleClick={ props.handlePopupOpen } isLoggedIn={ true }/>
      <SearchForm
        setMovies={ setMovies }
        setMoviesNotFound={ setMoviesNotFound }
        setErrorMassage={ setErrorMassage }
      />
      {
        ( movies.length > 0 || moviesNotFound ) &&
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
