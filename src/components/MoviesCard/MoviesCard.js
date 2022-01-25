import React, { useState, useEffect } from 'react';
import './MovieCard.css';
import { mainApi } from "../../utils/MainApi";

const MoviesCard = ({ movie, ...props }) => {
  const [isSaved, setIsSaved] = useState(false);
  const savedMovies = JSON.parse(localStorage.getItem('saved-movies'));

  const addSavedMovie = (movie) => {
    const savedMovies = JSON.parse(localStorage.getItem('saved-movies'));
    savedMovies.push(movie);
    localStorage.setItem('saved-movies', JSON.stringify(savedMovies));
  }

  const removeSavedMovie = (movie) => {
    const savedMovies = JSON.parse(localStorage.getItem('saved-movies'));
    const newSavedMovies = savedMovies.filter((m) => (m.id || m.movieId) === (movie.id || movie.movieId) ? m.remove : m)
    localStorage.setItem('saved-movies', JSON.stringify(newSavedMovies));
  }

  const handleLike = () => {
    if (!isSaved) {
      mainApi.setSavedMovie({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co${ movie.image.url }`,
        trailer: movie.trailerLink,
        thumbnail: `https://api.nomoreparties.co${ movie.image.formats.thumbnail.url }`,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      })
        .then(() => {
          setIsSaved(true);
          addSavedMovie(movie);
        })
        .catch(err => console.error(err))
    } else {
      setIsSaved(false);
      handleRemove();
    }
  }

  const handleRemove = () => {
    mainApi.removeSavedMovie(movie.id || movie.movieId)
      .then(() => {
        props.setSavedMovies((state) => state.filter((m) => (m.id || m.movieId) === (movie.id || movie.movieId) ? m.remove : m));
        removeSavedMovie(movie)
      })
      .catch(err => console.error(err))
  }

  useEffect(() => {
    const match = savedMovies.find(savedMovie => (savedMovie.movieId || savedMovie.id) === (movie.id || movie.movieId))

    if (match) {
      setIsSaved(true);
    }
  }, [])

  return (
    <li className='movies__item'>
        <div className="movies__info">
          <h2 className="movies__title">{ movie.nameRU }</h2>
          <p className="movies__duration">{ Math.floor(movie.duration / 60) }ч { movie.duration % 60 }м</p>
          { props.isSaves
            ? <button type='button' className={ `movies__delete` } onClick={ handleRemove }/>
            : <button type='button' className={ `movies__like ${ isSaved && 'movies__like_active' }` }
                      onClick={ handleLike }/>
          }
        </div>
      <a className='movies__link' href={ movie.trailer || movie.trailerLink } target='_blank'>
        <img src={ movie.image.url ? `https://api.nomoreparties.co/${ movie.image.url }` : movie.image }
             alt={ movie.title } className="movies__poster"/>
      </a>
    </li>
  );
}

export default MoviesCard;
