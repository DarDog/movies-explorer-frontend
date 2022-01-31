import React, { useState, useEffect } from 'react';
import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";
import LoadMore from "../LoadMore/LoadMore";
import Preloader from "../Preloader/Preloader";
import {MAX_MOBILE_SCREEN_WIDTH, RESIZE_TIMEOUT, MOVIES_ON_DESKTOP, MOVIES_ON_MOBILE} from '../../utils/constants'

const MoviesCardList = ({ movies, ...props }) => {
  const [lastMovieIndex, setLastMoviesIndex] = useState(window.screen.width <= MAX_MOBILE_SCREEN_WIDTH ? MOVIES_ON_MOBILE : MOVIES_ON_DESKTOP);
  const [numberPerClick, setNumberPerClick] = useState(MOVIES_ON_DESKTOP);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.addEventListener('resize',  resizeThrottler);

    return () => {
      window.removeEventListener('resize', resizeThrottler);
    }

  }, []);

  let resizeTimeout;

  const resizeThrottler = () => {
    if (!resizeTimeout) {
      resizeTimeout = setTimeout(() => {
        resizeTimeout = null;
        handleWindowResize();
      },
        RESIZE_TIMEOUT
      );
    }
  };

  const handleWindowResize = () => {
    if (window.screen.width <= MAX_MOBILE_SCREEN_WIDTH) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  useEffect(() => {
    if (isMobile) {
      setNumberPerClick(MOVIES_ON_MOBILE);
    } else {
      setNumberPerClick(MOVIES_ON_DESKTOP);
    }
  }, [isMobile])

  const currentMovies = movies.slice(0, lastMovieIndex);

  return (
    <>
      <section className='movies main__movies'>
        <ul className='movies__list'>
          {
            movies.length < 1
              ? !props.moviesNotFound ? <Preloader/> :
              <li className='movies__not-found'>{ props.errorMassage || 'Не чего не найдено' }</li>
              : currentMovies.map(movie => (
                <MoviesCard key={ movie.id || movie._id } movie={ movie } isSaves={ props.isSaves } setSavedMovies={props.setSavedMovies}/>
              ))
          }
        </ul>
      </section>
      <LoadMore
        movies={ movies }
        currentMovies={ currentMovies }
        lastMovieIndex={ lastMovieIndex }
        setLastMoviesIndex={ setLastMoviesIndex }
        number={ numberPerClick }
      />
    </>
  );
}

export default MoviesCardList
