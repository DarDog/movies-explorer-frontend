import React from 'react';
import './App.css';
import Header from "../Header/Header";
import Movies from "../Movies/Movies";
import movies from "../../utils/preparedFilms";
import SavedMovies from "../SavedMovies/SavedMovies";
import { Route, Routes } from 'react-router-dom'

function App () {
  return (
    <div className="page">
      <Header/>
      <main className="main">
        <Routes>
          <Route exact path='/movies' element={ <Movies movies={ movies }/> }/>
          <Route exact path='/saved-movies'
                 element={ <SavedMovies movies={ movies.filter(movie => movie.isLiked === true) }/> }/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
