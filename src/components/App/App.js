import React, { useState, useEffect } from 'react';
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import Auth from "../Auth/Auth";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import Popup from "../Popup/Popup";
import { mainApi } from "../../utils/MainApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App () {
  const [isOpen, setIsOpen] = useState(false);
  const [isFound, setIsFound] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handlePopupOpen = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    mainApi.getCurrentUser()
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.error(err)
      })
  }, []);

  return (
    <div className="page">
      <main className="main">
        <Routes>

          <Route path='/' element={ <Main/> }/>

          <Route path='/signup' element={
            <Auth isRegister={ true }>
              <Register/>
            </Auth>
          }/>

          <Route path='/signin' element={
            <Auth isRegister={ false }>
              <Login/>
            </Auth>
          }/>

          <Route
            path='/profile'
            element={
              <ProtectedRoute>
                <Profile
                  exact path='/profile'
                  isLoggedIn={ isLoggedIn }
                  handlePopupOpen={ handlePopupOpen }
                />
              </ProtectedRoute>
            }
          />

          <Route
            exact path='/movies'
            element={
              <ProtectedRoute>
                <Movies
                  path='/movies'
                  isLoggedIn={ isLoggedIn }
                  handlePopupOpen={ handlePopupOpen }
                  isFound={ isFound }
                  setIsFound={ setIsFound }
                />
              </ProtectedRoute>
            }
          />

          <Route
            path='/saved-movies'
            element={
              <ProtectedRoute>
                <SavedMovies
                  exact path='/saved-movies'
                  isLoggedIn={ isLoggedIn }
                  handlePopupOpen={ handlePopupOpen }
                />
              </ProtectedRoute>
            }
          />

          <Route path='*' element={ <NotFoundPage/> }/>
        </Routes>
        <Popup onClose={ handlePopupOpen } isOpen={ isOpen }/>
      </main>
    </div>
  );
}

export default App;
