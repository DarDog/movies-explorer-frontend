import React from 'react';
import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";
import LoadMore from "../LoadMore/LoadMore";
import Preloader from "../Preloader/Preloader";

const MoviesCardList = ({ movies = [], ...props }) => {
  return (
    <>
      <section className='movies main__movies'>
        <ul className='movies__list'>
          {
            movies.length < 0
              ? <Preloader/>
              : movies.map(movie => {
                return (
                  <MoviesCard key={ movie.id } movie={ movie } isSaves={ props.isSaves }/>
                );
              })
          }
        </ul>
      </section>
      <LoadMore movies={ movies }/>
    </>
  );
}

export default MoviesCardList
