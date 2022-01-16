import React from 'react';
import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";
import LoadMore from "../LoadMore/LoadMore";

const MoviesCardList = ({ movies = [], ...props }) => {
  return (
    <>
      <section className='movies main__movies'>
        <ul className='movies__list'>
          {
            movies.map(movie => {
              return (
                <MoviesCard key={ movie._id } movie={ movie } isSaves={ props.isSaves }/>
              );
            })
          }
        </ul>
      </section>
      <LoadMore movies={movies} />
    </>
  );
}

export default MoviesCardList
