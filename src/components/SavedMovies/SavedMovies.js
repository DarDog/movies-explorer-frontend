import React from 'react';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Placeholder/Preloader";
import Header from "../Header/Header";

const SavedMovies = ({ movies = [] }) => {
  return (
    <>
      <Header />
      <SearchForm/>
      {
        movies.length > 0
          ? <MoviesCardList movies={ movies } isSaves={ true }/>
          : <Preloader/>
      }
    </>
  );
}

export default SavedMovies;
