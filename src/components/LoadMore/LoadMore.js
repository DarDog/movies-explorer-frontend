import React from 'react';
import './LoadMore.css'

const LoadMore = ({ movies, ...props }) => {
  const handleClick = () => {
    props.setLastMoviesIndex(props.lastMovieIndex + props.number);
  }

  return (
    <section className='load-more'>
      { movies.length > 6 && props.currentMovies.length < movies.length
        ? <button type='button' className='load-more__button' onClick={ handleClick }>Ещё</button>
        : ''
      }
    </section>
  );
}

export default LoadMore;
