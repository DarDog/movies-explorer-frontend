import React, { useState, useEffect } from 'react';
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import Auth from "../Auth/Auth";
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import Popup from "../Popup/Popup";
import ProtectedRoute from "../../Hoc/ProtectedRoute/ProtectedRoute";
import { useAuth } from "../../hook/useAuth";

function App () {
  const [isOpen, setIsOpen] = useState(false);
  const [isFound, setIsFound] = useState(false);
  const {getCurrentUserInfo} = useAuth()
  const navigate = useNavigate();
  const location = useLocation();

  const handlePopupOpen = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const isAuth = localStorage.getItem('isAuth') === 'true';

    if (isAuth) {
      const fromPage = location.state?.from?.pathname || '/movies';
      getCurrentUserInfo(() => navigate(fromPage, {replace: true}));
    }
  },[])

  return (
    <div className="page">
      <main className="main">
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
        <Popup onClose={ handlePopupOpen } isOpen={ isOpen }/>
      </main>
    </div>
  );
}

export default App;
