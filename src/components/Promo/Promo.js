import React from 'react';
import './Promo.css'
import Header from "../Header/Header";

const Promo = () => {
  return(
    <section className='promo main__promo'>
      <Header isLogged={false}/>
      <div className="promo__background-logo" />
      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      <ul className="promo__list">
        <li className="promo__item"><a href="" className='promo__link'>О проекте</a></li>
        <li className="promo__item"><a href="" className='promo__link'>Технологии</a></li>
        <li className="promo__item"><a href="" className='promo__link'>Студент</a></li>
      </ul>
    </section>
  );
}

export default Promo;
