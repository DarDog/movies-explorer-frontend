import React, { useState, useEffect } from 'react';
import './SearchForm.css'
import Switch from "../Switch/Switch";
import { SHORT_MOVIE_DURATION } from "../../utils/constants";

const SearchForm = (props) => {
  const [keyWord, setKeyWord] = useState('');
  const [isShorts, setIsShorts] = useState(props.isSaves
    ? localStorage.getItem('isShortInSaves') === 'true'
    : localStorage.getItem('isShort') === 'true');

  const getMovies = (isSaves, isShort) => {
    const movies = JSON.parse(localStorage.getItem(isSaves ? 'saved-movies' : 'movies'))
    const foundMovies = movies.filter(movie => movie.nameRU.toLowerCase().includes(keyWord.toLowerCase()));
    localStorage.setItem('found-movies', JSON.stringify(foundMovies));
    return movies.filter( movie => filterMovies(movie, isShort));
  }

  const getFoundMovies = (isShort) => {
    const movies = JSON.parse(localStorage.getItem('found-movies'))
    return movies.filter( movie => filterMovies(movie, isShort));
  }

  const filterMovies = (movie, isShort) => {
    return movie.nameRU.toLowerCase().includes(keyWord.toLowerCase()) && (!isShort || movie.duration <= SHORT_MOVIE_DURATION)
  }

  const setMovies = (isSaves, isShort) => {
    if (isSaves) {
      props.setSavedMovies([]);
      const foundMovies = getMovies(props.isSaves, isShort);
      if (foundMovies.length < 1) {
        props.setMoviesNotFound(true);
      }
      props.setSavedMovies(foundMovies);
    } else {
      props.setMovies([]);
      const foundMovies = getMovies(props.isSaves, isShort);
      if (foundMovies.length < 1) {
        props.setMoviesNotFound(true);
      }
      props.setMovies(foundMovies);
    }
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.setMoviesNotFound(false);
    setMovies(props.isSaves, isShorts);
  }

  const onSwitchChange = (value) => {
    setIsShorts(value)
    if (props.isSaves) {
      localStorage.setItem('isShortInSaves', value);
      setMovies(props.isSaves, !isShorts);
    } else {
      localStorage.setItem('isShort', value);
      props.setMovies(JSON.parse(localStorage.getItem('found-movies')).filter(movie => filterMovies(movie, !isShorts)))
    }
  }

  useEffect(() => {
    if (props.isSaves) {
      props.setSavedMovies(getMovies(props.isSaves, isShorts))
    } else {
      props.setMovies(getFoundMovies(isShorts))
    }
  }, [])

  return (
    <section className="search main__search">
      <form className="search__form" name='search' onSubmit={ handleSubmit }>
        <input type="text" className="search__input" placeholder="Фильм" required value={ keyWord }
               onChange={ evt => setKeyWord(evt.target.value) }/>
        <button type="submit" className="search__submit">Найти</button>
      </form>
      <Switch isShorts={isShorts} setIsShorts={onSwitchChange} />
      <div className='search__border'/>
    </section>
  );
}

export default SearchForm;
