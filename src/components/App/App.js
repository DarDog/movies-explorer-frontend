import React from 'react';
import './App.css';
import Header from "../Header/Header";
import Movies from "../Movies/Movies";
import movies from "../../utils/preparedFilms";

function App () {
  return (
    <div className="page">
      <Header/>
      <main className="main">
        <Movies
          movies={ movies }
        />
      </main>
    </div>
  );
}

export default App;
