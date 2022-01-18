import React, {useState, useEffect} from 'react';
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
import { moviesApi } from "../../utils/MoviesApi";

function App () {
  const [isOpen, setIsOpen] = useState(false);
  const [movies, setMovies] = useState([]);

  const handlePopupOpen = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    moviesApi.getMovies()
      .then(movies => {
        setMovies(movies)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

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
          <Route exact path='/profile' element={ <Profile handlePopupOpen={handlePopupOpen} /> }/>
          <Route exact path='/movies' element={ <Movies handlePopupOpen={handlePopupOpen} movies={ movies }/> }/>
          <Route exact path='/saved-movies'
                 element={ <SavedMovies handlePopupOpen={handlePopupOpen} movies={ movies.filter(movie => movie.isLiked === true) }/> }/>
          <Route exact path='/' element={ <Main/> }/>
          <Route path='*' element={ <NotFoundPage/> }/>
        </Routes>
        <Popup onClose={handlePopupOpen} isOpen={isOpen}/>
      </main>
    </div>
  );
}

export default App;
