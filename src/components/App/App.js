import React from 'react';
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import Auth from "../Auth/Auth";
import { Route, Routes } from 'react-router-dom';
import movies from "../../utils/preparedFilms";
import './App.css';
import Register from "../Register/Register";

function App () {
  return (
    <div className="page">
      <main className="main">
        <Routes>
          <Route exact path='/signup' element={
            <Auth isRegister={true}>
              <Register/>
            </Auth>
          }/>
          <Route exact path='/signin' element={
            <Auth isRegister={false}/>
          }/>
          <Route exact path='/profile' element={ <Profile/> }/>
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
