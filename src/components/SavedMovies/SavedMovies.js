import React from 'react';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Placeholder/Preloader";

const SavedMovies = ({ movies = [] }) => {
  return (
    <>
      <SearchForm/>
      {
        movies.length > 0
          ? <MoviesCardList movies={ movies }/>
          : <Preloader/>
      }
    </>
  );
}

export default SavedMovies;
