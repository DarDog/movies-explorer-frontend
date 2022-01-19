import React, { useEffect, useState } from 'react';
import './SearchForm.css'
import Switch from "../Switch/Switch";
import { moviesApi } from "../../utils/MoviesApi";

const SearchForm = (props) => {
  const [keyWord, setKeyWord] = useState('');
  const [isShorts, setIsShorts] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.setIsFound(true);
    props.setMovies([]);
    props.setMoviesNotFound(false);
    moviesApi.getMovies()
      .then(movies => {
        const foundMovies = movies.filter(filterMovies);
        if (foundMovies.length < 1) {
          props.setMoviesNotFound(true);
        }
        localStorage.setItem('savedMovies', JSON.stringify(foundMovies));
        props.setMovies(foundMovies);
      })
      .catch(() => {
        props.setMoviesNotFound(true);
        props.setErrorMassage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
      });
  }

  const filterMovies = (movie) => {
    return movie.nameRU.toLowerCase().includes(keyWord.toLowerCase())
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
