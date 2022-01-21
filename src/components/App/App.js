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
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserProvider } from "../../context/CurrentUserProvider";

function App () {
  const [isOpen, setIsOpen] = useState(false);
  const [isFound, setIsFound] = useState(false);

  const handlePopupOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="page">
      <main className="main">
        <CurrentUserProvider>
          <Routes>

            <Route path='/' element={ <Main/> }/>

            <Route path='/signup' element={
              <Auth isRegister={ true }>
                <Register />
              </Auth>
            }/>

            <Route path='/signin' element={
              <Auth isRegister={ false }>
                <Login />
              </Auth>
            }/>

            <Route
              path='/profile'
              element={
                <ProtectedRoute>
                  <Profile
                    exact path='/profile'
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
                    handlePopupOpen={ handlePopupOpen }
                  />
                </ProtectedRoute>
              }
            />

            <Route path='*' element={ <NotFoundPage/> }/>
          </Routes>
        </CurrentUserProvider>
        <Popup onClose={ handlePopupOpen } isOpen={ isOpen }/>
      </main>
    </div>
  );
}

export default App;
