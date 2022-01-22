import React, {useState, useEffect} from 'react';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useAuth } from "../../hooks/useAuth";

const SavedMovies = (props) => {
  const [savedMovies, setSavedMovies] = useState([]);
  const { getSavedMovies } = useAuth();

  useEffect(() => {
    getSavedMovies()
    setSavedMovies(JSON.parse(localStorage.getItem('saved-movies')))
  }, [])

  return (
    <>
      <Header handleClick={props.handlePopupOpen} isLoggedIn={true}/>
      <SearchForm/>
      {
        savedMovies.length > 0 && <MoviesCardList setSavedMovies={setSavedMovies} isSaves={true} movies={ savedMovies } />
      }
      <Footer/>
    </>
  );
}

export default SavedMovies;
