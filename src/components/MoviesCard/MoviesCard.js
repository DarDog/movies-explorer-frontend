import React from 'react';
import './MovieCard.css'

const MoviesCard = ({ movie }) => {
  return(
    <li className='movies__item'>
      <div className="movies__info">
        <h2 className="movies__title">{movie.title}</h2>
        <p className="movies__duration">{Math.floor(movie.duration / 60)}ч {movie.duration % 60}м</p>
        <button className={ `movies__like ${movie.isLiked && 'movies__like_active'}` }/>
      </div>
      <img src={movie.image} alt="Заглушка" className="movies__poster"/>
    </li>
  );
}

export default MoviesCard;
