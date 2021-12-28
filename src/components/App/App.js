import React from 'react';
import './App.css';
import Header from "../Header/Header";
import Movies from "../Movies/Movies";
import movies from "../../utils/preparedFilms";
import SavedMovies from "../SavedMovies/SavedMovies";

function App () {
  return (
    <div className="page">
      <Header/>
      <main className="main">
        <Movies
          movies={ movies }
        />
        <SavedMovies movies={ movies.filter(movie => movie.isLiked === true) }/>
      </main>
    </div>
  );
}

export default App;
