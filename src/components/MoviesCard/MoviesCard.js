import React from 'react';
import './MovieCard.css';

const MoviesCard = ({ movie, ...props }) => {
  return (
    <li className='movies__item'>
      <div className="movies__info">
        <h2 className="movies__title">{ movie.nameRU }</h2>
        <p className="movies__duration">{ Math.floor(movie.duration / 60) }ч { movie.duration % 60 }м</p>
        { props.isSaves
          ? <button type='button' className={ `movies__delete` }/>
          : <button type='button' className={ `movies__like ${ movie.isLiked && 'movies__like_active' }` }/>
        }
      </div>
      <img src={ `https://api.nomoreparties.co/${movie.image.url}` } alt={ movie.title } className="movies__poster"/>
    </li>
  );
}

export default MoviesCard;
