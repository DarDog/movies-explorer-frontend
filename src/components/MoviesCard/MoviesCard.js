import React, { useState, useEffect } from 'react';
import './MovieCard.css';
import { mainApi } from "../../utils/MainApi";
import { useAuth } from "../../hooks/useAuth";

const MoviesCard = ({ movie, ...props }) => {
  const [isSaved, setIsSaved] = useState(false);
  const savedMovies = JSON.parse(localStorage.getItem('saved-movies'));
  const { getSavedMovies } = useAuth();

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
          getSavedMovies();
        })
        .catch(err => console.error(err))
    } else {
      handleRemove();
    }
  }

  const handleRemove = () => {
    mainApi.removeSavedMovie(movie.id || movie.movieId)
      .then(() => {
        setIsSaved(false);
        getSavedMovies();

        //Только для роута '../saved-movies'
        if (props.isSaves) {
          props.setSavedMovies((state) => state.filter((m) => m._id === movie._id ? m.remove : m))
        }
      })
      .catch(err => console.error(err))
  }

  useEffect(() => {
    const match = savedMovies.find(savedMovie => savedMovie.movieId === movie.id)

    if (match) {
      setIsSaved(true);
    }
  }, [])

  return (
    <li className='movies__item'>
      <a className='movies__link' href={ movie.trailer || movie.trailerLink } target='_blank'>
        <div className="movies__info">
          <h2 className="movies__title">{ movie.nameRU }</h2>
          <p className="movies__duration">{ Math.floor(movie.duration / 60) }ч { movie.duration % 60 }м</p>
          { props.isSaves
            ? <button type='button' className={ `movies__delete` } onClick={ handleRemove }/>
            : <button type='button' className={ `movies__like ${ isSaved && 'movies__like_active' }` }
                      onClick={ handleLike }/>
          }
        </div>
        <img src={ movie.image.url ? `https://api.nomoreparties.co/${ movie.image.url }` : movie.image }
             alt={ movie.title } className="movies__poster"/>
      </a>
    </li>
  );
}

export default MoviesCard;
