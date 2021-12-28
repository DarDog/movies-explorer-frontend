import React from 'react';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Placeholder/Preloader";
import Header from "../Header/Header";

const Movies = ({ movies = [] }) => {
  return (
    <>
      <Header />
      <SearchForm/>
      {
        movies.length > 0
          ? <MoviesCardList movies={ movies } />
          : <Preloader />
      }
    </>
  );
}

export default Movies
