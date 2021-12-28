import React from 'react';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import movies from "../../utils/preparedFilms";

const Movies = () => {
  return(
    <>
      <SearchForm />
      <MoviesCardList
          movies={movies}
      />
    </>
  );
}

export default Movies
