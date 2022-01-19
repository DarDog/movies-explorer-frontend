import React from 'react';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const SavedMovies = ({ movies = [], ...props }) => {
  return (
    <>
      <Header handleClick={props.handlePopupOpen} isLoggedIn={true}/>
      <SearchForm/>
      {
        movies.length > 0 && <MoviesCardList movies={ movies } />
      }
      <Footer/>
    </>
  );
}

export default SavedMovies;
