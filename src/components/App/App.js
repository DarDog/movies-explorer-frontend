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
import { mainApi } from "../../utils/MainApi";

function App () {
  const [isOpen, setIsOpen] = useState(false);
  const [movies, setMovies] = useState([]);
  const [foundMovies, setFoundMovies] = useState([])

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
  })

  useEffect(() => {
    moviesApi.getMovies()
      .then(movies => {
        console.log(movies)
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
          <Route exact path='/' element={ <Main/> }/>
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
          <Route
            exact path='/movies'
            element={
              <Movies
                handlePopupOpen={handlePopupOpen}
                movies={foundMovies}
                setFoundMovies={setFoundMovies}
                moviesRegistry={movies}
              />
            }/>
          <Route exact path='/saved-movies'
                 element={ <SavedMovies handlePopupOpen={handlePopupOpen} /> }/>
          <Route path='*' element={ <NotFoundPage/> }/>
        </Routes>
        <Popup onClose={handlePopupOpen} isOpen={isOpen}/>
      </main>
    </div>
  );
}

export default App;
