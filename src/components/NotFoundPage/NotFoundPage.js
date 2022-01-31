import React from 'react';
import { useNavigate } from "react-router-dom";
import './NotFoundPage.css'
import { GO_BACK } from "../../utils/constants";
import { useAuth } from "../../hooks/useAuth";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleClick = (evt) => {
    evt.preventDefault();
    navigate( user ? -2 : GO_BACK);
  }

  return(
    <div className='not-found'>
      <div/>
      <div className='not-found__content'>
        <h1 className='not-found__title'>404</h1>
        <p className='not-found__paragraph'>Страница не найдена</p>
      </div>
      <button type='button' onClick={handleClick} className='not-found__link'>Назад</button>
    </div>
  );
}

export default NotFoundPage;
