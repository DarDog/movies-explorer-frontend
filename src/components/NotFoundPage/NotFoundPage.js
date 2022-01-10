import React from 'react';
import { Link } from "react-router-dom";
import './NotFoundPage.css'

const NotFoundPage = () => {
  return(
    <div className='not-found'>
      <div/>
      <div className='not-found__content'>
        <h1 className='not-found__title'>404</h1>
        <p className='not-found__paragraph'>Страница не найдена</p>
      </div>
      <Link to='/' className='not-found__link'>Назад</Link>
    </div>
  );
}

export default NotFoundPage;
