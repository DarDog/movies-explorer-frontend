import React from 'react';
import './LoadMore.css'

const LoadMore = ({ movies }) => {
  return (
    <section className='load-more'>
      { movies.length > 6
        ? <button type='button' className='load-more__button'>Ещё</button>
        : ''
      }
    </section>
  );
}

export default LoadMore;
