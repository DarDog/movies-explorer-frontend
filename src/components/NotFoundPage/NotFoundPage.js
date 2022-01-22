import React from 'react';
import { Link,  useNavigate } from "react-router-dom";
import './NotFoundPage.css'
import { GO_BACK } from "../../utils/constants";

const NotFoundPage = () => {
  const navigate = useNavigate();
  console.log('here')

  const handleClick = (evt) => {
    evt.preventDefault();

    navigate(GO_BACK)
  }

  return(
    <div className='not-found'>
      <div/>
      <div className='not-found__content'>
        <h1 className='not-found__title'>404</h1>
        <p className='not-found__paragraph'>Страница не найдена</p>
      </div>
      <Link to={'/'} onClick={handleClick} className='not-found__link'>Назад</Link>
    </div>
  );
}

export default NotFoundPage;
