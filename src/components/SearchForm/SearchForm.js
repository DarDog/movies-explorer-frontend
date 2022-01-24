import React, { useEffect, useState } from 'react';
import './SearchForm.css'
import Switch from "../Switch/Switch";
import { moviesApi } from "../../utils/MoviesApi";
import { SHORT_MOVIE_DURATION } from "../../utils/constants";

const SearchForm = (props) => {
  const [keyWord, setKeyWord] = useState('');
  const [isShorts, setIsShorts] = useState(localStorage.getItem('isShort') === 'true');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!props.isSaves) {
    props.setMovies([]);
    props.setMoviesNotFound(false);
    moviesApi.getMovies()
      .then(movies => {
        const foundMovies = movies.filter(filterMovies);
        if (foundMovies.length < 1) {
          props.setMoviesNotFound(true);
        }
        localStorage.setItem('found-movies', JSON.stringify(foundMovies));
        props.setMovies(foundMovies);
      })
      .catch(() => {
        props.setMoviesNotFound(true);
        props.setErrorMassage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
      });
    } else {
      props.setSavedMovies([]);
      props.setMoviesNotFound(false);
      const movies = JSON.parse(localStorage.getItem('saved-movies'))
      const foundMovies = movies.filter(filterMovies);
      if (foundMovies.length < 1) {
        props.setMoviesNotFound(true);
      }
      props.setSavedMovies(foundMovies);
    }
  }

  const filterMovies = (movie) => {
    return movie.nameRU.toLowerCase().includes(keyWord.toLowerCase()) && (!isShorts || movie.duration <= SHORT_MOVIE_DURATION)
  }

  return (
    <section className="search main__search">
      <form className="search__form" name='search' onSubmit={ handleSubmit }>
        <input type="text" className="search__input" placeholder="Фильм" required value={ keyWord }
               onChange={ evt => setKeyWord(evt.target.value) }/>
        <button type="submit" className="search__submit">Найти</button>
      </form>
      <Switch isShorts={isShorts} setIsShorts={setIsShorts} />
      <div className='search__border'/>
    </section>
  );
}

export default SearchForm;
