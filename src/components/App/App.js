import React from 'react';
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Main from "../Main/Main";
import { Route, Routes } from 'react-router-dom';
import movies from "../../utils/preparedFilms";
import './App.css';

function App () {
  return (
    <div className="page">
      <main className="main">
        <Routes>
          <Route exact path='/movies' element={ <Movies movies={ movies }/> }/>
          <Route exact path='/saved-movies'
                 element={ <SavedMovies movies={ movies.filter(movie => movie.isLiked === true) }/> }/>
          <Route exact path='/' element={ <Main/> }/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
