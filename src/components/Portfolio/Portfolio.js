import React from 'react';
import Ul from "../Ul/Ul";
import './Portfolio.css'

const Portfolio = () => {
  return(
    <section className='portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <Ul isColumn={true} anotherClass='portfolio__list'>
        <li className='portfolio__item'>
          <a className='portfolio__link' target='_blank' href="https://dardog.github.io/how-to-learn/">Статичный сайт</a>
          <div className='link__arrow'/>
        </li>
        <li className='portfolio__item'>
          <a className='portfolio__link' target='_blank' href="https://dardog.github.io/russian-travel/">Адаптивный сайт</a>
          <div className='link__arrow'/>
        </li>
        <li className='portfolio__item'>
          <a className='portfolio__link' target='_blank' href="http://mesto.subb.nomoredomains.rocks/sign-in">Одностраничное приложение</a>
          <div className='link__arrow'/>
        </li>
      </Ul>
    </section>
  );
}

export default Portfolio;
