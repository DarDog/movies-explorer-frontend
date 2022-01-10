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
import Login from "../Login/Login";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

function App () {
  return (
    <div className="page">
      <main className="main">
        <Routes>
          <Route exact path='/signup' element={
            <Auth isRegister={ true }>
              <Register/>
            </Auth>
          }/>
          <Route exact path='/signin' element={
            <Auth isRegister={ false }>
              <Login/>
            </Auth>
          }/>
          <Route exact path='/profile' element={ <Profile/> }/>
          <Route exact path='/movies' element={ <Movies movies={ movies }/> }/>
          <Route exact path='/saved-movies'
                 element={ <SavedMovies movies={ movies.filter(movie => movie.isLiked === true) }/> }/>
          <Route exact path='/' element={ <Main/> }/>
          <Route path='*' element={ <NotFoundPage/> }/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
